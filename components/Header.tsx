'use client';
import { AppBar, Toolbar, IconButton, Stack, Tooltip } from '@mui/material';
import { useAuth } from '@/contexts/AuthContext';
import { usePathname, useRouter } from 'next/navigation';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import HeaderLogo from './header/HeaderLogo';
import AvatarMenu from './header/AvatarMenu';

export default function Header() {
  const { user } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  // Don't show header on login page
  if (pathname === '/login') return null;
  if (!user) return null;

  return (
    <AppBar 
      position="static" 
      color="transparent" 
      elevation={0} 
      sx={{ 
        borderBottom: '1px solid',
        borderColor: 'divider',
        backdropFilter: 'blur(8px)',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <HeaderLogo />
        
        <Stack direction="row" spacing={1} alignItems="center">
          <Tooltip title="Create New Task">
            <IconButton 
              color="primary" 
              onClick={() => router.push('/tasks/new')}
              sx={{ 
                background: 'linear-gradient(135deg, rgba(102,126,234,0.1) 0%, rgba(118,75,162,0.1) 100%)',
                '&:hover': {
                  background: 'linear-gradient(135deg, rgba(102,126,234,0.2) 0%, rgba(118,75,162,0.2) 100%)',
                }
              }}
            >
              <AddCircleIcon />
            </IconButton>
          </Tooltip>
          <AvatarMenu />
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
