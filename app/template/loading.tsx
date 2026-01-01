'use client';
import { Box, CircularProgress } from '@mui/material';

export default function TemplateLoading() {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        minHeight: '80vh' 
      }}
    >
      <CircularProgress size={60} thickness={4} sx={{ color: 'primary.main' }} />
    </Box>
  );
}
