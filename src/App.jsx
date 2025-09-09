import {useEffect } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList';
import { useDispatch,useSelector } from 'react-redux';
import { addTodo } from './feature/todo/todoSlice'
function App() {

 const dispatch = useDispatch()
  const todos = useSelector((state) => state.todos)

  // Load todos from localStorage into Redux on first render
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'))
    if (storedTodos && storedTodos.length > 0) {
      storedTodos.forEach((todo) => dispatch(addTodo(todo)))
    }
  }, [dispatch])

  // Save Redux todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])


  return (
    <>
      <h1>Redux ToolKit Practice </h1>
      <AddTodo/>
      <TodoList/>
    </>
  )
}

export default App
