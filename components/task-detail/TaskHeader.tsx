import { Button, Typography, Stack, Chip, Box } from '@mui/material';
import { useRouter } from 'next/navigation';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Task } from '@/types';
import { useDevice } from '@/contexts/DeviceContext';

interface TaskHeaderProps {
  task: Task;
}

export default function TaskHeader({ task }: TaskHeaderProps) {
  const router = useRouter();
  const { isAndroid, isIOS } = useDevice();
  const showBackButton = isAndroid || isIOS;

  return (
    <>
      {showBackButton && (
        <Button 
          startIcon={<ArrowBackIcon />} 
          onClick={() => router.back()} 
          sx={{ mb: 2 }}
        >
          Back to Tasks
        </Button>
      )}
      
      <Typography 
        variant="h4" 
        component="h1" 
        sx={{ fontWeight: 'bold', mb: 2, textDecoration: task.completed ? 'line-through' : 'none' }}
      >
        {task.title}
      </Typography>
      
      <Stack direction="row" spacing={1} sx={{ mb: 3, flexWrap: 'wrap', gap: 1 }}>
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
    </>
  );
}
