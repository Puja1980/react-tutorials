import { useState } from 'react'
import TodoForm from './components/TodoForm'
import SingleTodo from './components/SingleTodo'
import { TodoProvider } from './Context/TodoContext'



function App() {
  return (
    <TodoProvider value={{addTodo, removeTodo, updateTodo }}>
      <TodoForm/>
      <SingleTodo/>
    </TodoProvider>
  )
}

export default App
