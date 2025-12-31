'use client';
import { Box, Chip } from '@mui/material';

interface SuggestionChipsProps {
  suggestions: string[];
  onSelect: (suggestion: string) => void;
}

export default function SuggestionChips({ suggestions, onSelect }: SuggestionChipsProps) {
  return (
    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
      {suggestions.map((suggestion) => (
        <Chip
          key={suggestion}
          label={suggestion}
          size="small"
          variant="outlined"
          onClick={() => onSelect(suggestion)}
          sx={{ cursor: 'pointer' }}
        />
      ))}
    </Box>
  );
}
