import {useState} from 'react'
import ToDoCreate from './components/ToDoCreate'
import ToDoList from './components/ToDoList'

const App = () => {
  const [todos, setTodos] = useState([])

  const createTodo = (title) => {
    // console.log('creatng todo', title)
    // do not directly mutate state, because react will not be able to detect any changes 
    const updateTodos = [
      ...todos, 
      // when the key and vale are identical you can just say the key once
      {id: Math.round(Math.random()* 999999), title}
    ]
    setTodos(updateTodos)
  }

  const deleteTodoById =(id) => {
    // look at the array, find the matching id and remove it
    // filter returns a copy of the array we are filtering through
    const updatedTodos = todos.filter((todo)=>{
      // return truthy keep, falsey chuck
      return todo.id !== id
    })
    setTodos(updatedTodos)
  }

  const editTodoById = (id, newTitle) => {
    const updatedTodos = todos.map((todo)=>{
      // if the ids match, this is the one to update
      if (todo.id === id){
        // copy old values, then add new values
        return {...todo, title: newTitle}
      }
      // otherwise return the untouched todo
      return todo
    })
    // set our state here and pass it all the way down
    setTodos(updatedTodos)

  }
  return (
    <div>
      {todos.length}
      <ToDoCreate onCreate={createTodo}/>
      <ToDoList todos={todos} onDelete={deleteTodoById} onEdit={editTodoById}/>

    </div>
  )
}

export default App;
