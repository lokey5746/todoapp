import React, { useState } from "react";
import "./App.css";
import { Button, FormControl, Input } from "@material-ui/core";
import Todo from "./components/Todo";

function App() {
  const [todos, setTodos] = useState(["Cook Food", "Take Dog out !!"]);
  const [input, setInput] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, input]);
    setInput("");
  };

  return (
    <div className="App">
      <h2>Todo-App with React and Firebase</h2>
      <form>
        <FormControl>
          <Input
            placeholder="Add Todos"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </FormControl>
        <Button
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
          disabled={!input}
        >
          Add Todo
        </Button>
      </form>
      <ul>
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
