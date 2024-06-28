import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../feature/TodoSlice/TodoSlice'

const store = configureStore({
    reducer : todoReducer
})

export default store;