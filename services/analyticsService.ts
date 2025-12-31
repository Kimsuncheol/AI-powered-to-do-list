import {
  collection,
  getDocs,
  query,
  where,
  Timestamp,
} from 'firebase/firestore';
import { db } from '../lib/firebase';
import { Task } from '../types';

const COLLECTION_NAME = 'tasks';

export interface TaskAnalytics {
  totalTasks: number;
  completedTasks: number;
  incompleteTasks: number;
  completionRate: number;
  overdueTasks: number;
  tasksByPriority: {
    high: number;
    medium: number;
    low: number;
    none: number;
  };
}

export const analyticsService = {
  // Get comprehensive task analytics for a user
  getTaskAnalytics: async (userId: string): Promise<TaskAnalytics> => {
    try {
      const q = query(
        collection(db, COLLECTION_NAME),
        where('userId', '==', userId)
      );
      const querySnapshot = await getDocs(q);

      const tasks: Task[] = querySnapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data,
          createdAt: (data.createdAt as Timestamp)?.toDate(),
          updatedAt: (data.updatedAt as Timestamp)?.toDate(),
          dueDate: (data.dueDate as Timestamp)?.toDate() || null,
        } as Task;
      });

      const totalTasks = tasks.length;
      const completedTasks = tasks.filter(t => t.completed).length;
      const incompleteTasks = totalTasks - completedTasks;
      const completionRate = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

      // Count overdue tasks (incomplete tasks past their due date)
      const now = new Date();
      const overdueTasks = tasks.filter(
        t => !t.completed && t.dueDate && new Date(t.dueDate) < now
      ).length;

      // Count tasks by priority
      const tasksByPriority = {
        high: tasks.filter(t => t.priority === 'high').length,
        medium: tasks.filter(t => t.priority === 'medium').length,
        low: tasks.filter(t => t.priority === 'low').length,
        none: tasks.filter(t => !t.priority).length,
      };

      return {
        totalTasks,
        completedTasks,
        incompleteTasks,
        completionRate,
        overdueTasks,
        tasksByPriority,
      };
    } catch (error) {
      console.error('Error getting task analytics:', error);
      throw error;
    }
  },
};
