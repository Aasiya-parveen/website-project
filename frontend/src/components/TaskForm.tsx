import { useEffect, useState } from "react";

import type {
  Task,
  TaskPriority,
  TaskStatus,
} from "../types/task";

type TaskFormProps = {
  onAddTask: (task: Task) => void;
  editingTask: Task | null;
};

function TaskForm({
  onAddTask,
  editingTask,
}: TaskFormProps) {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] =
    useState<string>("");

  const [status, setStatus] =
    useState<TaskStatus>("Todo");

  const [priority, setPriority] =
    useState<TaskPriority>("Low");

  const [dueDate, setDueDate] =
    useState<string>("");

  const [error, setError] =
    useState<string>("");

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
      setStatus(editingTask.status);
      setPriority(editingTask.priority);
      setDueDate(editingTask.dueDate ?? "");
    }
  }, [editingTask]);

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (title.trim() === "") {
      setError("Task title is required");
      return;
    }

    const taskData: Task = {
      id: editingTask
        ? editingTask.id
        : Date.now(),

      title,
      description,
      status,
      priority,
      dueDate,

      createdAt: editingTask
        ? editingTask.createdAt
        : new Date().toLocaleDateString(),
    };

    onAddTask(taskData);

    setTitle("");
    setDescription("");
    setStatus("Todo");
    setPriority("Low");
    setDueDate("");
    setError("");
  };

  return (
    <form
      className="form"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
      />

      {error && (
        <p className="error">{error}</p>
      )}

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) =>
          setDescription(e.target.value)
        }
      />

      <select
        value={status}
        onChange={(e) =>
          setStatus(
            e.target.value as TaskStatus
          )
        }
      >
        <option value="Todo">Todo</option>

        <option value="In Progress">
          In Progress
        </option>

        <option value="Done">Done</option>
      </select>

      <select
        value={priority}
        onChange={(e) =>
          setPriority(
            e.target.value as TaskPriority
          )
        }
      >
        <option value="Low">Low</option>

        <option value="Medium">
          Medium
        </option>

        <option value="High">High</option>
      </select>

      <input
        type="date"
        value={dueDate}
        onChange={(e) =>
          setDueDate(e.target.value)
        }
      />

      <button className="btn" type="submit">
        {editingTask
          ? "Update Task"
          : "Create Task"}
      </button>
    </form>
  );
}

export default TaskForm;