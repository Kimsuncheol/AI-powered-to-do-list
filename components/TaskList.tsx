"use client";
import React, { useEffect, useState, useCallback } from "react";
import { Box, Typography, Container, CircularProgress } from "@mui/material";
import { Task, CreateTaskInput } from "@/types";
import { taskService } from "@/services/taskService";
import { parseTaskAction } from "@/actions/aiActions";
import TaskItem from "./TaskItem";
import TaskInput from "./TaskInput";
import { useAuth } from "@/contexts/AuthContext";
import { useAuthStore } from "@/store/authStore";
import { Button } from "@mui/material";

export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const { user, loading: authLoading } = useAuth();
  const { setOpenModal } = useAuthStore();

  const loadTasks = useCallback(async () => {
    if (!user) return;
    try {
      const fetchedTasks = await taskService.getTasks(user.uid);
      setTasks(fetchedTasks);
    } catch (error) {
      console.error("Failed to load tasks", error);
    } finally {
      setLoading(false);
    }
  }, [user]);

  // Initial Fetch
  useEffect(() => {
    if (!authLoading) {
      if (!user) {
        setOpenModal('signIn');
      } else {
        loadTasks();
      }
    }
  }, [user, authLoading, setOpenModal, loadTasks]);

  const handleAddTask = async (title: string, isAi: boolean) => {
    if (!user) return;
    let taskData: CreateTaskInput = {
      title,
      completed: false,
      priority: undefined,
      tags: undefined,
      description: undefined,
      dueDate: undefined,
    };

    if (isAi) {
      setLoading(true);
      try {
        const result = await parseTaskAction(title);
        if (result.success && result.data) {
          taskData = {
            ...taskData,
            title: result.data.title,
            description: result.data.description,
            priority: result.data.priority,
            tags: result.data.tags,
          };
          if (result.data.dueDate) {
            const parsedDate = new Date(result.data.dueDate);
            // Check if valid date
            if (!isNaN(parsedDate.getTime())) {
              taskData.dueDate = parsedDate;
            }
          }
        }
      } catch (e) {
        console.error("AI Ops failed", e);
      } finally {
        setLoading(false);
      }
    }

    try {
      await taskService.addTask(taskData, user.uid);
      loadTasks(); // Refresh list
    } catch (error) {
      console.error("Failed to add task", error);
    }
  };

  const handleToggleTask = async (id: string, currentStatus: boolean) => {
    try {
      // Optimistic update
      setTasks((prev) =>
        prev.map((t) => (t.id === id ? { ...t, completed: !currentStatus } : t))
      );
      await taskService.toggleTaskCompletion(id, currentStatus);
    } catch (error) {
      console.error("Failed to toggle task", error);
      loadTasks(); // Revert on error
    }
  };

  const handleDeleteTask = async (id: string) => {
    try {
      // Optimistic update
      setTasks((prev) => prev.filter((t) => t.id !== id));
      await taskService.deleteTask(id);
    } catch (error) {
      console.error("Failed to delete task", error);
      loadTasks();
    }
  };

  if (authLoading || (user && loading)) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!user) {
    return (
      <Container maxWidth="sm" sx={{ mt: 8, textAlign: 'center' }}>
        <Typography variant="h5" color="text.secondary" gutterBottom>
          Please sign in to view your tasks
        </Typography>
        <Button 
          variant="contained" 
          onClick={() => setOpenModal('signIn')}
          sx={{ 
            mt: 2, 
            borderRadius: 2, 
            textTransform: 'none',
            fontWeight: 600,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
          }}
        >
          Sign In
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        align="center"
        sx={{ mb: 4, fontWeight: "bold" }}
      >
        My Tasks
      </Typography>

      <TaskInput onAdd={handleAddTask} onTasksChanged={loadTasks} />

      <Box>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={handleToggleTask}
            onDelete={handleDeleteTask}
          />
        ))}
        {tasks.length === 0 && (
          <Typography
            variant="body1"
            color="text.secondary"
            align="center"
            sx={{ mt: 4 }}
          >
            No tasks yet. Add one above!
          </Typography>
        )}
      </Box>
    </Container>
  );
}
