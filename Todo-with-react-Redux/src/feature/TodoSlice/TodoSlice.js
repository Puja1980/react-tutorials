import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState =({
    todos :[
        {
            id: nanoid(),
            text : 'Hellow World',
        },

        {
            id: nanoid(),
            text : 'Zaman',
        }
    ],

    toggleForm : true,
    todoUpdate : {},
})

const TodoSlice = createSlice({
    name:'Todo',
    initialState,
    reducers:{
        addTodo:(state, action)=>{
            const todo ={
                id : nanoid(),
                text : action.payload
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
        updateComplete : (state, action) => {
            const todoModified = state.todos.find((todo)=> todo.id === action.payload.id);
            todoModified.text = action.payload.text;
            state.toggleForm = !state.toggleForm;
        },

        clearTodo : (state) => {
            state.todos = []
        }

    }
})

export const {addTodo, removeTodo, toggleInputForm, clearTodo, updateComplete} = TodoSlice.actions
export default TodoSlice.reducer