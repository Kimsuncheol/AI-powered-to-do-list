'use client';
import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  IconButton, 
  Checkbox, 
  Chip, 
  Box,
  Stack,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Tooltip
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SubtitlesIcon from '@mui/icons-material/Subtitles';
import ShareIcon from '@mui/icons-material/Share';
import Link from 'next/link';
import { Task } from '@/types';
import { 
  FacebookShareButton, 
  TwitterShareButton, 
  LinkedinShareButton, 
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon
} from 'react-share';

interface TaskItemProps {
  task: Task;
  onToggle: (id: string, completed: boolean) => void;
  onDelete: (id: string) => void;
}

export default function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openShare = Boolean(anchorEl);

  const handleShareClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation(); // Prevent navigation when clicking share
    setAnchorEl(event.currentTarget);
  };

  const handleShareClose = (event?: React.MouseEvent<HTMLElement>) => {
    if (event) event.stopPropagation();
    setAnchorEl(null);
  };

  const shareUrl = typeof window !== 'undefined' ? `${window.location.origin}/tasks/${task.id}` : '';

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
            {(task.startDate || task.dueDate) && (
              <Chip 
                label={
                  task.startDate && task.dueDate 
                    ? `${new Date(task.startDate).toLocaleDateString()} - ${new Date(task.dueDate).toLocaleDateString()}`
                    : task.dueDate 
                      ? new Date(task.dueDate).toLocaleDateString() 
                      : ''
                } 
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
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Tooltip title="Share Task">
                <IconButton aria-label="share" onClick={handleShareClick} size="small" sx={{ mr: 1 }}>
                    <ShareIcon />
                </IconButton>
            </Tooltip>
             <Menu
                anchorEl={anchorEl}
                open={openShare}
                onClose={() => handleShareClose()}
                onClick={(e) => e.stopPropagation()} 
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                PaperProps={{
                    elevation: 3,
                    sx: { minWidth: 200, mt: 1.5 }
                }}
            >
                <FacebookShareButton url={shareUrl} style={{ width: '100%' }}>
                    <MenuItem onClick={() => handleShareClose()}>
                        <ListItemIcon><FacebookIcon size={24} round /></ListItemIcon>
                        <ListItemText primary="Facebook" />
                    </MenuItem>
                </FacebookShareButton>
                <TwitterShareButton url={shareUrl} title={task.title} style={{ width: '100%' }}>
                    <MenuItem onClick={() => handleShareClose()}>
                        <ListItemIcon><TwitterIcon size={24} round /></ListItemIcon>
                        <ListItemText primary="Twitter" />
                    </MenuItem>
                </TwitterShareButton>
                <LinkedinShareButton url={shareUrl} title={task.title} summary={task.description} style={{ width: '100%' }}>
                    <MenuItem onClick={() => handleShareClose()}>
                        <ListItemIcon><LinkedinIcon size={24} round /></ListItemIcon>
                        <ListItemText primary="LinkedIn" />
                    </MenuItem>
                </LinkedinShareButton>
                <WhatsappShareButton url={shareUrl} title={task.title} style={{ width: '100%' }}>
                    <MenuItem onClick={() => handleShareClose()}>
                        <ListItemIcon><WhatsappIcon size={24} round /></ListItemIcon>
                        <ListItemText primary="WhatsApp" />
                    </MenuItem>
                </WhatsappShareButton>
            </Menu>

           <IconButton aria-label="delete" onClick={() => onDelete(task.id)}>
            <DeleteIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
}
