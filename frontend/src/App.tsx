function App() {
  return (
    <div style={{ padding: "20px" }}>

      <h1>TaskFlow</h1>

      <form>

        <div>
          <input
            type="text"
            placeholder="Enter Task Title"
          />
        </div>

        <br />

        <div>
          <textarea
            placeholder="Enter Description"
          ></textarea>
        </div>

        <br />

        <div>
          <select>
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