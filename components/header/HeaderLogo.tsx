'use client';
import { Box } from '@mui/material';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function HeaderLogo() {
  const router = useRouter();

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        cursor: 'pointer',
        height: 40,
        width: 150,
        position: 'relative'
      }}
      onClick={() => router.push('/')}
    >
      <Image
        src="/header-logo.png"
        alt="AI To-Do Logo"
        fill
        style={{ objectFit: 'contain' }}
        priority
      />
    </Box>
  );
}
