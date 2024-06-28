import React from 'react'
import React, { useState } from 'react'
import { addTodo } from '../feature/TodoSlice/TodoSlice'
import { useDispatch } from 'react-redux'

function UpdateForm() {
  const [input, setInput] = useState([])
 const dispatch = useDispatch()

const handleSubmit =(e) =>{
  e.preventdefault();
  
  if(/^\s*$/.test(input)){
    alert('Please Enter a valid Todo')
  } else{
    dispatch(addTodo(input))
  }

}
  return (
    <form onSubmit={handleSubmit}>
    <div className='flex justify-center'>Add Todo Form</div>
    <div>
      <input
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Update Todo'
        className='px-2 rounded-s-lg text-black outline-none'

      />
      <button
        type='submit'
        className='bg-green-600 text-white px-3 rounded-e-lg'
      >
        Update
      </button>
    </div>
    </form>
  )
}

export default UpdateForm