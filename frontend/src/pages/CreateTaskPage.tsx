import TaskForm from "../components/TaskForm";

import type { Task } from "../types/task";

type CreateTaskPageProps = {
  onAddTask: (task: Task) => void;
  editingTask: Task | null;
};

function CreateTaskPage({
  onAddTask,
  editingTask,
}: CreateTaskPageProps) {
  return (
    <div className="page">
      <h2>Create New Task</h2>

      <TaskForm
        onAddTask={onAddTask}
        editingTask={editingTask}
      />
    </div>
  );
}

export default CreateTaskPage;