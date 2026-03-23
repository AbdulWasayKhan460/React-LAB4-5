import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (task === "") return;

    const newTodo = {
      text: task,
      done: false
    };
    setTodos([...todos, newTodo]);
    setTask("");
  };

  const deleteTask = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const toggleDone = (index) => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  };
  return (
    <div className="todo-app">
      <h1>Simple Todo App</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="add-btn" onClick={addTask}>Add</button>
      </div>
      <ul className="todo-list">
                {todos.map((todo, index) => (
            <li key={index} className={`todo-item ${todo.done ? "done" : ""}`}>
              <span onClick={() => toggleDone(index)}>
                {todo.text}
              </span>
              <button className="delete-btn" onClick={() => deleteTask(index)}>
                Delete
              </button>
            </li>
          ))}
       </ul>
    </div>
  );
}

export default App;