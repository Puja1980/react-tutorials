import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo, toggleInputForm } from "../feature/TodoSlice/TodoSlice";

function SingleTodo(props) {
  const dispatch = useDispatch();
  

  return (
    <div className="bg-yellow-500 flex justify-between items-center rounded-lg">
      <div className="px-2">
        <h1>
          {props.text}
        </h1>
      </div>
      <div className="m-1 ">
        <button 
          onClick={() => dispatch(toggleInputForm({
            id: props.id,
            text: props.text
          }))}
          className="bg-green-500 text-red-600 text-lg mr-2 px-3 rounded-lg"
          >
          Edit
        </button>

        <button className="bg-red-500 text-white text-lg px-3 rounded-lg"
          onClick={()=> dispatch(removeTodo(props.id))}
        >
          X
        </button>
      </div>
    </div>
  );
}

export default SingleTodo;
