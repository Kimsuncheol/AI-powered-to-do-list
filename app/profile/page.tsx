'use client';
import { Container, Typography, Paper, Box, Avatar, Chip, Grid, Card, CardContent } from '@mui/material';
import { useAuth } from '@/contexts/AuthContext';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

export default function ProfilePage() {
  const { user } = useAuth();

  // Mock stats - in real app these would come from database
  const stats = {
    totalTasks: 24,
    completedTasks: 18,
    activeTasks: 6,
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 8 }}>
      {/* Profile Header */}
      <Paper 
        elevation={0} 
        sx={{ 
          p: 4, 
          mb: 4, 
          borderRadius: 3,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            background: 'radial-gradient(circle at top right, rgba(255,255,255,0.1), transparent)',
          }
        }}
      >
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <Avatar 
              src={user?.photoURL || undefined}
              sx={{ 
                width: 100, 
                height: 100, 
                mr: 3,
                border: '4px solid rgba(255,255,255,0.3)',
                boxShadow: '0 8px 16px rgba(0,0,0,0.2)'
              }}
            >
              {user?.displayName?.charAt(0) || 'U'}
            </Avatar>
            <Box sx={{ flex: 1 }}>
              <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
                {user?.displayName || 'Anonymous User'}
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.9, mb: 2 }}>
                {user?.email || 'No email'}
              </Typography>
              <Chip 
                icon={<CheckCircleIcon />}
                label="Premium Member" 
                sx={{ 
                  bgcolor: 'rgba(255,255,255,0.2)',
                  color: 'white',
                  fontWeight: 'bold',
                  backdropFilter: 'blur(10px)'
                }} 
              />
            </Box>
          </Box>
        </Box>
      </Paper>

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={4}>
          <Card 
            elevation={0} 
            sx={{ 
              borderRadius: 2, 
              border: '1px solid',
              borderColor: 'divider',
              transition: 'all 0.3s',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)'
              }
            }}
          >
            <CardContent sx={{ textAlign: 'center', p: 3 }}>
              <Box 
                sx={{ 
                  display: 'inline-flex',
                  p: 2,
                  borderRadius: 2,
                  bgcolor: 'primary.light',
                  mb: 2
                }}
              >
                <TaskAltIcon sx={{ fontSize: 32, color: 'primary.main' }} />
              </Box>
              <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
                {stats.totalTasks}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Total Tasks
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card 
            elevation={0} 
            sx={{ 
              borderRadius: 2, 
              border: '1px solid',
              borderColor: 'divider',
              transition: 'all 0.3s',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)'
              }
            }}
          >
            <CardContent sx={{ textAlign: 'center', p: 3 }}>
              <Box 
                sx={{ 
                  display: 'inline-flex',
                  p: 2,
                  borderRadius: 2,
                  bgcolor: 'success.light',
                  mb: 2
                }}
              >
                <CheckCircleIcon sx={{ fontSize: 32, color: 'success.main' }} />
              </Box>
              <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
                {stats.completedTasks}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Completed
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card 
            elevation={0} 
            sx={{ 
              borderRadius: 2, 
              border: '1px solid',
              borderColor: 'divider',
              transition: 'all 0.3s',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)'
              }
            }}
          >
            <CardContent sx={{ textAlign: 'center', p: 3 }}>
              <Box 
                sx={{ 
                  display: 'inline-flex',
                  p: 2,
                  borderRadius: 2,
                  bgcolor: 'warning.light',
                  mb: 2
                }}
              >
                <TrendingUpIcon sx={{ fontSize: 32, color: 'warning.main' }} />
              </Box>
              <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
                {stats.activeTasks}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                In Progress
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Achievement Section */}
      <Paper elevation={0} variant="outlined" sx={{ p: 3, borderRadius: 2 }}>
        <Typography variant="h6" sx={{ mb: 3, fontWeight: 'bold' }}>
          Recent Achievements
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <Chip label="🎯 First Task" color="primary" />
          <Chip label="🔥 7 Day Streak" color="secondary" />
          <Chip label="⚡ Speed Demon" color="success" />
          <Chip label="🌟 AI Power User" color="warning" />
        </Box>
      </Paper>
    </Container>
  );
}
