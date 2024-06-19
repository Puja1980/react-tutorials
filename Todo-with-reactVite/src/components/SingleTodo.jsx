import React, { useState } from "react";
import { useTodo } from "../Context";

function SingleTodo({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const { updateTodo, removeTodo, toggleComplete } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  return (
    <div className="flex gap-x-3 mt-2 bg-blue-400 p-0.5 rounded-lg">
      <input
        type="checkbox"
        onChange={toggleCompleted}
        className="cursor-pointer"
      />
      <input
        type="text"
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        className={`bg-transparent outline-none text-white ${isTodoEditable? 'px-1 bg-blue-500 rounded-xl border-1 border-blue-950':'bg-blue-400'} ${todo.completed ? 'line-through':''}`}
      />

      <div>
        <button
          onClick={() => {
            if(todo.completed) return;
            if(isTodoEditable){
              editTodo()
            }else setIsTodoEditable((prev) => !prev);
          }}
          className={`bg-green-500 text-white m-1  px-3 py-1 rounded-lg ${isTodoEditable? 'bg-yellow-500 text-black': ''}`}
        >
          Edit
        </button>

        <button
          onClick={() => removeTodo(todo.id)}
          disabled = {todo.completed}
          className="bg-red-500 text-white px-3 py-1 rounded-lg"
        >
          X
        </button>
      </div>
    </div>
  );
}

export default SingleTodo;
