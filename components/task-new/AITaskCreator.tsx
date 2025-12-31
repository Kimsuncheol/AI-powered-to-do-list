'use client';
import React, { useState } from 'react';
import {
  Box,
  TextField,
  IconButton,
  Typography,
  Paper,
  CircularProgress,
  Avatar,
} from '@mui/material';
import {
  AutoAwesome as AIIcon,
  Send as SendIcon,
} from '@mui/icons-material';
import { runAgentAction, AgentMessage } from '@/actions/agentActions';
import { useAuth } from '@/contexts/AuthContext';
import { useBilling } from '@/contexts/BillingContext';
import SuggestionChips from './SuggestionChips';
import ChatHistory from './ChatHistory';

interface AITaskCreatorProps {
  onTaskCreated?: () => void;
}

export default function AITaskCreator({ onTaskCreated }: AITaskCreatorProps) {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<AgentMessage[]>([]);
  const [expanded, setExpanded] = useState(false);
  const { user } = useAuth();
  const { canUseAgent, incrementAgentUsage } = useBilling();

  const handleSend = async () => {
    if (!input.trim() || loading || !user) return;

    const userMessage: AgentMessage = { role: 'user', content: input.trim() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);
    setExpanded(true);

    // Check billing limits
    if (!canUseAgent()) {
        const errorMessage: AgentMessage = {
          role: 'assistant',
          content: "You've reached your monthly AI Agent limit. Please upgrade your plan for more calls!"
        };
        setMessages(prev => [...prev, errorMessage]);
        setLoading(false);
        return;
    }

    try {
      const result = await runAgentAction(
        userMessage.content,
        user.uid,
        messages
      );

      if (result.success) {
        incrementAgentUsage(); // Update usage locally
        
        const assistantMessage: AgentMessage = { role: 'assistant', content: result.response };
        setMessages(prev => [...prev, assistantMessage]);

        // If task was created, notify parent
        if (result.response.includes('✅')) {
          onTaskCreated?.();
        }
      } else {
        const errorMessage: AgentMessage = {
          role: 'assistant',
          content: `Sorry, something went wrong: ${result.error}`
        };
        setMessages(prev => [...prev, errorMessage]);
      }
    } catch {
      const errorMessage: AgentMessage = {
        role: 'assistant',
        content: 'An unexpected error occurred. Please try again.'
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const suggestions = [
    "Add groceries for tomorrow",
    "Create a high priority meeting prep task",
    "Add read 20 pages due Friday",
  ];

  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'divider',
        background: 'linear-gradient(135deg, rgba(102,126,234,0.05) 0%, rgba(118,75,162,0.05) 100%)',
      }}
    >
      {/* Header */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
        <Avatar
          sx={{
            width: 32,
            height: 32,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          }}
        >
          <AIIcon sx={{ fontSize: 18 }} />
        </Avatar>
        <Box>
          <Typography variant="subtitle2" fontWeight="bold">
            AI Task Creator
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Describe your task in natural language
          </Typography>
        </Box>
      </Box>

      {/* Reddit-style Input */}
      <Paper
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          borderRadius: '99px',
          bgcolor: (theme) => theme.palette.mode === 'dark' ? '#272729' : '#f3f4f5',
          border: '1px solid transparent',
          padding: '8px 14px',
          mb: 2,
          transition: 'all 0.2s ease',
          '&:hover': {
            bgcolor: (theme) => theme.palette.mode === 'dark' ? '#2d2d2f' : '#edeff1',
          },
          '&:focus-within': {
            bgcolor: (theme) => theme.palette.mode === 'dark' ? '#1a1a1b' : '#ffffff',
            border: (theme) => `1px solid ${theme.palette.divider}`,
          }
        }}
      >
        <AIIcon sx={{ color: 'text.secondary', fontSize: 20, mr: 1 }} />
        <TextField
          fullWidth
          variant="standard"
          placeholder="e.g., Add a task to call mom tomorrow at 5pm, high priority"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSend();
            }
          }}
          disabled={loading}
          InputProps={{
            disableUnderline: true,
            sx: {
              fontSize: '0.95rem',
              '& input::placeholder': {
                color: 'text.secondary',
                opacity: 0.7,
              }
            }
          }}
        />
        {loading ? (
          <CircularProgress size={20} sx={{ ml: 1, color: 'text.secondary' }} />
        ) : (
          input.trim() && (
            <IconButton
              size="small"
              onClick={handleSend}
              sx={{
                ml: 1,
                p: '6px',
                bgcolor: 'primary.main',
                color: 'white',
                '&:hover': { bgcolor: 'primary.dark' },
              }}
            >
              <SendIcon fontSize="small" />
            </IconButton>
          )
        )}
      </Paper>

      {/* Quick suggestions */}
      {messages.length === 0 && (
        <SuggestionChips suggestions={suggestions} onSelect={setInput} />
      )}

      {/* Chat history */}
      <ChatHistory messages={messages} loading={loading} expanded={expanded} />
    </Paper>
  );
}
