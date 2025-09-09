import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../feature/todo/todoSlice';
function AddTodo() {
  const [input,setInput] = useState('') ; 
  const dispatch = useDispatch() ; 
  const [priority, setPriority] = useState('Medium')

  const addToHandler = (e) => {
    e.preventDefault()
    if (input.trim() === '') return
    dispatch(addTodo({ text: input, priority }))
    setInput('')
    setPriority('Medium') // Reset dropdown
  }

  return (
     <form 
     onSubmit={addToHandler}
      className="flex flex-col sm:flex-row items-center gap-4 mt-12 bg-[#1f2937] p-6 rounded-xl shadow-lg max-w-2xl mx-auto">
  <input
    type="text"
    className="flex-grow bg-[#2d3748] text-white placeholder-gray-400 border
     border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-700 
     rounded-xl px-4 py-2 text-base outline-none transition-all duration-200 ease-in-out"
    placeholder="📝 What's on your mind?"
    value={input} 
    onChange={(e)=>setInput(e.target.value)}
    
  />

  <select
  value={priority}
  onChange={(e) => setPriority(e.target.value)}
  className="text-white bg-[#2d3748] border border-gray-600 rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-700 transition-all"
>
  <option value="High">🔴 High</option>
  <option value="Medium">🟡 Medium</option>
  <option value="Low">🟢 Low</option>
</select>


  <button
    type="submit"
    className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600
     hover:to-purple-600 text-white font-semibold py-2 px-6 rounded-xl shadow-md 
     transition-all duration-300 transform hover:scale-105 focus:outline-none"
  >
     Add Todo
  </button>
</form>
  )
}

export default AddTodo