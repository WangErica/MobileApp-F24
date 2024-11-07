import ToDoItem from './ToDoItem'

const ToDoList = (props) => {
    const {todos, onDelete, onEdit} = props

    const renderedContent= todos.map((todo)=>(
        <ToDoItem key={todo.id} todo={todo} onDelete={onDelete} onEdit={onEdit}/>
    ))

    return <div>{renderedContent}</div>
}

export default ToDoList