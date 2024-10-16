import { useState } from 'react';

const TodoEdit = (props) => {
  const { todo, onSubmit } = props;
  const [title, setTitle] = useState(todo.title);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(todo.id, title);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Travel To-Do List</h1>
      <input type="text" onChange={handleChange} value={title} placeholder="Add task" />
      <button>Add Task</button>
    </form>
  );
};

export default TodoEdit;

