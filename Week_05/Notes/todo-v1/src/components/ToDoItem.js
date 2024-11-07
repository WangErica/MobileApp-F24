import {useState} from 'react'
import ToDoEdit from './ToDoEdit'

const ToDoItem = (props) => {
    const {todo, onDelete, onEdit} = props
    const [showEdit, setShowEdit] = useState(false)

    const handleDelete = () => {
        onDelete(todo.id)
    }

    const handleShowEdit = () => {
        setShowEdit(!showEdit)
    }

    const handleSubmit = (id, newTitle) => {
        onEdit(id, newTitle)
        handleShowEdit()
    }

    let content = <h3>{todo.title}</h3>
    if (showEdit){
        content = (
        <ToDoEdit todo={todo} onSubmit={handleSubmit}/>
        )
    }
    return (
    <div>
        {content}
        <button onClick={handleShowEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
    </div>
    )
}

export default ToDoItem