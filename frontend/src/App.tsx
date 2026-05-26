import { useState } from "react";

function App() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Low");

  return (
    <div style={{ padding: "20px" }}>

      <h1>TaskFlow</h1>

      <form>

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

      <div>

        <h3>Learn React</h3>

        <p>Practice frontend development</p>

        <p>Priority: High</p>

        <button>Delete</button>

      </div>

    </div>
  );
}

export default App;