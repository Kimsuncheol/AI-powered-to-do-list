'use client';
import React, { useState } from 'react';
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
} from '@mui/material';
import { Save as SaveIcon, Add as AddIcon } from '@mui/icons-material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import { taskService } from '@/services/taskService';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';

interface NewTaskFormProps {
  onSaved?: () => void;
}

export default function NewTaskForm({ onSaved }: NewTaskFormProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high' | ''>('');
  const [dueDate, setDueDate] = useState<Dayjs | null>(null);
  const [tagInput, setTagInput] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [saving, setSaving] = useState(false);
  const { user } = useAuth();
  const router = useRouter();

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
    if (!title.trim() || !user) return;

    setSaving(true);
    try {
      await taskService.addTask(
        {
          title: title.trim(),
          description: description.trim() || undefined,
          priority: priority || undefined,
          dueDate: dueDate ? dueDate.toDate() : undefined,
          tags: tags.length > 0 ? tags : undefined,
          completed: false,
        },
        user.uid
      );
      onSaved?.();
      router.push('/');
    } catch (error) {
      console.error('Failed to create task:', error);
    } finally {
      setSaving(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      {/* Title - Notion style large input */}
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

      {/* Description - Notion style */}
      <TextField
        fullWidth
        multiline
        minRows={3}
        placeholder="Add a description..."
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

        <Stack spacing={2}>
          {/* Priority */}
          <FormControl size="small" sx={{ minWidth: 150 }}>
            <InputLabel>Priority</InputLabel>
            <Select
              value={priority}
              label="Priority"
              onChange={(e) => setPriority(e.target.value as typeof priority)}
            >
              <MenuItem value=""><em>Not Set</em></MenuItem>
              <MenuItem value="low">🟢 Low</MenuItem>
              <MenuItem value="medium">🟡 Medium</MenuItem>
              <MenuItem value="high">🔴 High</MenuItem>
            </Select>
          </FormControl>

          {/* Due Date - Enhanced with DatePicker */}
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Due Date"
              value={dueDate}
              onChange={(newValue) => setDueDate(newValue)}
              slotProps={{
                textField: {
                  size: 'small',
                  sx: { maxWidth: 250 },
                },
              }}
            />
          </LocalizationProvider>

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
          disabled={!title.trim() || saving}
          startIcon={saving ? undefined : <SaveIcon />}
          sx={{
            px: 4,
            borderRadius: 2,
            textTransform: 'none',
            fontWeight: 600,
          }}
        >
          {saving ? 'Creating...' : 'Create Task'}
        </Button>
      </Box>
    </Box>
  );
}
