import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
    todos:[{
        id:1,
        text:"Welcome",
        completed: false  ,
        priority:"High" ,
    }]
}

export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers : {
        addTodo:(state,action)=>{
            const todo={
                id: nanoid(),
                text: action.payload.text ,
                completed:false ,
                priority: action.payload.priority 
            }
            state.todos.push(todo) ; 
        },
        removeTodo :(state,action)=>{
            state.todos = state.todos.filter((todo)=> todo.id != action.payload)
        },
        updatedtodo:(state,action)=>{
            const{id,text,priority} = action.payload;
            state.todos = state.todos.map((todo)=>todo.id==id?{...todo,text,priority}:todo)
        },
        
        toggleCompleted: (state,action)=>{
           const id = action.payload;
           state.todos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo)
        }
    }
})
export const {addTodo,removeTodo,updatedtodo,toggleCompleted}  = todoSlice.actions ;
export default todoSlice.reducer ; 