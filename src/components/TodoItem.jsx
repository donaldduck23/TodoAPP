import React, { useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import  {removeTodo,updatedtodo,toggleCompleted} from '../feature/todo/todoSlice'

function TodoIteam({todo}) {

const todos = useSelector(state=>state.todos)
const dispatch = useDispatch()  

const [todomsg ,setTodomsg] = useState(todo.text) ; 
const [isTodoEditable,setIsTodoEditable] = useState(false) ;

  return (
  <div
  className={`flex items-center gap-3 p-4 rounded-xl shadow-md transition-all duration-300 border ${
    todo.completed
      ? "bg-green-100 border-green-300"
      : "bg-purple-100 border-purple-300"
  }`}
>
  {/* Checkbox */}
  <input
    type="checkbox"
    className="w-5 h-5 accent-purple-600 cursor-pointer transition-all duration-200"
    onClick={()=>dispatch(toggleCompleted(todo.id))}
  />

  <input
    type="text"
    className={`flex-grow text-lg bg-transparent rounded-lg outline-none transition-all duration-200 ${
      isTodoEditable
        ? "border border-black/20 px-3 py-1 bg-white"
        : "border-none"
    } ${todo.completed ? "line-through text-gray-500" : "text-gray-900"}`}
    value={todomsg} 
    onChange={(e)=>setTodomsg(e.target.value)}
    readOnly = {!isTodoEditable}
  />

<span
  className={`px-3 py-1 text-sm font-semibold rounded-full 
    ${todo.priority === "High" ? "bg-red-200 text-red-800" :
      todo.priority === "Medium" ? "bg-yellow-200 text-yellow-800" :
      "bg-green-200 text-green-800"}
  `}
>
  {todo.priority}
</span>

  {/* Edit / Save Button */}
  <button
    className="w-9 h-9 rounded-full text-lg bg-indigo-100 hover:bg-indigo-200 text-indigo-800 font-bold shadow transition-all duration-200 disabled:opacity-50"
    onClick={()=>{
      if(todo.completed) return ; 
      if(isTodoEditable){
        dispatch(updatedtodo({id:todo.id,
              text:todomsg,
              priority:todo.priority
        }))
      }
      setIsTodoEditable(prev => !prev);
    }}
    disabled={todo.completed}
  >
    {isTodoEditable ? "💾" : "✏️"}
  </button>

  {/* Delete Button */}
  <button
    className="w-9 h-9 rounded-full text-lg bg-red-100 hover:bg-red-200 text-red-700 font-bold shadow transition-all
     duration-200"
     onClick={()=>dispatch(removeTodo(todo.id))}
  >
    🗑️
  </button>
</div>

  )
}

export default TodoIteam