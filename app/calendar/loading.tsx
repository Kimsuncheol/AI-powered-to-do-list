'use client';
import { Box, CircularProgress, Typography } from '@mui/material';

export default function CalendarLoading() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 10 }}>
      <CircularProgress />
      <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
        Loading calendar...
      </Typography>
    </Box>
  );
}
