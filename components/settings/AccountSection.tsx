import { Paper, Typography, Button } from '@mui/material';

interface AccountSectionProps {
  onLogout: () => void;
}

export default function AccountSection({ onLogout }: AccountSectionProps) {
  return (
    <Paper elevation={0} variant="outlined" sx={{ p: 3, borderRadius: 2, bgcolor: 'rgba(0,0,0,0.02)' }}>
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
        Account
      </Typography>
      <Button 
        variant="outlined" 
        color="error"
        onClick={onLogout}
        fullWidth
        sx={{ textTransform: 'none', py: 1.5 }}
      >
        Sign Out
      </Button>
    </Paper>
  );
}
