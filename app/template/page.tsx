'use client';

import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Button, Box, Paper, Divider } from '@mui/material';
import { Add as AddIcon, Edit as EditIcon, Visibility as VisibilityIcon } from '@mui/icons-material';
import Link from 'next/link';

// Placeholder for templates - typically these would be separate components or pages
// giving the user a way to "preview" or "copy" them.
// For this mission, I will structure them as components within this directory that are showcased here.

export default function TemplateGalleryPage() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 10 }}>
        <Box sx={{ mb: 6, textAlign: 'center' }}>
            <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Premium Task Templates
            </Typography>
            <Typography variant="h6" color="text.secondary">
                A collection of high-quality, reusable UI templates for your productivity workflow.
            </Typography>
        </Box>

        <Grid container spacing={4}>
            {/* New Task Template */}
            <Grid item xs={12} md={4}>
                <Card 
                    variant="outlined" 
                    sx={{ 
                        height: '100%', 
                        transition: 'transform 0.2s', 
                        '&:hover': { transform: 'translateY(-4px)', boxShadow: 4 },
                        borderRadius: 4
                    }}
                >
                    <Box sx={{ height: 140, bgcolor: 'primary.light', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <AddIcon sx={{ fontSize: 60, color: 'white' }} />
                    </Box>
                    <CardContent>
                        <Typography variant="h5" component="div" gutterBottom fontWeight="bold">
                            New Task Creation
                        </Typography>
                        <Typography variant="body2" color="text.secondary" paragraph>
                            A streamlined, focused form for creating new tasks. Includes simplified input fields and smart defaults.
                        </Typography>
                        <Button 
                            variant="outlined" 
                            fullWidth 
                            component={Link} 
                            href="/template/new"
                            startIcon={<AddIcon />}
                        >
                            View Template
                        </Button>
                    </CardContent>
                </Card>
            </Grid>

            {/* Task Detail Template */}
            <Grid item xs={12} md={4}>
                 <Card 
                    variant="outlined" 
                    sx={{ 
                        height: '100%', 
                        transition: 'transform 0.2s', 
                        '&:hover': { transform: 'translateY(-4px)', boxShadow: 4 },
                        borderRadius: 4
                    }}
                >
                    <Box sx={{ height: 140, bgcolor: 'secondary.light', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <VisibilityIcon sx={{ fontSize: 60, color: 'white' }} />
                    </Box>
                    <CardContent>
                        <Typography variant="h5" component="div" gutterBottom fontWeight="bold">
                            Task Details
                        </Typography>
                        <Typography variant="body2" color="text.secondary" paragraph>
                            A comprehensive view for individual tasks. Features large typography, progress tracking, and metadata display.
                        </Typography>
                        <Button 
                            variant="outlined" 
                            fullWidth 
                            component={Link} 
                            href="/template/detail"
                            startIcon={<VisibilityIcon />}
                        >
                            View Template
                        </Button>
                    </CardContent>
                </Card>
            </Grid>

            {/* Edit Task Template */}
             <Grid item xs={12} md={4}>
                 <Card 
                    variant="outlined" 
                    sx={{ 
                        height: '100%', 
                        transition: 'transform 0.2s', 
                        '&:hover': { transform: 'translateY(-4px)', boxShadow: 4 },
                        borderRadius: 4
                    }}
                >
                    <Box sx={{ height: 140, bgcolor: 'success.light', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <EditIcon sx={{ fontSize: 60, color: 'white' }} />
                    </Box>
                    <CardContent>
                        <Typography variant="h5" component="div" gutterBottom fontWeight="bold">
                            Edit Task
                        </Typography>
                        <Typography variant="body2" color="text.secondary" paragraph>
                            An intuitive editor layout. Optimized for quick updates to task properties without clutter.
                        </Typography>
                        <Button 
                            variant="outlined" 
                            fullWidth 
                            component={Link} 
                            href="/template/edit"
                            startIcon={<EditIcon />}
                        >
                            View Template
                        </Button>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </Container>
  );
}
