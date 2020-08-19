import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(["Cook Food", "Take Dog out !!"]);
  const [input, setInput] = useState("");
  return (
    <div className="App">
      <h2>Todo-App with React and Firebase</h2>
      <input />
      <button>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
