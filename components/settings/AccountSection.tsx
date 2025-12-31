import { useState } from 'react';
import { Paper, Typography, Button, Stack, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { useAuthStore } from '@/store/authStore';
import { useAuth } from '@/contexts/AuthContext';

interface AccountSectionProps {
  onLogout: () => void;
}

export default function AccountSection({ onLogout }: AccountSectionProps) {
  const { setOpenModal } = useAuthStore();
  const { deleteAccount } = useAuth();
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const handleDeleteAccount = async () => {
    setDeleting(true);
    try {
      await deleteAccount();
      setDeleteDialogOpen(false);
    } catch (error) {
      console.error('Failed to delete account:', error);
      alert('Failed to delete account. You may need to re-authenticate before deleting your account for security reasons.');
    } finally {
      setDeleting(false);
    }
  };

  return (
    <Paper elevation={0} variant="outlined" sx={{ p: 3, borderRadius: 2, bgcolor: 'rgba(0,0,0,0.02)' }}>
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
        Account
      </Typography>
      
      <Stack spacing={2}>
        <Button 
          variant="outlined" 
          onClick={() => setOpenModal('resetPassword')}
          fullWidth
          sx={{ textTransform: 'none', py: 1 }}
        >
          Reset Password
        </Button>

        <Button 
          variant="contained" 
          color="error"
          onClick={onLogout}
          fullWidth
          sx={{ textTransform: 'none', py: 1 }}
        >
          Sign Out
        </Button>

        <Button 
          variant="text" 
          color="error"
          onClick={() => setDeleteDialogOpen(true)}
          fullWidth
          sx={{ textTransform: 'none', mt: 2 }}
        >
          Opt Out (Delete Account)
        </Button>
      </Stack>

      {/* Delete Account Confirmation */}
      <Dialog open={deleteDialogOpen} onClose={() => !deleting && setDeleteDialogOpen(false)}>
        <DialogTitle>Delete Account?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete your account? This action is permanent and all your tasks will be lost.
          </DialogContentText>
          <DialogContentText sx={{ mt: 2, fontWeight: 'bold' }}>
            Note: For security reasons, you may need to have signed in recently to perform this action.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialogOpen(false)} disabled={deleting}>Cancel</Button>
          <Button onClick={handleDeleteAccount} color="error" autoFocus disabled={deleting}>
            {deleting ? 'Deleting...' : 'Delete Permanently'}
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
}
