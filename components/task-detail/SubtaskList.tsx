import { Box, Typography, Paper, Checkbox } from '@mui/material';

interface Subtask {
  id: string;
  title: string;
  completed: boolean;
}

interface SubtaskListProps {
  subtasks?: Subtask[];
  onToggle: (subtaskId: string) => void;
}

export default function SubtaskList({ subtasks, onToggle }: SubtaskListProps) {
  if (!subtasks || subtasks.length === 0) return null;

  return (
    <Box sx={{ mt: 4, maxWidth: '100%' }}>
      <Typography variant="h6" sx={{ mb: 2 }}>Subtasks</Typography>
      <Paper variant="outlined" sx={{ p: 1 }}>
        {subtasks.map(sub => (
          <Box 
            key={sub.id} 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              py: 1, 
              borderBottom: '1px solid #eee',
              '&:last-child': { borderBottom: 'none' }
            }}
          >
            <Checkbox 
              checked={sub.completed} 
              onChange={() => onToggle(sub.id)}
            />
            <Typography 
              sx={{ 
                textDecoration: sub.completed ? 'line-through' : 'none', 
                color: sub.completed ? 'text.secondary' : 'inherit' 
              }}
            >
              {sub.title}
            </Typography>
          </Box>
        ))}
      </Paper>
    </Box>
  );
}
