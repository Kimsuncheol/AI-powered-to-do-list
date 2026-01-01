'use client';
import { Box, Collapse, CircularProgress, Avatar } from '@mui/material';
import { SmartToy as AgentIcon } from '@mui/icons-material';
import { AgentMessage } from '@/actions/agentActions';
import ChatMessage from './ChatMessage';

interface ChatHistoryProps {
  messages: AgentMessage[];
  loading: boolean;
  expanded: boolean;
}

export default function ChatHistory({ messages, loading, expanded }: ChatHistoryProps) {
  return (
    <Collapse in={expanded && messages.length > 0}>
      <Box
        sx={{
          mt: 2,
          pt: 2,
          borderTop: '1px solid',
          borderColor: 'divider',
          bgcolor: 'transparent',
          maxHeight: 200,
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          overflow: 'auto',
          '&::-webkit-scrollbar': {
            width: 0,
            height: 0,
          },
        }}
      >
        {messages.map((msg, index) => (
          <ChatMessage key={index} message={msg} />
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
  );
}
