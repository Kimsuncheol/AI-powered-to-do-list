import { Box, CircularProgress } from '@mui/material';

export default function TaskDetailLoading() {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        minHeight: '50vh',
        mt: 10 
      }}
    >
      <CircularProgress size={60} />
    </Box>
  );
}
