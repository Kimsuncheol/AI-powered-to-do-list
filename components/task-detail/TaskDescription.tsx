import { Box, Typography } from '@mui/material';

interface TaskDescriptionProps {
  description?: string;
}

export default function TaskDescription({ description }: TaskDescriptionProps) {
  if (!description) return null;

  return (
    <Box sx={{ mb: 4, maxWidth: '100%' }}>
      <Typography variant="h6" sx={{ mb: 1 }}>Description</Typography>
      <Typography variant="body1" color="text.secondary">
        {description}
      </Typography>
    </Box>
  );
}
