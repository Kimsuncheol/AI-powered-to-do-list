import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TaskInput from '@/components/TaskInput';

// Mock dependencies
jest.mock('@/contexts/AuthContext', () => ({
  useAuth: () => ({
    user: { uid: 'test-user-id' },
  }),
}));

jest.mock('@/services/taskService', () => ({
  taskService: {
    addTask: jest.fn(),
  },
}));

describe('TaskInput', () => {
  it('renders input field', () => {
    render(<TaskInput onTaskAdded={jest.fn()} />);
    expect(screen.getByPlaceholderText(/Add a new task/i)).toBeInTheDocument();
  });

  it('updates input value on change', () => {
    render(<TaskInput onTaskAdded={jest.fn()} />);
    const input = screen.getByPlaceholderText(/Add a new task/i);
    fireEvent.change(input, { target: { value: 'New Task' } });
    expect(input).toHaveValue('New Task');
  });
});
