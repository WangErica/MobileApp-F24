import { useState } from 'react';
import TodoCreate from './components/TodoCreate';
import TodoList from './components/TodoList';
import PackingList from './components/PackingList'; // Import the new PackingList component

const App = () => {
  const [todos, setTodos] = useState([]);

  const createTodo = (title) => {
    const updatedTodos = [
      ...todos,
      { id: Math.round(Math.random() * 9999999), title },
    ];
    setTodos(updatedTodos);
  };

  const deleteTodoById = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const editTodoById = (id, newTitle) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, title: newTitle };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <TodoCreate onCreate={createTodo} />
      <TodoList todos={todos} onDelete={deleteTodoById} onEdit={editTodoById} />
      <PackingList /> 
    </div>
  );
};

export default App;