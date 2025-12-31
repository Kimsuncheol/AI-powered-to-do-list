export interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  dueDate?: Date | null;
  priority?: 'low' | 'medium' | 'high';
  tags?: string[];
  subtasks?: { id: string; title: string; completed: boolean }[];
  createdAt: Date;
  updatedAt: Date;
  userId: string; // For multi-user support (future)
}

export type CreateTaskInput = Omit<Task, 'id' | 'createdAt' | 'updatedAt' | 'userId'>;
