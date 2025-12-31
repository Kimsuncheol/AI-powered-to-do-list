'use client';
import { useEffect, useState } from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  CircularProgress,
  Paper,
  LinearProgress,
} from '@mui/material';
import {
  CheckCircle as CheckCircleIcon,
  PendingActions as PendingIcon,
  Warning as WarningIcon,
  Assignment as AssignmentIcon,
} from '@mui/icons-material';
import { analyticsService, TaskAnalytics } from '@/services/analyticsService';
import { useAuth } from '@/contexts/AuthContext';

export default function InsightPage() {
  const { user } = useAuth();
  const [analytics, setAnalytics] = useState<TaskAnalytics | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      loadAnalytics();
    }
  }, [user]);

  const loadAnalytics = async () => {
    if (!user) return;
    try {
      const data = await analyticsService.getTaskAnalytics(user.uid);
      setAnalytics(data);
    } catch (error) {
      console.error('Failed to load analytics:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!analytics) {
    return (
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Typography>No analytics data available</Typography>
      </Container>
    );
  }

  const statCards = [
    {
      title: 'Total Tasks',
      value: analytics.totalTasks,
      icon: <AssignmentIcon />,
      color: '#667eea',
    },
    {
      title: 'Completed',
      value: analytics.completedTasks,
      icon: <CheckCircleIcon />,
      color: '#4caf50',
    },
    {
      title: 'In Progress',
      value: analytics.incompleteTasks,
      icon: <PendingIcon />,
      color: '#ff9800',
    },
    {
      title: 'Overdue',
      value: analytics.overdueTasks,
      icon: <WarningIcon />,
      color: '#f44336',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 8 }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
          📊 Task Insights
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Analytics and statistics for your tasks
        </Typography>
      </Box>

      {/* Stat Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {statCards.map((stat) => (
          <Grid item xs={12} sm={6} md={3} key={stat.title}>
            <Card
              elevation={0}
              sx={{
                borderRadius: 2,
                border: '1px solid',
                borderColor: 'divider',
                transition: 'all 0.2s',
                '&:hover': {
                  boxShadow: 2,
                  borderColor: stat.color,
                },
              }}
            >
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: 1,
                      bgcolor: `${stat.color}15`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: stat.color,
                    }}
                  >
                    {stat.icon}
                  </Box>
                </Box>
                <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                  {stat.value}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {stat.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Completion Rate */}
      <Paper
        elevation={0}
        sx={{
          p: 3,
          borderRadius: 2,
          border: '1px solid',
          borderColor: 'divider',
          mb: 3,
        }}
      >
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
          Completion Rate
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box sx={{ flex: 1 }}>
            <LinearProgress
              variant="determinate"
              value={analytics.completionRate}
              sx={{
                height: 10,
                borderRadius: 5,
                bgcolor: 'grey.200',
                '& .MuiLinearProgress-bar': {
                  borderRadius: 5,
                  bgcolor: '#4caf50',
                },
              }}
            />
          </Box>
          <Typography variant="h6" sx={{ fontWeight: 'bold', minWidth: 60 }}>
            {analytics.completionRate.toFixed(1)}%
          </Typography>
        </Box>
      </Paper>

      {/* Priority Breakdown */}
      <Paper
        elevation={0}
        sx={{
          p: 3,
          borderRadius: 2,
          border: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
          Tasks by Priority
        </Typography>
        <Grid container spacing={2}>
          {[
            { label: '🔴 High', value: analytics.tasksByPriority.high, color: '#f44336' },
            { label: '🟡 Medium', value: analytics.tasksByPriority.medium, color: '#ff9800' },
            { label: '🟢 Low', value: analytics.tasksByPriority.low, color: '#4caf50' },
            { label: '⚪ None', value: analytics.tasksByPriority.none, color: '#9e9e9e' },
          ].map((priority) => (
            <Grid item xs={6} sm={3} key={priority.label}>
              <Box
                sx={{
                  p: 2,
                  borderRadius: 2,
                  border: '1px solid',
                  borderColor: 'divider',
                  textAlign: 'center',
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                  {priority.value}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {priority.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
}
