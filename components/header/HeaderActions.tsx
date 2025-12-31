'use client';
import { Stack, Tooltip, IconButton, Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AvatarMenu from './AvatarMenu';
import { useAuth } from '@/contexts/AuthContext';
import SignInModal from '../auth/SignInModal';
import SignUpModal from '../auth/SignUpModal';
import ResetPasswordModal from '../auth/ResetPasswordModal';

export default function HeaderActions() {
  const router = useRouter();
  const { user } = useAuth();
  
  // Modal states
  const [signInOpen, setSignInOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);
  const [resetOpen, setResetOpen] = useState(false);

  const handleOpenSignIn = () => {
    setSignUpOpen(false);
    setResetOpen(false);
    setSignInOpen(true);
  };

  const handleOpenSignUp = () => {
    setSignInOpen(false);
    setSignUpOpen(true);
  };

  const handleOpenReset = () => {
    setSignInOpen(false);
    setResetOpen(true);
  };

  return (
    <Stack direction="row" spacing={1.5} alignItems="center">
      {user ? (
        <>
          <Tooltip title="Create New Task">
            <IconButton
              color="primary"
              onClick={() => router.push('/tasks/new')}
              sx={{
                background: 'linear-gradient(135deg, rgba(102,126,234,0.1) 0%, rgba(118,75,162,0.1) 100%)',
                '&:hover': {
                  background: 'linear-gradient(135deg, rgba(102,126,234,0.2) 0%, rgba(118,75,162,0.2) 100%)',
                },
              }}
            >
              <AddCircleIcon />
            </IconButton>
          </Tooltip>
          <AvatarMenu />
        </>
      ) : (
        <>
          <Button 
            variant="text" 
            onClick={handleOpenSignIn}
            sx={{ fontWeight: 600, textTransform: 'none' }}
          >
            Sign In
          </Button>
          <Button 
            variant="contained" 
            onClick={handleOpenSignUp}
            sx={{ 
              fontWeight: 600, 
              textTransform: 'none',
              borderRadius: 2,
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            }}
          >
            Sign Up
          </Button>
        </>
      )}

      {/* Auth Modals */}
      <SignInModal 
        open={signInOpen} 
        onClose={() => setSignInOpen(false)} 
        onSwitchToSignUp={handleOpenSignUp}
        onSwitchToResetPassword={handleOpenReset}
      />
      <SignUpModal 
        open={signUpOpen} 
        onClose={() => setSignUpOpen(false)} 
        onSwitchToSignIn={handleOpenSignIn}
      />
      <ResetPasswordModal 
        open={resetOpen} 
        onClose={() => setResetOpen(false)} 
        onSwitchToSignIn={handleOpenSignIn}
      />
    </Stack>
  );
}
