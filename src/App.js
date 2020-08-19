import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(["Cook Food", "Take Dog out !!"]);
  const [input, setInput] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, input]);
  };
  return (
    <div className="App">
      <h2>Todo-App with React and Firebase</h2>
      <form>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button type="submit" onClick={addTodo}>
          Add Todo
        </button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
