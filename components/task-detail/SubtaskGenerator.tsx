import { Box, Button, Stack, Typography, CircularProgress } from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

interface SubtaskGeneratorProps {
  onGenerate: () => void;
  generating: boolean;
}

export default function SubtaskGenerator({ onGenerate, generating }: SubtaskGeneratorProps) {
  return (
    <Box sx={{ mt: 4, p: 2, bgcolor: 'rgba(0,0,0,0.04)', borderRadius: 1 }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="h6">AI Assistant</Typography>
        <AutoAwesomeIcon color="secondary" />
      </Stack>
      <Button 
        variant="contained" 
        color="secondary" 
        onClick={onGenerate}
        disabled={generating}
        sx={{ mt: 2 }}
        startIcon={generating ? <CircularProgress size={20} color="inherit" /> : <AutoAwesomeIcon />}
      >
        {generating ? 'Generating...' : 'Break down this task'}
      </Button>
    </Box>
  );
}
