import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo, toggleInputForm } from "../feature/TodoSlice/TodoSlice";
import { FaPencil } from "react-icons/fa6";

function SingleTodo(props) {
  const [done, setDone] = React.useState(false)
  const dispatch = useDispatch();

  return (
    <div className="bg-yellow-500 flex justify-between items-center rounded-lg">
      <div className="flex px-2 ">
      <input
          type="checkbox"
          onChange={() => setDone(!done)}
          className="cursor-pointer mx-2"

        />
        <h1 className={`ml-3 ${done? 'line-through font-semibold': ''}`}>
          {props.text}
          </h1>
      </div>
      <div className="m-1 ">

        
        
        <button
          onClick={() =>
            dispatch(
              toggleInputForm({
                id: props.id,
                text: props.text
              })
            )
          }
          className={`bg-green-500 text-black text-lg mr-2 px-3 py-2 rounded-lg }`}
        >
          <FaPencil />
        </button>

        <button
          className="bg-red-500 text-white text-lg px-3 py-1 rounded-lg"
          onClick={() => dispatch(removeTodo(props.id))}
        >
          X
        </button>
      </div>
    </div>
  );
}

export default SingleTodo;
