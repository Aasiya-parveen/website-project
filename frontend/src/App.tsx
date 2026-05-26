import { useState } from "react";

function App() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Low");

  const [tasks, setTasks] = useState<any[]>([]);

  const [showHighPriority, setShowHighPriority] =
    useState(false);

  const [loading, setLoading] = useState(false);

  const handleAddTask = async (e: any) => {

    e.preventDefault();

    setLoading(true);

    await new Promise((resolve) =>
      setTimeout(resolve, 1000)
    );

    const newTask = {
      title,
      description,
      priority,
    };

    setTasks([...tasks, newTask]);

    setTitle("");
    setDescription("");
    setPriority("Low");

    setLoading(false);
  };

  const handleDelete = (index: number) => {

    const updatedTasks = tasks.filter(
      (_, i) => i !== index
    );

    setTasks(updatedTasks);
  };

  const filteredTasks = showHighPriority
    ? tasks.filter(
        (task) => task.priority === "High"
      )
    : tasks;

  return (

    <div className="dashboard">

      <div className="sidebar">

        <h2>TaskFlow</h2>

        <p>Manage your tasks smartly 🚀</p>

      </div>

      <div className="main-content">

        <div className="top-section">

          <div className="stats-card">
            <h3>Total Tasks</h3>
            <p>{tasks.length}</p>
          </div>

          <div className="stats-card">
            <h3>High Priority</h3>

            <p>
              {
                tasks.filter(
                  (task) => task.priority === "High"
                ).length
              }
            </p>
          </div>

        </div>

        <div className="form-container">

          <h1>Create Task</h1>

          <form onSubmit={handleAddTask}>

            <input
              type="text"
              placeholder="Enter Task Title"
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
            />

            <textarea
              placeholder="Enter Description"
              value={description}
              onChange={(e) =>
                setDescription(e.target.value)
              }
            ></textarea>

            <select
              value={priority}
              onChange={(e) =>
                setPriority(e.target.value)
              }
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>

            <button disabled={loading}>

              {
                loading
                  ? "Saving..."
                  : "Add Task"
              }

            </button>

          </form>

          <button
            className="filter-btn"
            onClick={() =>
              setShowHighPriority(
                !showHighPriority
              )
            }
          >

            {
              showHighPriority
                ? "Show All Tasks"
                : "Show High Priority"
            }

          </button>

        </div>

        <div className="tasks-section">

          <h2>Your Tasks</h2>

          {
            filteredTasks.map((task, index) => (

              <div
                key={index}
                className="task-card"
              >

                <div>

                  <h3>{task.title}</h3>

                  <p>{task.description}</p>

                  <span className="priority">
                    {task.priority}
                  </span>

                </div>

                <button
                  onClick={() =>
                    handleDelete(index)
                  }
                >
                  Delete
                </button>

              </div>
            ))
          }

        </div>

      </div>

    </div>
  );
}

export default App;