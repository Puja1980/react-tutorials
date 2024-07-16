import React,{createContext, useContext} from 'react'

export const TodoContext = createContext({
    todos :[
        {
        id:1,
        tittle : "Hellow world",
        complete : false
        },
    ],
    addTodo :(tittle) => {},
    removeTodo : (id) => {},
    updateTodo :(id, tittle) => {},
    toggleComplete :(id) => {},
})

export const useTodo = () =>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider
