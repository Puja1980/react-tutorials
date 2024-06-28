import React from "react";
import TodoForm from "./TodoForm";
import { useSelector } from "react-redux";

function Card() {
  const todos = useSelector(state => state.todos);

  return (
    <>
      <div className="flex justify-center items-center bg-slate-500 p-3 text-white">
        <TodoForm />
        {/* <updateForm/> */}
      </div>
      <div>
        <ul>
          {todos.map(todo =>
            <li key={todo.id}>
              {todo.text}
            </li>
          )}
        </ul>
      </div>
      </>
  )
}

export default Card;
