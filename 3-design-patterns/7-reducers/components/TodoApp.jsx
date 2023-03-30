import { useReducer } from 'react';
import { todoReducer, ADD_TODO, TOGGLE_TODO } from './todoReducer';

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  const addTodo = text => {
    dispatch({ type: ADD_TODO, text });
  };

  const toggleTodo = id => {
    dispatch({ type: TOGGLE_TODO, id });
  };

  // Render the todos and form for adding new todos
};

export default TodoApp;
