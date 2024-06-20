import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState =({
    Todos :[
        {
            id: nanoid(),
            text : 'Hellow World'
        },

        {
            id: nanoid(),
            text : 'Zaman'
        }
    ]
})

const TodoSlice = createSlice({
    name:'Todos',
    initialState,
    reducers:{
        addTodo:(state, action)=>{
            const todo ={
                id : nanoid(),
                text : action.payload
            }
            state.Todos.push(todo)
        },
        removeTodo:(state)=>{
            state.Todos = state.Todos.filter((todo) => todo.id !== action.payload.id)
        }

    }
})

export const {addTodo, removeTodo} = TodoSlice.actions
export default TodoSlice.reducer