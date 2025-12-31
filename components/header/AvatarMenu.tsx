'use client';
import { Avatar, Menu, MenuItem, ListItemIcon, Divider } from '@mui/material';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import PaymentIcon from '@mui/icons-material/Payment';
import LogoutIcon from '@mui/icons-material/Logout';
import InsightsIcon from '@mui/icons-material/Insights';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export default function AvatarMenu() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { label: 'Profile', icon: <PersonIcon fontSize="small" />, path: '/profile' },
    { label: 'Calendar', icon: <CalendarMonthIcon fontSize="small" />, path: '/calendar' },
    { label: 'Insight', icon: <InsightsIcon fontSize="small" />, path: '/insight' },
    { label: 'Billing', icon: <PaymentIcon fontSize="small" />, path: '/billing' },
    { label: 'Settings', icon: <SettingsIcon fontSize="small" />, path: '/settings' },
  ];

  return (
    <>
      <Avatar
        src={user?.photoURL || undefined}
        sx={{ 
          width: 36, 
          height: 36, 
          cursor: 'pointer',
          border: '2px solid transparent',
          transition: 'all 0.2s',
          '&:hover': {
            border: '2px solid',
            borderColor: 'primary.main',
          }
        }}
        onClick={handleOpen}
        aria-controls="menu-appbar"
        aria-haspopup="true"
      >
        {user?.displayName?.charAt(0) || 'U'}
      </Avatar>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          elevation: 3,
          sx: {
            minWidth: 180,
            mt: 1,
            borderRadius: 2,
          }
        }}
      >
        {menuItems.map((item) => (
          <MenuItem 
            key={item.label}
            onClick={() => { handleClose(); router.push(item.path); }}
            sx={{ py: 1.5 }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            {item.label}
          </MenuItem>
        ))}
        <Divider sx={{ my: 1 }} />
        <MenuItem 
          onClick={() => { handleClose(); logout(); }}
          sx={{ py: 1.5, color: 'error.main' }}
        >
          <ListItemIcon><LogoutIcon fontSize="small" color="error" /></ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}
