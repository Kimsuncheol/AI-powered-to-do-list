import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TaskItem from '@/components/TaskItem';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Mock dependencies
jest.mock('@/contexts/AuthContext', () => ({
  useAuth: () => ({
    user: { uid: 'test-user-id' },
  }),
}));

const mockTask = {
  id: '1',
  title: 'Test Task',
  description: 'Test Description',
  completed: false,
  userId: 'test-user-id',
  createdAt: new Date(),
  updatedAt: new Date(),
};

const theme = createTheme();

describe('TaskItem', () => {
  it('renders task details', () => {
    render(
      <ThemeProvider theme={theme}>
        <TaskItem task={mockTask} onToggle={jest.fn()} onDelete={jest.fn()} />
      </ThemeProvider>
    );
    expect(screen.getByText('Test Task')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  it('calls onToggle when checkbox is clicked', () => {
    const onToggleMock = jest.fn();
    render(
      <ThemeProvider theme={theme}>
        <TaskItem task={mockTask} onToggle={onToggleMock} onDelete={jest.fn()} />
      </ThemeProvider>
    );
    // Find checkbox input
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(onToggleMock).toHaveBeenCalledWith('1', false);
  });
});
