import React, { useState, useEffect } from 'react';
import {
  Box,
  TextField,
  Button,
  Stack,
  Chip,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Typography,
  Alert,
} from '@mui/material';
import { Save as SaveIcon, Add as AddIcon } from '@mui/icons-material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';
import { DateRange } from '@mui/x-date-pickers-pro/models';
import dayjs, { Dayjs } from 'dayjs';
import { taskService } from '@/services/taskService';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { Task } from '@/types';

interface NewTaskFormProps {
  onSaved?: () => void;
  initialTask?: Task;
}

export default function NewTaskForm({ onSaved, initialTask }: NewTaskFormProps) {
  const [title, setTitle] = useState(initialTask?.title || '');
  const [description, setDescription] = useState(initialTask?.description || '');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high' | ''>(initialTask?.priority || '');
  // Date Range State
  const [dateRange, setDateRange] = useState<DateRange<Dayjs>>([
    initialTask?.startDate ? dayjs(initialTask.startDate) : null,
    initialTask?.dueDate ? dayjs(initialTask.dueDate) : null,
  ]);
  
  const [tagInput, setTagInput] = useState('');
  const [tags, setTags] = useState<string[]>(initialTask?.tags || []);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (initialTask) {
      setTitle(initialTask.title);
      setDescription(initialTask.description || '');
      setPriority(initialTask.priority || '');
      setDateRange([
        initialTask.startDate ? dayjs(initialTask.startDate) : null,
        initialTask.dueDate ? dayjs(initialTask.dueDate) : null,
      ]);
      setTags(initialTask.tags || []);
    }
  }, [initialTask]);

  const handleAddTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    setError('');

    // Validation: All fields must be filled
    if (!title.trim()) {
      setError('Title is required.');
      return;
    }
    if (!description.trim()) {
      setError('Description is required.');
      return;
    }
    if (!priority) {
      setError('Priority is required.');
      return;
    }
    const [start, end] = dateRange;
    if (!start || !end) {
      setError('Please select both a start date and a due date.');
      return;
    }

    setSaving(true);
    try {
      const taskData = {
        title: title.trim(),
        description: description.trim(),
        priority: priority,
        startDate: start.toDate(),
        dueDate: end.toDate(),
        tags: tags.length > 0 ? tags : undefined,
      };

      if (initialTask) {
        await taskService.updateTask(initialTask.id, taskData);
      } else {
        await taskService.addTask(
          {
            ...taskData,
            completed: false,
          },
          user.uid
        );
      }
      onSaved?.();
      
      if (initialTask) {
        router.back(); 
      } else {
        router.push('/');
      }
    } catch (error) {
      console.error('Failed to save task:', error);
      setError('Failed to save task. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      {/* Title */}
      <TextField
        fullWidth
        placeholder="Untitled"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        variant="standard"
        autoFocus
        InputProps={{
          disableUnderline: true,
          sx: {
            fontSize: '2.5rem',
            fontWeight: 700,
            '&::placeholder': {
              color: 'text.disabled',
              opacity: 0.5,
            },
          },
        }}
        sx={{ mb: 2 }}
      />

      {/* Description */}
      <TextField
        fullWidth
        multiline
        minRows={3}
        placeholder="Add a description... (Required)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        variant="standard"
        InputProps={{
          disableUnderline: true,
          sx: {
            fontSize: '1rem',
            lineHeight: 1.7,
            color: 'text.secondary',
          },
        }}
        sx={{ mb: 4 }}
      />

      {/* Properties */}
      <Box
        sx={{
          py: 2,
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Typography
          variant="overline"
          sx={{ color: 'text.secondary', mb: 2, display: 'block' }}
        >
          Properties
        </Typography>

        <Stack spacing={3}>
          {/* Priority */}
          <FormControl size="small" sx={{ maxWidth: 200 }} required>
            <InputLabel>Priority</InputLabel>
            <Select
              value={priority}
              label="Priority"
              onChange={(e) => setPriority(e.target.value as typeof priority)}
            >
              <MenuItem value="low">🟢 Low</MenuItem>
              <MenuItem value="medium">🟡 Medium</MenuItem>
              <MenuItem value="high">🔴 High</MenuItem>
            </Select>
          </FormControl>

          {/* Date Range Calendar */}
          <Box>
            <Typography variant="caption" color="text.secondary" sx={{ mb: 1, display: 'block' }}>
              Start Date - Due Date *
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
               <DateRangeCalendar 
                  value={dateRange} 
                  onChange={(newValue) => setDateRange(newValue)} 
                  calendars={1} 
               />
            </LocalizationProvider>
          </Box>

          {/* Tags */}
          <Box>
            <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
              <TextField
                size="small"
                placeholder="Add tag"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleAddTag();
                  }
                }}
                sx={{ maxWidth: 150 }}
              />
              <Button
                size="small"
                variant="outlined"
                onClick={handleAddTag}
                startIcon={<AddIcon />}
              >
                Add
              </Button>
            </Stack>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              {tags.map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  size="small"
                  onDelete={() => handleRemoveTag(tag)}
                />
              ))}
            </Stack>
          </Box>
        </Stack>
      </Box>

      {/* Save Button */}
      <Box sx={{ mt: 4, pt: 3, borderTop: '1px solid', borderColor: 'divider' }}>
        <Button
          type="submit"
          variant="contained"
          size="large"
          disabled={saving}
          startIcon={saving ? undefined : <SaveIcon />}
          sx={{
            px: 4,
            borderRadius: 2,
            textTransform: 'none',
            fontWeight: 600,
          }}
        >
          {saving ? 'Saving...' : (initialTask ? 'Update Task' : 'Create Task')}
        </Button>
      </Box>
    </Box>
  );
}
