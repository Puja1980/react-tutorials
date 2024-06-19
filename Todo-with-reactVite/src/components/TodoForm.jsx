import React,{useState} from "react";
import { useTodo } from "../Context/TodoContext";

function TodoForm() {
  const [todo, setTodo] = useState([])
  const {addTodo} = useTodo()


 const add = (e) => {
    e.preventDefault()

    if(!todo) return
      addTodo({todo, completed : false})
      setTodo('')
  }

  return (
    <form onSubmit={add} className="flex">
      <div className="w-full m-2 p-2 flex justify-center items-center">

        <input 
            type="text"
            value={todo} 
            onChange={(e) => setTodo (e.target.value)}
            placeholder="Add Todo" 
            className="w-full p-2 outline-none rounded-s-lg"
        />
        <button
            type="submit"
            className="bg-green-500 text-white p-2 rounded-e-lg"
        >Add</button>
      </div>
    </form>
  );
}

export default TodoForm;
