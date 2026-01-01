'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Container, Box, Typography, CircularProgress, Button } from '@mui/material';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import { Task } from '@/types';
import { taskService } from '@/services/taskService';
import NewTaskForm from '@/components/task-new/NewTaskForm';

export default function EditTaskPage() {
  const params = useParams();
  const router = useRouter();
  const [task, setTask] = useState<Task | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTask = async (id: string) => {
      try {
        const fetchedTask = await taskService.getTask(id);
        if (fetchedTask) {
          setTask(fetchedTask);
        } else {
          // Task not found
          router.push('/');
        }
      } catch (error) {
        console.error("Failed to load task", error);
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
       loadTask(params.id as string);
    }
  }, [params.id, router]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!task) {
     return null;
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 10 }}>
       <Button 
          startIcon={<ArrowBackIcon />} 
          onClick={() => router.back()}
          sx={{ mb: 3, textTransform: 'none', color: 'text.secondary' }}
        >
          Back
        </Button>
        
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" sx={{ fontWeight: 600 }}>
          Edit Task
        </Typography>
      </Box>

      <NewTaskForm initialTask={task} />
    </Container>
  );
}
