import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import SingleTodo from "./components/SingleTodo";
import { TodoProvider } from "./Context/TodoContext";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const updateTodo =(id, todo) =>{
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? todo: prevTodo))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id ===id ? {...prevTodo, completed:!prevTodo.completed}: prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider value={{ addTodo, removeTodo, updateTodo, toggleComplete }}>
      <div className="flex flex-col w-1/2 mx-52 my-2 mt-5 pb-2 px-2 justify-center items-center bg-slate-400 rounded-xl">
      <h1 className=" text-white text-center">Manage Todo</h1>
        <div>
          <TodoForm />
        </div>

        <div className="flex flex-wrap gap-y-3">
          {todos.map((todo) => (
            <div key={todo.id} className="w-full">
              <SingleTodo todo={todo} />
            </div>
          ))}
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
