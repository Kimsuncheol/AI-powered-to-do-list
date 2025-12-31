'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Container,
  Box,
  Button,
  Typography,
  Divider,
  Tabs,
  Tab,
  Paper,
} from '@mui/material';
import {
  ArrowBack as ArrowBackIcon,
  Edit as EditIcon,
  AutoAwesome as AIIcon,
} from '@mui/icons-material';
import NewTaskForm from '@/components/task-new/NewTaskForm';
import AITaskCreator from '@/components/task-new/AITaskCreator';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel({ children, value, index }: TabPanelProps) {
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      sx={{ pt: 3 }}
    >
      {value === index && children}
    </Box>
  );
}

export default function NewTaskPage() {
  const router = useRouter();
  const [tabValue, setTabValue] = useState(0);
  const [taskCreated, setTaskCreated] = useState(false);

  const handleTaskCreated = () => {
    setTaskCreated(true);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 8 }}>
      {/* Back button */}
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => router.back()}
        sx={{
          mb: 4,
          color: 'text.secondary',
          '&:hover': { bgcolor: 'action.hover' },
        }}
      >
        Back
      </Button>

      {/* Page Header - Notion style */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="overline"
          sx={{
            color: 'text.secondary',
            letterSpacing: 2,
            fontSize: '0.75rem',
          }}
        >
          New Task
        </Typography>
      </Box>

      {/* Mode Tabs */}
      <Paper
        elevation={0}
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          bgcolor: 'transparent',
          mb: 2,
        }}
      >
        <Tabs
          value={tabValue}
          onChange={(_, newValue) => setTabValue(newValue)}
          sx={{
            '& .MuiTab-root': {
              textTransform: 'none',
              fontWeight: 500,
              fontSize: '0.95rem',
              minHeight: 48,
            },
          }}
        >
          <Tab
            icon={<EditIcon sx={{ fontSize: 20 }} />}
            iconPosition="start"
            label="Manual"
          />
          <Tab
            icon={<AIIcon sx={{ fontSize: 20 }} />}
            iconPosition="start"
            label="AI Assistant"
            sx={{
              '&.Mui-selected': {
                color: '#764ba2',
              },
            }}
          />
        </Tabs>
      </Paper>

      {/* Manual Form */}
      <TabPanel value={tabValue} index={0}>
        <NewTaskForm onSaved={handleTaskCreated} />
      </TabPanel>

      {/* AI Creator */}
      <TabPanel value={tabValue} index={1}>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
            Create with AI
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Describe what you need to do and the AI will create a structured task for you.
          </Typography>
        </Box>

        <AITaskCreator onTaskCreated={handleTaskCreated} />

        {taskCreated && (
          <Box
            sx={{
              mt: 3,
              p: 2,
              borderRadius: 2,
              bgcolor: 'success.light',
              border: '1px solid',
              borderColor: 'success.main',
            }}
          >
            <Typography variant="body2" color="success.dark">
              ✅ Task created successfully!{' '}
              <Button
                size="small"
                onClick={() => router.push('/')}
                sx={{ ml: 1, textTransform: 'none' }}
              >
                View Tasks
              </Button>
            </Typography>
          </Box>
        )}
      </TabPanel>
    </Container>
  );
}
