// Used Todo Class notes
// main changes: center and title name
import {useState} from 'react'

const TodoCreate = (props) => {
  const { onCreate } = props
  const [title, setTitle] = useState('')

  const handleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onCreate(title)
    setTitle('') // Clear the form after submission
  }

  return (
    <form onSubmit={handleSubmit}>
      <center><h1>Travel To-Do List</h1>
      <input type="text" onChange={handleChange} value={title} placeholder="Add task"/>
      <button>Add Task</button></center>
    </form>
  )
}

export default TodoCreate
