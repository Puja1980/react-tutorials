import React, { useState } from "react";
import { addTodo } from "../feature/TodoSlice/TodoSlice";
import { useDispatch } from "react-redux";

function UpdateForm() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventdefault();

    if (/^\s*$/.test(input)) {
      alert("Please Enter a valid Todo");
      setInput("")
    } else {
      dispatch(addTodo(input));
      setInput("")
    }
  };
  return (
    <form onSubmit={handleSubmit}
      className='w-full'
    >
      <div>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Update Todo"
          className="w-5/6 px-2 rounded-s-lg text-black outline-none text-lg"
        />
        <button
          type="submit"
          className="bg-red-600 text-white px-3 text-lg rounded-e-lg"
        >
          Update
        </button>
      </div>
    </form>
  );
}

export default UpdateForm;
