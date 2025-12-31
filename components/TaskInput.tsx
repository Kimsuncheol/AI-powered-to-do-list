'use client';
import React, { useState, useRef, useEffect } from 'react';
import { 
  Paper, 
  InputBase, 
  IconButton, 
  Box,
  CircularProgress,
  Typography,
  Collapse,
  Avatar,
  Chip
} from '@mui/material';
import { 
  Add as AddIcon, 
  AutoAwesome as AutoAwesomeIcon,
  SmartToy as AgentIcon,
  Send as SendIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import { runAgentAction, AgentMessage } from '@/actions/agentActions';
import { useAuth } from '@/contexts/AuthContext';
import { useBilling } from '@/contexts/BillingContext';

interface TaskInputProps {
  onAdd: (title: string, isAi: boolean) => Promise<void>;
  onTasksChanged?: () => void;
  disabled?: boolean;
}

export default function TaskInput({ onAdd, onTasksChanged, disabled }: TaskInputProps) {
  const [input, setInput] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mode, setMode] = useState<'task' | 'agent'>('task');
  
  // Agent Chat State
  const [messages, setMessages] = useState<AgentMessage[]>([]);
  const [agentLoading, setAgentLoading] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { user } = useAuth();
  const { canUseAgent, incrementAgentUsage } = useBilling();

  /* eslint-disable-next-line react-hooks/exhaustive-deps */
  const scrollToBottom = React.useCallback(() => {
    if (showHistory) {
      setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [showHistory]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, showHistory, scrollToBottom]);

  const handleSubmit = async (isAi: boolean) => {
    if (!input.trim()) return;
    
    // If in agent mode, handle as agent message
    if (mode === 'agent') {
      handleAgentSend();
      return;
    }

    // Normal task submission
    setIsSubmitting(true);
    try {
      await onAdd(input, isAi);
      setInput('');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAgentSend = async () => {
    if (!input.trim() || agentLoading || !user) return;

    const userMessage: AgentMessage = { role: 'user', content: input.trim() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setAgentLoading(true);
    setShowHistory(true); // Auto-show history on send

    // Check billing limits
    if (!canUseAgent()) {
      const errorMessage: AgentMessage = { 
        role: 'assistant', 
        content: "You've reached your monthly AI Agent limit. Please upgrade your plan to continue using the AI Agent." 
      };
      setMessages(prev => [...prev, errorMessage]);
      setAgentLoading(false);
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
        
        // Notify parent if tasks may have changed
        if (result.response.includes('✅') || result.response.includes('🗑️')) {
          onTasksChanged?.();
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
      setAgentLoading(false);
    }
  };

  const handleModeSwitch = () => {
    const newMode = mode === 'task' ? 'agent' : 'task';
    setMode(newMode);
    if (newMode === 'agent') {
      setShowHistory(true);
    }
  };

  return (
    <Box sx={{ mb: 3, width: '100%', maxWidth: 960, mx: 'auto' }}>
      {/* Reddit-style Search Bar */}
      <Paper
        component="div"
        elevation={0}
        sx={{ 
          display: 'flex', 
          alignItems: 'center',
          borderRadius: '99px', // Pill-shaped like Reddit
          bgcolor: mode === 'agent' 
            ? 'rgba(118, 75, 162, 0.08)' 
            : (theme) => theme.palette.mode === 'dark' ? '#272729' : '#f3f4f5',
          border: mode === 'agent' 
            ? '2px solid #764ba2' 
            : '1px solid transparent',
          padding: '6px 12px',
          transition: 'all 0.2s ease',
          '&:hover': {
            bgcolor: mode === 'agent' 
              ? 'rgba(118, 75, 162, 0.12)' 
              : (theme) => theme.palette.mode === 'dark' ? '#2d2d2f' : '#edeff1',
          },
          '&:focus-within': {
            bgcolor: mode === 'agent' 
              ? 'rgba(118, 75, 162, 0.15)' 
              : (theme) => theme.palette.mode === 'dark' ? '#1a1a1b' : '#ffffff',
            border: mode === 'agent' 
              ? '2px solid #764ba2' 
              : (theme) => `1px solid ${theme.palette.divider}`,
          }
        }}
      >
        {/* Left Icon - Search or Agent */}
        <IconButton 
          sx={{ 
            p: '8px',
            color: mode === 'agent' ? '#764ba2' : 'text.secondary',
            '&:hover': { bgcolor: 'transparent' }
          }} 
          aria-label={mode === 'agent' ? 'agent-icon' : 'search-icon'}
          disableRipple
        >
          {mode === 'agent' ? <AgentIcon /> : <AddIcon />}
        </IconButton>

        {/* Input Field */}
        <InputBase
          sx={{ 
            ml: 0.5, 
            flex: 1,
            fontSize: '0.95rem',
            '& input::placeholder': {
              color: 'text.secondary',
              opacity: 0.7,
            }
          }}
          placeholder={mode === 'agent' ? "Ask the AI assistant..." : "Add a new task..."}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              handleSubmit(false);
            }
          }}
          disabled={disabled || isSubmitting || agentLoading}
          autoFocus
        />
        
        {/* Right Side Actions */}
        {isSubmitting || agentLoading ? (
           <CircularProgress 
             size={20} 
             sx={{ 
               mx: 1, 
               color: mode === 'agent' ? '#764ba2' : 'text.secondary' 
             }} 
           />
        ) : (
          <>
            {/* Submit Button */}
            {input.trim() && (
              mode === 'task' ? (
                <IconButton 
                  size="small"
                  sx={{ 
                    p: '6px',
                    color: 'primary.main',
                    '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.04)' }
                  }} 
                  onClick={() => handleSubmit(false)}
                >
                  <AddIcon fontSize="small" />
                </IconButton>
              ) : (
                <IconButton 
                  size="small"
                  sx={{ 
                    p: '6px',
                    color: '#764ba2',
                    '&:hover': { bgcolor: 'rgba(118, 75, 162, 0.08)' }
                  }} 
                  onClick={handleAgentSend}
                >
                  <SendIcon fontSize="small" />
                </IconButton>
              )
            )}

            {/* Mode Toggle */}
            <IconButton 
              size="small"
              sx={{ 
                p: '6px',
                ml: 0.5,
                color: mode === 'agent' ? '#764ba2' : 'text.secondary',
                bgcolor: mode === 'agent' ? 'rgba(118, 75, 162, 0.12)' : 'transparent',
                '&:hover': {
                  bgcolor: mode === 'agent' ? 'rgba(118, 75, 162, 0.2)' : 'rgba(0, 0, 0, 0.04)',
                }
              }} 
              onClick={handleModeSwitch}
              title={mode === 'task' ? "Switch to AI Agent" : "Switch to Task Input"}
            >
              {mode === 'task' ? <AutoAwesomeIcon fontSize="small" /> : <CloseIcon fontSize="small" />}
            </IconButton>
          </>
        )}
      </Paper>

      {/* Agent Chat History */}
      <Collapse in={mode === 'agent' && showHistory}>
        <Paper 
          sx={{ 
            mt: 1, 
            p: 2, 
            maxHeight: 300, 
            overflow: 'auto',
            bgcolor: '#f8f9fa',
            border: '1px solid #e0e0e0',
            borderRadius: 2
          }}
        >
          {messages.length === 0 && (
            <Box sx={{ textAlign: 'center', py: 2, opacity: 0.7 }}>
              <Typography variant="body2" color="text.secondary">
                I can help create, list, completed, or delete tasks.
              </Typography>
              <Box sx={{ mt: 1, display: 'flex', gap: 1, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Chip 
                  label="Show my tasks" 
                  size="small" 
                  onClick={() => setInput("Show my tasks")} 
                  clickable 
                />
                 <Chip 
                  label="Add groceries tomorrow" 
                  size="small" 
                  onClick={() => setInput("Add groceries task for tomorrow")} 
                  clickable 
                />
              </Box>
            </Box>
          )}
          
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            {messages.map((msg, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
                  gap: 1,
                }}
              >
                {msg.role === 'assistant' && (
                  <Avatar sx={{ width: 24, height: 24, bgcolor: '#764ba2' }}>
                    <AgentIcon sx={{ fontSize: 14 }} />
                  </Avatar>
                )}
                <Paper
                  elevation={0}
                  sx={{
                    p: 1.5,
                    maxWidth: '85%',
                    bgcolor: msg.role === 'user' ? '#764ba2' : 'white',
                    color: msg.role === 'user' ? 'white' : 'text.primary',
                    borderRadius: msg.role === 'user' 
                      ? '16px 16px 4px 16px' 
                      : '16px 16px 16px 4px',
                    border: msg.role === 'user' ? 'none' : '1px solid #e0e0e0'
                  }}
                >
                  <Typography variant="body2" sx={{ whiteSpace: 'pre-wrap' }}>
                    {msg.content}
                  </Typography>
                </Paper>
              </Box>
            ))}
            {agentLoading && (
               <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                <Avatar sx={{ width: 24, height: 24, bgcolor: '#764ba2' }}>
                  <AgentIcon sx={{ fontSize: 14 }} />
                </Avatar>
                <CircularProgress size={16} />
              </Box>
            )}
            <div ref={messagesEndRef} />
          </Box>
        </Paper>
      </Collapse>
    </Box>
  );
}
