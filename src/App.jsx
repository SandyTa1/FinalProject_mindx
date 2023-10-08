import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('All');

  const handleInputChange = e => {
    setInput(e.target.value);
  };

  const handleAddTodo = e => {
    e.preventDefault();
    if (input.trim() !== '') {
      const newTodo = {
        id: Math.random().toString(),
        text: input,
        completed: false
      };
      setTodos([...todos, newTodo]);
      setInput('');
    }
  };

  const handleToggleTodo = id => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    );
  };

  const handleFilterChange = value => {
    setFilter(value);
  };

  const handleRemoveAllCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'All') {
      return true;
    } else if (filter === 'Active') {
      return !todo.completed;
    } else if (filter === 'Completed') {
      return todo.completed;
    }
  });

  return (
    <>
      <div className="todo">
        <h1 style={{ fontFamily: 'Gotham, Arial, sans-serif' }}>#todo</h1>
      </div>
      <div className="button-container">
        <button
          className={filter === 'All' ? 'active' : ''}
          onClick={() => handleFilterChange('All')}
          style={{ fontFamily: 'Gotham, Arial, sans-serif' }}
        >
          All
        </button>
        <button
          className={filter === 'Active' ? 'active' : ''}
          onClick={() => handleFilterChange('Active')}
          style={{ fontFamily: 'Gotham, Arial, sans-serif' }}
        >
          Active
        </button>
        <button
          className={filter === 'Completed' ? 'active' : ''}
          onClick={() => handleFilterChange('Completed')}
          style={{ fontFamily: 'Gotham, Arial, sans-serif' }}
        >
          Completed
        </button>
      </div>
      <hr className="line1" />
      <form className="add-todo-form" onSubmit={handleAddTodo}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Add a todo..."
          style={{ fontFamily: 'Gotham, Arial, sans-serif' }}
        />
        <button type="submit" style={{ fontFamily: 'Gotham, Arial, sans-serif' }}>Add</button>
      </form>
      <ul className="todo-list">
        {filteredTodos.map(todo => (
          <li
            key={todo.id}
            className={todo.completed ? 'completed' : ''}
            style={{ fontFamily: 'Gotham, Arial, sans-serif' }}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleTodo(todo.id)}
            />
            <span className={todo.completed ? 'crossed' : ''}>{todo.text}</span>
          </li>
        ))}
      </ul>
      {filter === 'Completed' && (
        <button onClick={handleRemoveAllCompleted} style={{ fontFamily: 'Gotham, Arial, sans-serif' }}>
          Remove All
        </button>
      )}
    </>
  );
}

export default App;