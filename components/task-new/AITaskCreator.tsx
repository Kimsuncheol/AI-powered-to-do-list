'use client';
import React, { useState } from 'react';
import {
  Box,
  TextField,
  IconButton,
  Typography,
  Paper,
  CircularProgress,
  Collapse,
  Avatar,
  Chip,
} from '@mui/material';
import {
  AutoAwesome as AIIcon,
  Send as SendIcon,
  SmartToy as AgentIcon,
} from '@mui/icons-material';
import { runAgentAction, AgentMessage } from '@/actions/agentActions';
import { useAuth } from '@/contexts/AuthContext';
import { useBilling } from '@/contexts/BillingContext';

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

      {/* Input */}
      <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
        <TextField
          fullWidth
          size="small"
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
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: 2,
              bgcolor: 'background.paper',
            },
          }}
        />
        <IconButton
          onClick={handleSend}
          disabled={!input.trim() || loading}
          sx={{
            bgcolor: 'primary.main',
            color: 'white',
            '&:hover': { bgcolor: 'primary.dark' },
            '&:disabled': { bgcolor: 'grey.300' },
          }}
        >
          {loading ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
        </IconButton>
      </Box>

      {/* Quick suggestions */}
      {messages.length === 0 && (
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {suggestions.map((suggestion) => (
            <Chip
              key={suggestion}
              label={suggestion}
              size="small"
              variant="outlined"
              onClick={() => setInput(suggestion)}
              sx={{ cursor: 'pointer' }}
            />
          ))}
        </Box>
      )}

      {/* Chat history */}
      <Collapse in={expanded && messages.length > 0}>
        <Box
          sx={{
            mt: 2,
            pt: 2,
            borderTop: '1px solid',
            borderColor: 'divider',
            maxHeight: 200,
            overflow: 'auto',
          }}
        >
          {messages.map((msg, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
                mb: 1,
              }}
            >
              {msg.role === 'assistant' && (
                <Avatar sx={{ width: 24, height: 24, mr: 1, bgcolor: 'primary.main' }}>
                  <AgentIcon sx={{ fontSize: 14 }} />
                </Avatar>
              )}
              <Paper
                elevation={0}
                sx={{
                  p: 1.5,
                  maxWidth: '80%',
                  bgcolor: msg.role === 'user' ? 'primary.main' : 'background.paper',
                  color: msg.role === 'user' ? 'white' : 'text.primary',
                  borderRadius: 2,
                  border: msg.role === 'assistant' ? '1px solid' : 'none',
                  borderColor: 'divider',
                }}
              >
                <Typography variant="body2" sx={{ whiteSpace: 'pre-wrap' }}>
                  {msg.content}
                </Typography>
              </Paper>
            </Box>
          ))}
          {loading && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Avatar sx={{ width: 24, height: 24, bgcolor: 'primary.main' }}>
                <AgentIcon sx={{ fontSize: 14 }} />
              </Avatar>
              <CircularProgress size={16} />
            </Box>
          )}
        </Box>
      </Collapse>
    </Paper>
  );
}
