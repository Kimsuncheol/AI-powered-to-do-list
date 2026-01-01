'use client';
import { Box, Paper, Typography, Avatar } from '@mui/material';
import { SmartToy as AgentIcon } from '@mui/icons-material';
import { AgentMessage } from '@/actions/agentActions';

interface ChatMessageProps {
  message: AgentMessage;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: message.role === 'user' ? 'flex-end' : 'flex-start',
        mb: 1,
      }}
    >
      {message.role === 'assistant' && (
        <Avatar sx={{ width: 24, height: 24, mr: 1, bgcolor: 'primary.main' }}>
          <AgentIcon sx={{ fontSize: 14 }} />
        </Avatar>
      )}
      <Paper
        elevation={0}
        sx={{
          p: 1.5,
          maxWidth: '80%',
          bgcolor: message.role === 'user' ? 'primary.main' : 'background.paper',
          color: message.role === 'user' ? 'primary.contrastText' : 'text.primary',
          borderRadius: 2,
          border: message.role === 'assistant' ? '1px solid' : 'none',
          borderColor: 'divider',
        }}
      >
        <Typography variant="body2" sx={{ whiteSpace: 'pre-wrap', color: 'inherit' }}>
          {message.content}
        </Typography>
      </Paper>
    </Box>
  );
}
