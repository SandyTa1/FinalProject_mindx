import React, { useState } from 'react';
import TodoForm from './todoForm';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    setTodos([...todos, todo]);
  };

  return (
    <div>
      <TodoForm onSubmit={addTodo} />
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;