import React, { useState } from "react";
import TodoList from "../components/TodoList";

function TodoApp({ initialTodos }) {
  const [todos, setTodos] = useState(initialTodos);

  const handleToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return <TodoList todos={todos} onToggle={handleToggle} />;
}

export default TodoApp;
