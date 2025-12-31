'use client';
import { useState, useEffect, useCallback } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Chip,
  Badge,
} from '@mui/material';
import { Close as CloseIcon, Circle as CircleIcon } from '@mui/icons-material';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { PickersDay, PickersDayProps } from '@mui/x-date-pickers/PickersDay';
import dayjs, { Dayjs } from 'dayjs';
import { useRouter } from 'next/navigation';
import { Task } from '@/types';
import { taskService } from '@/services/taskService';
import { useAuth } from '@/contexts/AuthContext';

interface CalendarModalProps {
  open: boolean;
  onClose: () => void;
}

// Custom day component to show task indicators
function TaskDay(props: PickersDayProps & { taskDates?: Set<string> }) {
  const { taskDates, day, outsideCurrentMonth, ...other } = props;
  
  const dateKey = day.format('YYYY-MM-DD');
  const hasTask = taskDates?.has(dateKey);

  return (
    <Badge
      key={day.toString()}
      overlap="circular"
      badgeContent={hasTask ? <CircleIcon sx={{ fontSize: 6, color: 'primary.main' }} /> : undefined}
    >
      <PickersDay {...other} outsideCurrentMonth={outsideCurrentMonth} day={day} />
    </Badge>
  );
}


export default function CalendarModal({ open, onClose }: CalendarModalProps) {
  const router = useRouter();
  const { user } = useAuth();
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskDates, setTaskDates] = useState<Set<string>>(new Set());

  const loadTasks = useCallback(async () => {
    if (!user) return;
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
    }
  }, [user]);

  useEffect(() => {
    if (open && user) {
      loadTasks();
    }
  }, [open, user, loadTasks]);

  const handleDateChange = (newValue: Dayjs | null) => {
    setSelectedDate(newValue);
  };

  const handleViewFullCalendar = () => {
    const dateParam = selectedDate ? selectedDate.format('YYYY-MM-DD') : '';
    router.push(`/calendar${dateParam ? `?date=${dateParam}` : ''}`);
    onClose();
  };

  // Get tasks for the selected date
  const selectedDateTasks = tasks.filter((task: Task) => {
    if (!task.dueDate || !selectedDate) return false;
    const taskDate = task.dueDate instanceof Date 
      ? dayjs(task.dueDate).format('YYYY-MM-DD')
      : dayjs(task.dueDate).format('YYYY-MM-DD');
    return taskDate === selectedDate.format('YYYY-MM-DD');
  });

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ m: 0, p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6" component="span" sx={{ fontWeight: 'bold' }}>
          📅 Calendar
        </Typography>
        <IconButton aria-label="close" onClick={onClose} size="small">
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ p: 0 }}>
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
          />
        </LocalizationProvider>

        {/* Tasks for selected date */}
        <Box sx={{ px: 3, pb: 2 }}>
          <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
            {selectedDate?.format('MMMM D, YYYY')}
          </Typography>
          
          {selectedDateTasks.length > 0 ? (
            <List dense sx={{ bgcolor: 'background.paper', borderRadius: 1 }}>
              {selectedDateTasks.slice(0, 5).map((task: Task) => (
                <ListItem key={task.id} sx={{ py: 0.5 }}>
                  <ListItemText 
                    primary={task.title}
                    primaryTypographyProps={{
                      sx: { 
                        textDecoration: task.completed ? 'line-through' : 'none',
                        color: task.completed ? 'text.secondary' : 'text.primary',
                      }
                    }}
                  />
                  {task.priority && (
                    <Chip 
                      label={task.priority} 
                      size="small" 
                      color={task.priority === 'high' ? 'error' : task.priority === 'medium' ? 'warning' : 'default'}
                    />
                  )}
                </ListItem>
              ))}
              {selectedDateTasks.length > 5 && (
                <Typography variant="caption" color="text.secondary" sx={{ pl: 2 }}>
                  +{selectedDateTasks.length - 5} more tasks
                </Typography>
              )}
            </List>
          ) : (
            <Typography variant="body2" color="text.secondary">
              No tasks scheduled for this day
            </Typography>
          )}

          <Box sx={{ mt: 2, textAlign: 'center' }}>
            <Typography 
              variant="body2" 
              color="primary" 
              sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}
              onClick={handleViewFullCalendar}
            >
              View Full Calendar →
            </Typography>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
