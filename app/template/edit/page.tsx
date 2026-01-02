'use client';
import React from 'react';
import { Container, Typography, Box, Paper, TextField, Button, Grid, FormControlLabel, Switch, Divider } from '@mui/material';
import { Save as SaveIcon, Delete as DeleteIcon } from '@mui/icons-material';

export default function EditTaskTemplate() {
  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
        <Paper elevation={0} sx={{ p: 5, borderRadius: 4, border: '1px solid', borderColor: 'divider' }}>
            <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h5" fontWeight="bold">
                    Edit Task
                </Typography>
                <Button color="error" startIcon={<DeleteIcon />}>
                    Delete
                </Button>
            </Box>

            <Grid container spacing={4}>
                <Grid size={12}>
                    <TextField 
                        fullWidth 
                        label="Task Title" 
                        defaultValue="Review Q1 Roadmap"
                        variant="standard" 
                        InputProps={{ sx: { fontSize: '1.5rem', fontWeight: 500 } }}
                        InputLabelProps={{ shrink: true }}
                    />
                </Grid>
                <Grid size={12}>
                    <TextField 
                        fullWidth 
                        label="Notes" 
                        defaultValue="Focus on growth metrics and user retention strategies."
                        multiline
                        rows={6}
                        variant="outlined"
                        InputProps={{ sx: { borderRadius: 2 } }}
                        InputLabelProps={{ shrink: true }}
                    />
                </Grid>
                
                 <Grid size={12}>
                    <Divider />
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                    <FormControlLabel control={<Switch defaultChecked />} label="Mark as Important" />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                     <FormControlLabel control={<Switch />} label="Completed" />
                </Grid>

                <Grid size={12} sx={{ mt: 2, display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
                     <Button 
                        variant="outlined" 
                        size="large" 
                        sx={{ borderRadius: 2, px: 4 }}
                    >
                        Cancel
                    </Button>
                    <Button 
                        variant="contained" 
                        size="large" 
                        startIcon={<SaveIcon />}
                        sx={{ borderRadius: 2, px: 4 }}
                    >
                        Save Changes
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    </Container>
  );
}
