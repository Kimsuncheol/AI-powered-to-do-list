'use client';
import { useAuthStore } from '@/store/authStore';
import SignInModal from './SignInModal';
import SignUpModal from './SignUpModal';
import ResetPasswordModal from './ResetPasswordModal';

export default function AuthModals() {
  const { openModal, setOpenModal, closeModal } = useAuthStore();

  if (!openModal) return null;

  return (
    <>
      <SignInModal 
        open={openModal === 'signIn'} 
        onClose={closeModal} 
        onSwitchToSignUp={() => setOpenModal('signUp')}
        onSwitchToResetPassword={() => setOpenModal('resetPassword')}
      />
      <SignUpModal 
        open={openModal === 'signUp'} 
        onClose={closeModal} 
        onSwitchToSignIn={() => setOpenModal('signIn')}
      />
      <ResetPasswordModal 
        open={openModal === 'resetPassword'} 
        onClose={closeModal} 
        onSwitchToSignIn={() => setOpenModal('signIn')}
      />
    </>
  );
}
