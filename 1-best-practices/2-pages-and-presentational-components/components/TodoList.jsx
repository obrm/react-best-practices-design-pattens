function TodoList({ todos, onToggle }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} onClick={() => onToggle(todo.id)}>
          {todo.completed ? <s>{todo.text}</s> : todo.text}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
