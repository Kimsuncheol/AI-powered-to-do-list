'use client';
import { Container, Typography, Box, Tabs, Tab } from '@mui/material';
import { useAuth } from '@/contexts/AuthContext';
import PreferencesSection from '@/components/settings/PreferencesSection';
import AIFeaturesSection from '@/components/settings/AIFeaturesSection';
import AccountSection from '@/components/settings/AccountSection';
import { useState } from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function SettingsPage() {
  const { logout } = useAuth();
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 8 }}>
      {/* Header with gradient */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', mb: 1 }}>
          Settings
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Manage your account preferences and app settings
        </Typography>
      </Box>

      {/* Modern Tab Navigation */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
        <Tabs 
          value={activeTab} 
          onChange={(_, newValue) => setActiveTab(newValue)}
          sx={{
            '& .MuiTab-root': {
              textTransform: 'none',
              fontSize: '1rem',
              fontWeight: 500,
              minHeight: 64,
            }
          }}
        >
          <Tab icon={<SettingsIcon />} iconPosition="start" label="Preferences" />
          <Tab icon={<AutoAwesomeIcon />} iconPosition="start" label="AI Features" />
          <Tab icon={<AccountCircleIcon />} iconPosition="start" label="Account" />
        </Tabs>
      </Box>

      {/* Tab Panels */}
      <Box>
        {activeTab === 0 && <PreferencesSection />}
        {activeTab === 1 && <AIFeaturesSection />}
        {activeTab === 2 && <AccountSection onLogout={logout} />}
      </Box>
    </Container>
  );
}
