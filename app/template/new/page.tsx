'use client';
import React from 'react';
import { Container, Typography, Box, Paper, TextField, Button, Grid, Chip } from '@mui/material';
import { Save as SaveIcon, AutoAwesome as AutoAwesomeIcon } from '@mui/icons-material';

export default function NewTaskTemplate() {
  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
        <Paper elevation={0} sx={{ p: 4, borderRadius: 4, border: '1px solid', borderColor: 'divider' }}>
            <Box sx={{ mb: 4, textAlign: 'center' }}>
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                    Create New Task
                </Typography>
                <Typography color="text.secondary">
                    Plan your next move.
                </Typography>
            </Box>

            <Grid container spacing={3}>
                <Grid size={12}>
                    <TextField 
                        fullWidth 
                        label="Task Title" 
                        placeholder="What needs to be done?"
                        variant="outlined" 
                        InputProps={{ sx: { borderRadius: 2 } }}
                    />
                </Grid>
                <Grid size={12}>
                    <TextField 
                        fullWidth 
                        label="Description" 
                        placeholder="Add details..."
                        multiline
                        rows={4}
                        variant="outlined"
                        InputProps={{ sx: { borderRadius: 2 } }}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                    <Typography variant="subtitle2" gutterBottom>Priority</Typography>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        <Chip label="Low" clickable color="default" variant="outlined" />
                        <Chip label="Medium" clickable color="primary" variant="filled" />
                        <Chip label="High" clickable color="error" variant="outlined" />
                    </Box>
                </Grid>
                 <Grid size={{ xs: 12, sm: 6 }}>
                    <Typography variant="subtitle2" gutterBottom>Due Date</Typography>
                    <TextField 
                        type="date" 
                        fullWidth 
                        InputProps={{ sx: { borderRadius: 2 } }}
                    />
                </Grid>
                <Grid size={12} sx={{ mt: 2, display: 'flex', gap: 2 }}>
                    <Button 
                        variant="contained" 
                        size="large" 
                        fullWidth 
                        startIcon={<SaveIcon />}
                        sx={{ borderRadius: 2, py: 1.5 }}
                    >
                        Create Task
                    </Button>
                     <Button 
                        variant="outlined" 
                        color="secondary"
                        size="large" 
                        fullWidth 
                        startIcon={<AutoAwesomeIcon />}
                        sx={{ borderRadius: 2, py: 1.5 }}
                    >
                        AI Generate
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    </Container>
  );
}
