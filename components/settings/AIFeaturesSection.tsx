import { Paper, Box, Typography } from '@mui/material';

export default function AIFeaturesSection() {
  return (
    <Paper elevation={0} variant="outlined" sx={{ p: 3, mb: 3, borderRadius: 2 }}>
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
        AI Features
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        This application uses Google Gemini AI to power smart task parsing and subtask generation.
      </Typography>
      <Box sx={{ 
        p: 2, 
        bgcolor: 'rgba(25, 118, 210, 0.08)', 
        borderRadius: 1,
        border: '1px solid rgba(25, 118, 210, 0.2)'
      }}>
        <Typography variant="body2" sx={{ fontWeight: 'medium', mb: 0.5 }}>
          ✨ Available AI Features:
        </Typography>
        <Typography variant="body2" color="text.secondary">
          • Smart Task Parser - Natural language to structured tasks
        </Typography>
        <Typography variant="body2" color="text.secondary">
          • Automatic Subtask Generation - Break down complex tasks
        </Typography>
      </Box>
    </Paper>
  );
}
