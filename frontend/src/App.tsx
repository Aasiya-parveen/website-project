import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { useState } from "react";

import Header from "./components/Header";
import Navbar from "./components/Navbar";

import TaskListPage from "./pages/TaskListPage";

import CreateTaskPage from "./pages/CreateTaskPage";

import { initialTasks } from "./data/mockTasks";

import type { Task } from "./types/task";

function App() {
  const [tasks, setTasks] =
    useState<Task[]>(initialTasks);

  const [editingTask, setEditingTask] =
    useState<Task | null>(null);

  const handleAddTask = (task: Task) => {
    if (editingTask) {
      setTasks(
        tasks.map((t) =>
          t.id === task.id ? task : t
        )
      );

      setEditingTask(null);
    } else {
      setTasks([...tasks, task]);
    }
  };

  const handleDeleteTask = (id: number) => {
    setTasks(
      tasks.filter((task) => task.id !== id)
    );
  };

  const handleEditTask = (task: Task) => {
    setEditingTask(task);
  };

  return (
    <BrowserRouter>
      <Header />

      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <TaskListPage
              tasks={tasks}
              onDelete={handleDeleteTask}
              onEdit={handleEditTask}
            />
          }
        />

        <Route
          path="/create"
          element={
            <CreateTaskPage
              onAddTask={handleAddTask}
              editingTask={editingTask}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;