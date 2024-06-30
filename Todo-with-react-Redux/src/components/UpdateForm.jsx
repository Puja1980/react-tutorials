import React, { useState } from "react";
import {useSelector, useDispatch } from "react-redux";
import { updateComplete } from "../feature/TodoSlice/TodoSlice";

function UpdateForm() {
  const todoToUpdate = useSelector((state) => state.todoUpdate);
  const [uptade, setUpdate] = useState(todoToUpdate.text)
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (/^\s*$/.test(uptade)) {
      alert("Please Enter a valid Todo");
      setUpdate("")
    } else {
      dispatch(updateComplete({
        id:todoToUpdate.id,
        text: uptade
      }));
      setUpdate("")
    }
  };
  return (
    <form onSubmit={handleSubmit}
      className='w-full'
    >
      <div>
        <input
          type="text"
          value={uptade}
          onChange={e => setUpdate(e.target.value)}
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
