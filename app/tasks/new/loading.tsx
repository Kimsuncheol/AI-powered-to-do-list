import { Box, Skeleton, Container } from '@mui/material';

export default function NewTaskLoading() {
  return (
    <Container maxWidth="md" sx={{ mt: 8, px: { xs: 2, md: 4 } }}>
      {/* Back button skeleton */}
      <Skeleton variant="text" width={120} height={40} sx={{ mb: 4 }} />
      
      {/* Title skeleton */}
      <Skeleton 
        variant="text" 
        width="60%" 
        height={60} 
        sx={{ mb: 2 }}
      />
      
      {/* Description skeleton */}
      <Skeleton 
        variant="rectangular" 
        width="100%" 
        height={120} 
        sx={{ mb: 4, borderRadius: 1 }}
      />
      
      {/* AI section skeleton */}
      <Skeleton 
        variant="rectangular" 
        width="100%" 
        height={80} 
        sx={{ borderRadius: 2 }}
      />
    </Container>
  );
}
