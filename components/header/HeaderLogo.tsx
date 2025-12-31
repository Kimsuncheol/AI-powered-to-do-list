'use client';
import { Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function HeaderLogo() {
  const router = useRouter();

  return (
    <Typography 
      variant="h6" 
      component="div" 
      sx={{ 
        cursor: 'pointer', 
        fontWeight: 'bold',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
      onClick={() => router.push('/')}
    >
      AI To-Do
    </Typography>
  );
}
