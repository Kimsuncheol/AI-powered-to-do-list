import { 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  getDocs,
  getDoc,
  query, 
  orderBy, 
  serverTimestamp,
  Timestamp,
  where
} from 'firebase/firestore';
import { db } from '../lib/firebase';
import { Task, CreateTaskInput } from '../types';

const COLLECTION_NAME = 'tasks';

export const taskService = {
  // Add a new task
  addTask: async (task: CreateTaskInput, userId: string): Promise<string> => {
    try {
      // Firebase doesn't like undefined values. Remove them or convert to null.
      const sanitizedTask = Object.entries(task).reduce((acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = value;
        }
        return acc;
      }, {} as Record<string, any>);

      const docRef = await addDoc(collection(db, COLLECTION_NAME), {
        ...sanitizedTask,
        userId,
        completed: task.completed ?? false,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });
      return docRef.id;
    } catch (error) {
      console.error("Error adding task: ", error);
      throw error;
    }
  },

  // Get all tasks (for a user)
  getTasks: async (userId: string): Promise<Task[]> => {
    try {
      const q = query(
        collection(db, COLLECTION_NAME), 
        where("userId", "==", userId),
        orderBy('createdAt', 'desc')
      );
      const querySnapshot = await getDocs(q);
      
      return querySnapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data,
          // Convert Firestore Timestamps to JS Dates
          createdAt: (data.createdAt as Timestamp)?.toDate(),
          updatedAt: (data.updatedAt as Timestamp)?.toDate(),
          dueDate: (data.dueDate as Timestamp)?.toDate() || null,
        } as Task;
      });
    } catch (error) {
      console.error("Error getting tasks: ", error);
      throw error;
    }
  },

  // Get a single task
  getTask: async (taskId: string): Promise<Task | null> => {
    try {
      const docRef = doc(db, COLLECTION_NAME, taskId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        return {
          id: docSnap.id,
          ...data,
          createdAt: (data.createdAt as Timestamp)?.toDate(),
          updatedAt: (data.updatedAt as Timestamp)?.toDate(),
          dueDate: (data.dueDate as Timestamp)?.toDate() || null,
        } as Task;
      } else {
        return null;
      }
    } catch (error) {
      console.error("Error getting task: ", error);
      throw error;
    }
  },

  // Update a task
  updateTask: async (id: string, updates: Partial<Task>): Promise<void> => {
    try {
      const taskRef = doc(db, COLLECTION_NAME, id);
      await updateDoc(taskRef, {
        ...updates,
        updatedAt: serverTimestamp(),
      });
    } catch (error) {
      console.error("Error updating task: ", error);
      throw error;
    }
  },

  // Delete a task
  deleteTask: async (id: string): Promise<void> => {
    try {
      await deleteDoc(doc(db, COLLECTION_NAME, id));
    } catch (error) {
      console.error("Error deleting task: ", error);
      throw error;
    }
  },
  
  // Toggle completion status
  toggleTaskCompletion: async (id: string, currentStatus: boolean): Promise<void> => {
    try {
      const taskRef = doc(db, COLLECTION_NAME, id);
      await updateDoc(taskRef, {
        completed: !currentStatus,
        updatedAt: serverTimestamp(),
      });
    } catch (error) {
      console.error("Error toggling task: ", error);
      throw error;
    }
  }
};
