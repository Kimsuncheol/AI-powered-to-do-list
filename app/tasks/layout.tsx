import { ReactNode } from 'react';
import { Container } from '@mui/material';

export default function TaskDetailLayout({ children }: { children: ReactNode }) {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      {children}
    </Container>
  )
}
