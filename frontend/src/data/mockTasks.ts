import {type Task} from "../types/task";

export const initialTasks: Task[] = [
  {
    id: 1,
    title: "Complete HTML structure",
    description: "Create semantic HTML structure for TaskFlow.",
    status: "Todo",
    priority: "High",
    dueDate: "2026-05-25",
    createdAt: "2026-05-20",
  },

  {
    id: 2,
    title: "Design Navbar",
    description: "Create responsive navbar design.",
    status: "In Progress",
    priority: "Medium",
    dueDate: "2026-05-26",
    createdAt: "2026-05-20",
  },

  {
    id: 3,
    title: "Add task cards",
    description: "Display tasks using reusable components.",
    status: "Todo",
    priority: "High",
    dueDate: "2026-05-27",
    createdAt: "2026-05-20",
  },

  {
    id: 4,
    title: "Implement delete feature",
    description: "Delete task using useState.",
    status: "Done",
    priority: "Low",
    dueDate: "2026-05-28",
    createdAt: "2026-05-20",
  },

  {
    id: 5,
    title: "Responsive design",
    description: "Improve mobile responsiveness.",
    status: "Todo",
    priority: "Medium",
    dueDate: "2026-05-29",
    createdAt: "2026-05-20",
  },
];