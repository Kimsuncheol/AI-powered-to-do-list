import { Paper, Box, Typography, ToggleButtonGroup, ToggleButton, Divider } from '@mui/material';
import { useTheme } from '@/contexts/ThemeContext';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useState } from 'react';

export default function PreferencesSection() {
  const { mode, setMode } = useTheme();
  const [notifications, setNotifications] = useState(true);

  return (
    <Paper elevation={0} variant="outlined" sx={{ p: 3, mb: 3, borderRadius: 2 }}>
      <Typography variant="h6" sx={{ mb: 3, fontWeight: 'bold' }}>
        Preferences
      </Typography>
      
      <Box>
        {/* Theme Mode Selection */}
        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <SettingsBrightnessIcon sx={{ mr: 1, color: 'text.secondary' }} fontSize="small" />
            <Typography variant="body1" sx={{ fontWeight: 'medium' }}>Appearance</Typography>
          </Box>
          <ToggleButtonGroup
            value={mode}
            exclusive
            onChange={(_, newMode) => {
              if (newMode !== null) setMode(newMode);
            }}
            aria-label="theme mode"
            fullWidth
            sx={{ 
              '& .MuiToggleButton-root': { 
                py: 1.5,
                textTransform: 'none',
                borderRadius: 1,
              }
            }}
          >
            <ToggleButton value="light" aria-label="light mode">
              <LightModeIcon sx={{ mr: 1 }} fontSize="small" />
              Light
            </ToggleButton>
            <ToggleButton value="dark" aria-label="dark mode">
              <DarkModeIcon sx={{ mr: 1 }} fontSize="small" />
              Dark
            </ToggleButton>
            <ToggleButton value="system" aria-label="system mode">
              <SettingsBrightnessIcon sx={{ mr: 1 }} fontSize="small" />
              System
            </ToggleButton>
          </ToggleButtonGroup>
          <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
            {mode === 'system' 
              ? 'Automatically adapts to your system settings' 
              : `Using ${mode} theme`}
          </Typography>
        </Box>
        
        <Divider sx={{ my: 3 }} />
        
        {/* Notifications Toggle */}
        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <NotificationsIcon sx={{ mr: 1, color: 'text.secondary' }} fontSize="small" />
              <Box>
                <Typography variant="body1" sx={{ fontWeight: 'medium' }}>Push Notifications</Typography>
                <Typography variant="caption" color="text.secondary">
                  Get notified about task deadlines
                </Typography>
              </Box>
            </Box>
            <ToggleButton
              value="check"
              selected={notifications}
              onChange={() => setNotifications(!notifications)}
              sx={{ 
                border: 'none',
                '&.Mui-selected': {
                  bgcolor: 'primary.main',
                  color: 'white',
                  '&:hover': {
                    bgcolor: 'primary.dark',
                  }
                }
              }}
            >
              {notifications ? 'On' : 'Off'}
            </ToggleButton>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}
