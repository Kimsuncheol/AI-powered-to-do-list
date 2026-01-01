'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Container, Typography, Box, CircularProgress, Paper, Button, Divider, IconButton, Tooltip } from '@mui/material';
import { ArrowBack as ArrowBackIcon, Delete as DeleteIcon, Edit as EditIcon } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import { Task } from '@/types';
import { taskService } from '@/services/taskService';

import { generateSubtasksAction } from '@/actions/aiActions';
import TaskHeader from '@/components/task-detail/TaskHeader';
import TaskDescription from '@/components/task-detail/TaskDescription';
import SubtaskGenerator from '@/components/task-detail/SubtaskGenerator';
import SubtaskList from '@/components/task-detail/SubtaskList';

export default function TaskDetailsPage() {
  const router = useRouter();
  const params = useParams();

  const [task, setTask] = useState<Task | null>(null);
  const [loading, setLoading] = useState(true);
  const [generating, setGenerating] = useState(false);

  useEffect(() => {
    if (params.id) {
       loadTask(params.id as string);
    }
  }, [params.id]);

  const loadTask = async (id: string) => {
    try {
      const fetchedTask = await taskService.getTask(id);
      if (fetchedTask) {
        setTask(fetchedTask);
      }
    } catch (error) {
      console.error("Failed to load task", error);
    } finally {
      setLoading(false);
    }
  };
  
  const handleGenerateSubtasks = async () => {
    if (!task) return;
    setGenerating(true);
    try {
      const result = await generateSubtasksAction(task.title, task.description);
      if (result.success && result.data) {
        const newSubtasks = result.data.map((sub: { title: string; completed: boolean }) => ({
            id: crypto.randomUUID(),
            title: sub.title,
            completed: false
        }));
        
        // Optimistic UI
        const updatedTask = { ...task, subtasks: [...(task.subtasks || []), ...newSubtasks] };
        setTask(updatedTask);
        
        // Save to DB
        await taskService.updateTask(task.id, { subtasks: updatedTask.subtasks });
      }
    } catch (error) {
      console.error("Failed to generate subtasks", error);
    } finally {
      setGenerating(false);
    }
  };

  const toggleSubtask = async (subtaskId: string) => {
      if (!task || !task.subtasks) return;
      const updatedSubtasks = task.subtasks.map(sub => 
          sub.id === subtaskId ? { ...sub, completed: !sub.completed } : sub
      );
      const updatedTask = { ...task, subtasks: updatedSubtasks };
      setTask(updatedTask);
      await taskService.updateTask(task.id, { subtasks: updatedSubtasks });
  };

  const handleDelete = async () => {
    if (!task) return;
    if (confirm('Are you sure you want to delete this task?')) {
      await taskService.deleteTask(task.id);
      router.push('/');
    }
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}>
        <CircularProgress />
      </Box>
    );
  }
  
  if (!task) {
    return (
      <Typography align="center" sx={{ mt: 10 }}>
        Task not found
      </Typography>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 10 }}>
      <Box sx={{ mb: 3, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Button 
          startIcon={<ArrowBackIcon />} 
          onClick={() => router.push('/')}
          sx={{ textTransform: 'none', color: 'text.secondary' }}
        >
          Back to Tasks
        </Button>
        <Box>
            <Tooltip title="Edit Task">
            <IconButton onClick={() => router.push(`/tasks/${task.id}/edit`)} size="small" sx={{ mr: 1 }}>
                <EditIcon />
            </IconButton>
            </Tooltip>
            <Tooltip title="Delete Task">
            <IconButton onClick={handleDelete} color="error" size="small">
                <DeleteIcon />
            </IconButton>
            </Tooltip>
        </Box>
      </Box>

      <Paper 
        elevation={0} 
        variant="outlined" 
        sx={{ 
          p: { xs: 3, md: 5 }, 
          borderRadius: 3,
          borderColor: 'divider',
          bgcolor: 'background.paper',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <TaskHeader task={task} />
        
        <Box sx={{ mt: 4 }}>
          <TaskDescription description={task.description} />
        </Box>
        
        <Divider sx={{ my: 4 }} />
        
        <Box sx={{ maxWidth: 'sm' }}>
           <SubtaskList 
            subtasks={task.subtasks}
            onToggle={toggleSubtask}
          />
          
          <SubtaskGenerator 
            onGenerate={handleGenerateSubtasks}
            generating={generating}
          />
        </Box>
      </Paper>
    </Container>
  );
}
