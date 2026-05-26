import type { Task } from "../types/task";

type TaskCardProps = {
  task: Task;
  onDelete: (id: number) => void;
  onEdit: (task: Task) => void;
};

function TaskCard({
  task,
  onDelete,
  onEdit,
}: TaskCardProps) {
  return (
    <div className="card">
      <h2>{task.title}</h2>

      <p>{task.description}</p>

      <p>Status: {task.status}</p>

      <p>Priority: {task.priority}</p>

      <p>Created: {task.createdAt}</p>

      {task.dueDate && <p>Due: {task.dueDate}</p>}

      <button
        className="btn"
        onClick={() => onEdit(task)}
      >
        Edit
      </button>

      <button
        className="btn"
        onClick={() => onDelete(task.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default TaskCard;