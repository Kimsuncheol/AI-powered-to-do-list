'use client';
import { Stack, Tooltip, Button } from '@mui/material';
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
            <Button
              variant="contained"
              startIcon={<AddCircleIcon />}
              onClick={() => router.push('/tasks/new')}
              sx={{
                textTransform: 'none',
                fontWeight: 600,
                borderRadius: '99px',
                px: 2.5,
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                boxShadow: '0 4px 14px 0 rgba(118, 75, 162, 0.39)',
                transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
                  transform: 'translateY(-2px) scale(1.02)',
                  boxShadow: '0 6px 20px rgba(118, 75, 162, 0.45)',
                },
                '&:active': {
                  transform: 'translateY(0) scale(0.98)',
                },
              }}
            >
              New Task
            </Button>
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
