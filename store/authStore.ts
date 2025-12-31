import { create } from 'zustand';

type AuthModalType = 'signIn' | 'signUp' | 'resetPassword' | null;

interface AuthState {
  openModal: AuthModalType;
  setOpenModal: (modal: AuthModalType) => void;
  closeModal: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  openModal: null,
  setOpenModal: (modal) => set({ openModal: modal }),
  closeModal: () => set({ openModal: null }),
}));
