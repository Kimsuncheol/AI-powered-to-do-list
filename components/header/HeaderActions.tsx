'use client';
import { useState } from 'react';
import { Stack, Tooltip, Button, IconButton, useTheme } from '@mui/material';
import { useRouter } from 'next/navigation';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AvatarMenu from './AvatarMenu';
import { useAuth } from '@/contexts/AuthContext';
import { useAuthStore } from '@/store/authStore';
import CalendarModal from '@/components/calendar/CalendarModal';

export default function HeaderActions() {
  const router = useRouter();
  const { user } = useAuth();
  const { setOpenModal } = useAuthStore();
  const [calendarOpen, setCalendarOpen] = useState(false);
  const theme = useTheme();

  return (
    <>
      <Stack direction="row" spacing={1.5} alignItems="center">
        {user ? (
          <>
            <Tooltip title="Calendar">
              <IconButton
                onClick={() => setCalendarOpen(true)}
                sx={{
                  color: 'text.secondary',
                  '&:hover': {
                    color: 'primary.main',
                    bgcolor: 'action.hover',
                  },
                }}
              >
                <CalendarTodayIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Templates">
              <IconButton
                onClick={() => router.push('/template')}
                sx={{
                  color: 'text.secondary',
                  '&:hover': {
                    color: 'primary.main',
                    bgcolor: 'action.hover',
                  },
                }}
              >
                <DashboardIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Create New Task">
              <Button
                variant="outlined"
                startIcon={<AddCircleIcon />}
                onClick={() => router.push('/tasks/new')}
                sx={{
                  textTransform: 'none',
                  fontWeight: 600,
                  borderRadius: '99px',
                  px: 2.5,
                  bgcolor: 'transparent',
                  borderWidth: 1.5,
                  color: theme.palette.primary.contrastText,
                  borderColor: theme.palette.primary.contrastText,
                  transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  '&:hover': {
                    bgcolor: theme.palette.primary.main,
                    borderColor: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                    transform: 'translateY(-2px) scale(1.02)',
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
      <CalendarModal open={calendarOpen} onClose={() => setCalendarOpen(false)} />
    </>
  );
}
