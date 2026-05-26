import { useState } from "react";

function App() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Low");

  const [tasks, setTasks] = useState<any[]>([]);

  const handleAddTask = (e: any) => {

    e.preventDefault();

    const newTask = {
      title,
      description,
      priority,
    };

    setTasks([...tasks, newTask]);

    setTitle("");
    setDescription("");
    setPriority("Low");
  };

  const handleDelete = (index: number) => {

    const updatedTasks = tasks.filter(
      (_, i) => i !== index
    );

    setTasks(updatedTasks);
  };

  return (
    <div style={{ padding: "20px" }}>

      <h1>TaskFlow</h1>

      <form onSubmit={handleAddTask}>

        <div>
          <input
            type="text"
            placeholder="Enter Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <br />

        <div>
          <textarea
            placeholder="Enter Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <br />

        <div>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>

        <br />

        <button>
          Add Task
        </button>

      </form>

      <hr />

      <h2>Tasks</h2>

      {
        tasks.map((task, index) => (

          <div
            key={index}
            style={{
              border: "1px solid black",
              padding: "10px",
              marginBottom: "10px",
            }}
          >

            <h3>{task.title}</h3>

            <p>{task.description}</p>

            <p>Priority: {task.priority}</p>

            <button onClick={() => handleDelete(index)}>
              Delete
            </button>

          </div>
        ))
      }

    </div>
  );
}

export default App;