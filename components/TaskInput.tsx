'use client';
import React, { useState } from 'react';
import { 
  Paper, 
  InputBase, 
  IconButton, 
  Divider,
  Box,
  CircularProgress
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

interface TaskInputProps {
  onAdd: (title: string, isAi: boolean) => Promise<void>;
  disabled?: boolean;
}

export default function TaskInput({ onAdd, disabled }: TaskInputProps) {
  const [input, setInput] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (isAi: boolean) => {
    if (!input.trim()) return;
    setIsSubmitting(true);
    try {
      await onAdd(input, isAi);
      setInput('');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', mb: 3 }}
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(false);
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Add a new task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        disabled={disabled || isSubmitting}
      />
      
      {isSubmitting ? (
         <CircularProgress size={24} sx={{ mx: 2 }} />
      ) : (
        <>
          <IconButton 
             color="primary" 
             sx={{ p: '10px' }} 
             onClick={() => handleSubmit(false)}
             disabled={!input.trim()}
          >
            <AddIcon />
          </IconButton>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton 
            color="secondary" 
            sx={{ p: '10px' }} 
            onClick={() => handleSubmit(true)}
            disabled={!input.trim()}
            title="Add to with AI"
          >
            <AutoAwesomeIcon />
          </IconButton>
        </>
      )}
    </Paper>
  );
}
