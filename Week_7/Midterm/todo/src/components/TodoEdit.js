import { useState } from 'react'

const TodoEdit = (props) => {
  const { todo, onSubmit } = props
  const [title, setTitle] = useState(todo.title)

  const handleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit(todo.id, title)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={title} placeholder="Edit task" />
      <button>Update Task</button>
    </form>
  )
}

export default TodoEdit
