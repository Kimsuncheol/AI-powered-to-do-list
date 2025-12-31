'use client';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Container, Typography, Box, CircularProgress, IconButton, Chip, Stack, Button, Paper, Checkbox } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { Task } from '@/types';
import { taskService } from '@/services/taskService';
import { useAuth } from '@/contexts/AuthContext';
import { generateSubtasksAction } from '@/actions/aiActions';

export default function TaskDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const { user } = useAuth();
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
        const newSubtasks = result.data.map((sub: any) => ({
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

  if (loading) return <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}><CircularProgress /></Box>;
  if (!task) return <Typography align="center" sx={{ mt: 10 }}>Task not found</Typography>;

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Button 
        startIcon={<ArrowBackIcon />} 
        onClick={() => router.back()} 
        sx={{ mb: 2 }}
      >
        Back to Tasks
      </Button>
      
      <Paper elevation={0} variant="outlined" sx={{ p: 4, borderRadius: 2 }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', mb: 2, textDecoration: task.completed ? 'line-through' : 'none' }}>
          {task.title}
        </Typography>
        
        <Stack direction="row" spacing={1} sx={{ mb: 3 }}>
           {task.priority && (
              <Chip 
                label={task.priority} 
                color={task.priority === 'high' ? 'error' : task.priority === 'medium' ? 'warning' : 'success'} 
              />
            )}
            {task.dueDate && (
              <Chip label={`Due: ${new Date(task.dueDate).toLocaleDateString()}`} variant="outlined" />
            )}
            {task.tags?.map(tag => <Chip key={tag} label={tag} variant="outlined" />)}
        </Stack>

        {task.description && (
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ mb: 1 }}>Description</Typography>
            <Typography variant="body1" color="text.secondary">
              {task.description}
            </Typography>
          </Box>
        )}
        
        <Box sx={{ mt: 4, p: 2, bgcolor: 'rgba(0,0,0,0.04)', borderRadius: 1 }}>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Typography variant="h6">AI Assistant</Typography>
                <AutoAwesomeIcon color="secondary" />
            </Stack>
            <Button 
                variant="contained" 
                color="secondary" 
                onClick={handleGenerateSubtasks}
                disabled={generating}
                sx={{ mt: 2 }}
                startIcon={generating ? <CircularProgress size={20} color="inherit" /> : <AutoAwesomeIcon />}
            >
                {generating ? 'Generating...' : 'Break down this task'}
            </Button>
        </Box>

        {task.subtasks && task.subtasks.length > 0 && (
            <Box sx={{ mt: 4 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>Subtasks</Typography>
                <Paper variant="outlined" sx={{ p: 1 }}>
                    {task.subtasks.map(sub => (
                        <Box key={sub.id} sx={{ display: 'flex', alignItems: 'center', py: 1, borderBottom: '1px solid #eee' }}>
                            <Checkbox 
                                checked={sub.completed} 
                                onChange={() => toggleSubtask(sub.id)}
                            />
                            <Typography sx={{ textDecoration: sub.completed ? 'line-through' : 'none', color: sub.completed ? 'text.secondary' : 'inherit' }}>
                                {sub.title}
                            </Typography>
                        </Box>
                    ))}
                </Paper>
            </Box>
        )}
      </Paper>
    </Container>
  );
}
