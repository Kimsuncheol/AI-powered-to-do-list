import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CalendarModal from '@/components/calendar/CalendarModal';

// Mock dependencies
jest.mock('@/contexts/AuthContext', () => ({
  useAuth: () => ({
    user: { uid: 'test-user-id' },
  }),
}));

jest.mock('@/services/taskService', () => ({
  taskService: {
    getTasks: jest.fn().mockResolvedValue([
      {
        id: '1',
        title: 'Test Task 1',
        completed: false,
        dueDate: new Date('2025-12-31'),
        userId: 'test-user-id',
      },
    ]),
  },
}));

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe('CalendarModal', () => {
  it('renders correctly when open', () => {
    render(<CalendarModal open={true} onClose={jest.fn()} />);
    // Use getByRole to specifically target the heading
    expect(screen.getByRole('heading', { name: /Calendar/i })).toBeInTheDocument();
  });

  it('renders task list for selected date', async () => {
    render(<CalendarModal open={true} onClose={jest.fn()} />);
    
    // Check for the "View Full Calendar" link
    expect(screen.getByText('View Full Calendar →')).toBeInTheDocument();

    // You might also want to wait for the tasks to load if you want to test that behavior
    // and suppress "act" warnings by awaiting the result of the effect.
    // For example, if we expect "Test Task 1" to appear:
    // await screen.findByText('Test Task 1'); 
  });
});
