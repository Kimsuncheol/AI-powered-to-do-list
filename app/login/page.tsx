'use client';
import { Box, Button, Typography, Container, Paper } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { useAuth } from '@/contexts/AuthContext';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const { signInWithGoogle, user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      router.push('/');
    }
  }, [user, loading, router]);

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Paper 
          elevation={3} 
          sx={{ 
            p: 4, 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            width: '100%',
            borderRadius: 2
          }}
        >
          <Typography component="h1" variant="h5" sx={{ mb: 3, fontWeight: 'bold' }}>
            Welcome Back
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 4, textAlign: 'center' }}>
            Sign in to manage your AI-powered tasks
          </Typography>
          
          <Button
            fullWidth
            variant="outlined"
            startIcon={<GoogleIcon />}
            onClick={signInWithGoogle}
            sx={{ 
              py: 1.5,
              textTransform: 'none',
              fontSize: '1rem',
              borderColor: '#ddd',
              color: 'text.primary',
              '&:hover': {
                borderColor: '#ccc',
                backgroundColor: '#f5f5f5'
              }
            }}
          >
            Sign in with Google
          </Button>
        </Paper>
      </Box>
    </Container>
  );
}
