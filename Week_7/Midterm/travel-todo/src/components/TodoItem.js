import { useState } from 'react';
import TodoEdit from './TodoEdit';

const TodoItem = (props) => {
  const { todo, onDelete, onEdit } = props;
  const [showEdit, setShowEdit] = useState(false);

  const handleDelete = () => {
    onDelete(todo.id);
  };

  const handleEdit = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, newTitle) => {
    onEdit(id, newTitle);
    setShowEdit(false);
  };

  let content = <h3 className="item">{todo.title}</h3>; // Added class for styling
  if (showEdit) {
    content = <TodoEdit todo={todo} onSubmit={handleSubmit} />;
  }

  return (
    <div>
      {content}
      <div className="actions">
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
