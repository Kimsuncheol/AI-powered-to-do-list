'use client';
import { useState, useEffect, useCallback } from 'react';
import {
  Container,
  Paper,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Checkbox,
  Chip,
  CircularProgress,
  Badge,
} from '@mui/material';
import { Circle as CircleIcon } from '@mui/icons-material';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { PickersDay, PickersDayProps } from '@mui/x-date-pickers/PickersDay';
import dayjs, { Dayjs } from 'dayjs';
import { useSearchParams, useRouter } from 'next/navigation';
import { Task } from '@/types';
import { taskService } from '@/services/taskService';
import { useAuth } from '@/contexts/AuthContext';

// Custom day component with task indicators
function TaskDay(props: PickersDayProps & { taskDates?: Set<string> }) {
  const { taskDates, day, outsideCurrentMonth, ...other } = props;
  
  const dateKey = day.format('YYYY-MM-DD');
  const hasTask = taskDates?.has(dateKey);

  return (
    <Badge
      key={day.toString()}
      overlap="circular"
      badgeContent={hasTask ? <CircleIcon sx={{ fontSize: 8, color: 'primary.main' }} /> : undefined}
    >
      <PickersDay {...other} outsideCurrentMonth={outsideCurrentMonth} day={day} />
    </Badge>
  );
}

export default function CalendarPage() {
  const { user } = useAuth();
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const initialDate = searchParams.get('date');
  const [selectedDate, setSelectedDate] = useState<Dayjs>(
    initialDate ? dayjs(initialDate) : dayjs()
  );
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskDates, setTaskDates] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);

  const loadTasks = useCallback(async () => {
    if (!user) return;
    setLoading(true);
    try {
      const allTasks = await taskService.getTasks(user.uid);
      setTasks(allTasks);
      
      // Build set of dates that have tasks
      const dates = new Set<string>();
      allTasks.forEach((task: Task) => {
        if (task.dueDate) {
          const date = task.dueDate instanceof Date 
            ? dayjs(task.dueDate).format('YYYY-MM-DD')
            : dayjs(task.dueDate).format('YYYY-MM-DD');
          dates.add(date);
        }
      });
      setTaskDates(dates);
    } catch (error) {
      console.error('Failed to load tasks:', error);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      loadTasks();
    }
  }, [user, loadTasks]);

  const handleDateChange = (newValue: Dayjs | null) => {
    if (newValue) {
      setSelectedDate(newValue);
      router.push(`/calendar?date=${newValue.format('YYYY-MM-DD')}`, { scroll: false });
    }
  };

  const handleToggleTask = async (task: Task) => {
    try {
      await taskService.updateTask(task.id, { completed: !task.completed });
      await loadTasks();
    } catch (error) {
      console.error('Failed to toggle task:', error);
    }
  };

  // Get tasks for the selected date
  const selectedDateTasks = tasks.filter((task: Task) => {
    if (!task.dueDate) return false;
    const taskDate = task.dueDate instanceof Date 
      ? dayjs(task.dueDate).format('YYYY-MM-DD')
      : dayjs(task.dueDate).format('YYYY-MM-DD');
    return taskDate === selectedDate.format('YYYY-MM-DD');
  });

  // Priority color mapping
  const getPriorityColor = (priority: string | undefined) => {
    switch (priority) {
      case 'high': return 'error';
      case 'medium': return 'warning';
      case 'low': return 'success';
      default: return 'default';
    }
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 8 }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
          📅 Calendar
        </Typography>
        <Typography variant="body2" color="text.secondary">
          View and manage your tasks by date
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', gap: 3, flexDirection: { xs: 'column', md: 'row' } }}>
        {/* Calendar Section */}
        <Box sx={{ width: { xs: '100%', md: '40%' } }}>
          <Paper
            elevation={0}
            sx={{
              p: 2,
              borderRadius: 2,
              border: '1px solid',
              borderColor: 'divider',
            }}
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar
                value={selectedDate}
                onChange={handleDateChange}
                slots={{
                  day: TaskDay,
                }}
                slotProps={{
                  day: {
                    taskDates,
                  } as any,
                }}
                sx={{
                  width: '100%',
                  '& .MuiPickersCalendarHeader-root': {
                    paddingLeft: 2,
                    paddingRight: 2,
                  },
                }}
              />
            </LocalizationProvider>
          </Paper>
        </Box>

        {/* Tasks Section */}
        <Box sx={{ flex: 1 }}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              borderRadius: 2,
              border: '1px solid',
              borderColor: 'divider',
              minHeight: 400,
            }}
          >
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              {selectedDate.format('dddd, MMMM D, YYYY')}
            </Typography>

            {selectedDateTasks.length > 0 ? (
              <List>
                {selectedDateTasks.map((task: Task) => (
                  <ListItem
                    key={task.id}
                    sx={{
                      borderRadius: 1,
                      mb: 1,
                      bgcolor: 'background.paper',
                      border: '1px solid',
                      borderColor: 'divider',
                      '&:hover': {
                        bgcolor: 'action.hover',
                      },
                    }}
                  >
                    <ListItemIcon>
                      <Checkbox
                        checked={task.completed}
                        onChange={() => handleToggleTask(task)}
                        color="primary"
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={task.title}
                      secondary={task.description}
                      primaryTypographyProps={{
                        sx: {
                          textDecoration: task.completed ? 'line-through' : 'none',
                          color: task.completed ? 'text.secondary' : 'text.primary',
                          fontWeight: 500,
                        },
                      }}
                    />
                    {task.priority && (
                      <Chip
                        label={task.priority}
                        size="small"
                        color={getPriorityColor(task.priority)}
                        sx={{ ml: 1 }}
                      />
                    )}
                  </ListItem>
                ))}
              </List>
            ) : (
              <Box sx={{ textAlign: 'center', py: 8 }}>
                <Typography variant="h6" color="text.secondary" sx={{ mb: 1 }}>
                  No tasks for this day
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Select a different date or create a new task with a due date
                </Typography>
              </Box>
            )}
          </Paper>
        </Box>
      </Box>
    </Container>
  );
}
