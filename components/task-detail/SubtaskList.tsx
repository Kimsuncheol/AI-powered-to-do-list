import { Box, Typography, Paper, Checkbox, Divider, Stack } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';

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

  const completedCount = subtasks.filter(s => s.completed).length;

  return (
    <Box sx={{ mt: 5 }}>
      <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
        <AssignmentIcon color="action" fontSize="small" />
        <Typography variant="h6" sx={{ fontWeight: 600 }}>Subtasks</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ ml: 'auto' }}>
          {completedCount} of {subtasks.length} completed
        </Typography>
      </Stack>

      <Paper 
        elevation={0} 
        variant="outlined" 
        sx={{ 
          borderRadius: 2, 
          overflow: 'hidden',
          borderColor: 'divider',
          bgcolor: 'background.paper'
        }}
      >
        {subtasks.map((sub, index) => (
          <Box key={sub.id}>
            <Box 
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                px: 2,
                py: 1.5,
                transition: 'background-color 0.2s',
                '&:hover': {
                  bgcolor: 'rgba(0,0,0,0.02)',
                }
              }}
            >
              <Checkbox 
                checked={sub.completed} 
                onChange={() => onToggle(sub.id)}
                size="small"
                sx={{ 
                  color: 'primary.light',
                  '&.Mui-checked': {
                    color: 'success.main',
                  },
                }}
              />
              <Typography 
                variant="body1"
                sx={{ 
                  textDecoration: sub.completed ? 'line-through' : 'none', 
                  color: sub.completed ? 'text.secondary' : 'text.primary',
                  fontWeight: 400,
                  fontSize: '0.95rem',
                  ml: 1
                }}
              >
                {sub.title}
              </Typography>
            </Box>
            {index < subtasks.length - 1 && <Divider />}
          </Box>
        ))}
      </Paper>
    </Box>
  );
}
