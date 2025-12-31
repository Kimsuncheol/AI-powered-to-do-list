'use client';
import { AppBar, Toolbar } from '@mui/material';
import { useAuth } from '@/contexts/AuthContext';
import { usePathname } from 'next/navigation';
import HeaderLogo from './header/HeaderLogo';
import AvatarMenu from './header/AvatarMenu';

export default function Header() {
  const { user } = useAuth();
  const pathname = usePathname();

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
        <AvatarMenu />
      </Toolbar>
    </AppBar>
  );
}
