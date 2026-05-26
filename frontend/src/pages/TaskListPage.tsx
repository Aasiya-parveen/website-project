import TaskCard from "../components/TaskCard";
import type { Task } from "../types/task";

type TaskListPageProps = {
  tasks: Task[];
  onDelete: (id: number) => void;
  onEdit: (task: Task) => void;
};

function TaskListPage({
  tasks,
  onDelete,
  onEdit,
}: TaskListPageProps) {
  return (
    <div className="page">
      <h2>All Tasks</h2>

      <div className="task-grid">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </div>
    </div>
  );
}

export default TaskListPage;