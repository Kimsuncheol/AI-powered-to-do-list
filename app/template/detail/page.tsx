'use client';
import React from 'react';
import { Container, Typography, Box, Paper, Button, Chip, Divider, Avatar, IconButton } from '@mui/material';
import { ArrowBack, CheckCircleOutline, AttachFile, AccessTime, Flag } from '@mui/icons-material';

export default function TaskDetailTemplate() {
  return (
    <Container maxWidth="lg" sx={{ mt: 8 }}>
        <Button startIcon={<ArrowBack />} sx={{ mb: 2 }}>Back</Button>
        <Paper elevation={0} sx={{ borderRadius: 4, overflow: 'hidden', border: '1px solid', borderColor: 'divider' }}>
            <Box sx={{ p: 4, bgcolor: 'background.paper' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Typography variant="h3" fontWeight="800" sx={{ flexGrow: 1 }}>
                        Design System Implementation
                    </Typography>
                    <IconButton color="success" size="large">
                        <CheckCircleOutline sx={{ fontSize: 40 }} />
                    </IconButton>
                </Box>
                
                <Box sx={{ display: 'flex', gap: 2, mb: 4, flexWrap: 'wrap' }}>
                    <Chip icon={<Flag />} label="High Priority" color="error" sx={{ borderRadius: 1 }} />
                    <Chip icon={<AccessTime />} label="Due Tomorrow" color="warning" sx={{ borderRadius: 1 }} />
                    <Chip label="Design" variant="outlined" sx={{ borderRadius: 1 }} />
                    <Chip label="Frontend" variant="outlined" sx={{ borderRadius: 1 }} />
                </Box>

                <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'text.secondary' }}>
                   Create a comprehensive design system for the new productivity application. 
                   This includes defining color palettes, typography, spacing scale, and core components.
                   Must ensure accessibility compliance (WCAG 2.1 AA) and support for dark mode.
                </Typography>
            </Box>
            
            <Divider />
            
            <Box sx={{ p: 4, bgcolor: 'action.hover' }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>Subtasks</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {[1, 2, 3].map((item) => (
                        <Paper key={item} sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2, borderRadius: 2 }}>
                            <CheckCircleOutline color={item === 1 ? "action" : "disabled"} />
                            <Typography sx={{ textDecoration: item === 1 ? 'line-through' : 'none', color: item === 1 ? 'text.secondary' : 'text.primary' }}>
                                {item === 1 ? 'Define color tokens' : item === 2 ? 'Create typography scale' : 'Draft component library'}
                            </Typography>
                        </Paper>
                    ))}
                </Box>
            </Box>
        </Paper>
    </Container>
  );
}
