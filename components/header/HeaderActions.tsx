'use client';
import { Stack, Tooltip, IconButton, Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AvatarMenu from './AvatarMenu';
import { useAuth } from '@/contexts/AuthContext';
import { useAuthStore } from '@/store/authStore';

export default function HeaderActions() {
  const router = useRouter();
  const { user } = useAuth();
  const { setOpenModal } = useAuthStore();

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
            variant="contained" 
            onClick={() => setOpenModal('signIn')}
            sx={{ 
              fontWeight: 600, 
              textTransform: 'none',
              borderRadius: 2,
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            }}
          >
            Sign In
          </Button>
        </>
      )}
    </Stack>
  );
}
