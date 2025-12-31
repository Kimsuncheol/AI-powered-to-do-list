import { Paper, Box, Avatar, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import { User } from 'firebase/auth';

interface ProfileSectionProps {
  user: User | null;
}

export default function ProfileSection({ user }: ProfileSectionProps) {
  return (
    <Paper elevation={0} variant="outlined" sx={{ p: 3, mb: 3, borderRadius: 2 }}>
      <Typography variant="h6" sx={{ mb: 3, fontWeight: 'bold' }}>
        Profile
      </Typography>
      
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <Avatar 
          src={user?.photoURL || undefined}
          sx={{ width: 80, height: 80, mr: 3 }}
        >
          {user?.displayName?.charAt(0) || 'U'}
        </Avatar>
        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <PersonIcon sx={{ mr: 1, color: 'text.secondary' }} fontSize="small" />
            <Typography variant="body1" sx={{ fontWeight: 'medium' }}>
              {user?.displayName || 'Anonymous User'}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <EmailIcon sx={{ mr: 1, color: 'text.secondary' }} fontSize="small" />
            <Typography variant="body2" color="text.secondary">
              {user?.email || 'No email'}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}
