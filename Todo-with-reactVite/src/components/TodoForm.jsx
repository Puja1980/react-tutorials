import React from "react";

function TodoForm() {
  return (
    <form className="flex flex-col justify-center items-center bg-slate-500 p-2 m-60 rounded-xl">
      <div className=" text-white text-center">TodoForm</div>
      <div className="w-full m-8 p-2 flex justify-center items-center">

        <input 
            type="text" 
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
