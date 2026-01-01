'use client';
import React from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  IconButton, 
  Checkbox, 
  Chip, 
  Box,
  Stack
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SubtitlesIcon from '@mui/icons-material/Subtitles';
import Link from 'next/link';
import { Task } from '@/types';

interface TaskItemProps {
  task: Task;
  onToggle: (id: string, completed: boolean) => void;
  onDelete: (id: string) => void;
}

export default function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  return (
    <Card variant="outlined" sx={{ mb: 2, maxWidth: 'lg', mx: 'auto' }}>
      <CardContent sx={{ display: 'flex', alignItems: 'flex-start', p: 2 }}>
        <Checkbox 
          checked={task.completed} 
          onChange={() => onToggle(task.id, task.completed)}
          color="primary"
        />
        <Box sx={{ flexGrow: 1, ml: 1 }}>
          <Link href={`/tasks/${task.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography 
                variant="h6" 
                component="div" 
                sx={{ 
                textDecoration: task.completed ? 'line-through' : 'none',
                color: task.completed ? 'text.secondary' : 'text.primary',
                cursor: 'pointer',
                '&:hover': { textDecoration: 'underline' }
                }}
            >
                {task.title}
            </Typography>
          </Link>
          
          {task.description && (
            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
              {task.description}
            </Typography>
          )}
          
          <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
            {task.dueDate && (
              <Chip 
                label={new Date(task.dueDate).toLocaleDateString()} 
                size="small" 
                variant="outlined" 
                color="info"
              />
            )}
            {task.priority && (
              <Chip 
                label={task.priority} 
                size="small" 
                color={
                  task.priority === 'high' ? 'error' : 
                  task.priority === 'medium' ? 'warning' : 'success'
                } 
              />
            )}
            {task.tags?.map(tag => (
              <Chip key={tag} label={tag} size="small" variant="outlined" />
            ))}
            
            {task.subtasks && task.subtasks.length > 0 && (
              <Box sx={{ display: 'flex', alignItems: 'center', ml: 'auto !important' }}>
                <SubtitlesIcon sx={{ fontSize: 14, mr: 0.5, color: 'text.secondary' }} />
                <Typography variant="caption" color="text.secondary">
                  {task.subtasks.filter(s => s.completed).length}/{task.subtasks.length}
                </Typography>
              </Box>
            )}
          </Stack>
        </Box>
        <Box>
           <IconButton aria-label="delete" onClick={() => onDelete(task.id)}>
            <DeleteIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
}
