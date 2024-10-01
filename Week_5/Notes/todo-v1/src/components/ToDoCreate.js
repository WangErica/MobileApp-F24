import {useState} from 'react'

const ToDoCreate = (props) => {
    const {onCreate} = props
    const [title, setTitle] = useState('')

    const handleChange = (event) => {
        setTitle(event.target.value)
    }

    const handleSubmit = (event) => {
        // make sure the form doesnt refresh the page
        event.preventDefault()
        onCreate(title)
        // clear out the form
        setTitle('')
    }
    return(
        <form onSubmit={handleSubmit}>
            <label>Title:</label>
            <input type="text" onChange={handleChange} value={title}/>
            <button>Add ToDo</button>
        </form>
    )
}

export default ToDoCreate