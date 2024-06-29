import React from "react";
import TodoForm from "./TodoForm";
import UpdateForm from "./UpdateForm";
import SingleTodo from "./SingleTodo";
import { clearTodo } from "../feature/TodoSlice/TodoSlice";
import { useSelector, useDispatch } from "react-redux";

function Card() {
  const todos = useSelector(state => state.todos);
  const toggleForm = useSelector(state => state.toggleForm);
  const dispatch = useDispatch();
  console.log(todos);

  return (
    <div className="w-1/2 p-4 mx-auto mt-16 text-center bg-slate-500 rounded-lg">
      <div className="flex justify-center my-4 text-2xl text-white">
        Add Todo Form
      </div>
      <div className="flex justify-center items-center p-3 text-white">
        {toggleForm ? <TodoForm /> : <UpdateForm />}
      </div>
      <div>
        <ul>
          {todos.map(todo =>
            <li key={todo.id} className="mt-2">
              <SingleTodo id={todo.id} text={todo.text} />
            </li>
          )}
        </ul>
      </div>
      <div>
        <button
          onClick={() => dispatch(clearTodo())}
          className="bg-yellow-600 px-3 align-bottom m-2 rounded-lg border text-lg shadow-lg"
        >
          Clear
        </button>
      </div>
    </div>
  );
}

export default Card;
