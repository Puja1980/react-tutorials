import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState =({
    todos :[
        {
            id: nanoid(),
            text : 'Hellow World'
        },

        {
            id: nanoid(),
            text : 'Zaman'
        }
    ],

    toggleForm : true,
    todoUpdate : {}

})

const TodoSlice = createSlice({
    name:'Todo',
    initialState,
    reducers:{
        addTodo:(state, action)=>{
            const todo ={
                id : nanoid(),
                text : action.payload.text
            }
            state.todos.push(todo)
        },
        removeTodo:(state, action)=>{
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },

        toggleInputForm : (state, action) => {
            state.toggleForm = !state.toggleForm,
            state.todoUpdate = {...state.todoUpdate, ...action.payload}
        },

        clearTodo : (state) => {
            state.todos = []
        }

    }
})

export const {addTodo, removeTodo, toggleInputForm, clearTodo} = TodoSlice.actions
export default TodoSlice.reducer