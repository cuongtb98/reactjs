import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: "todo",
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push(action.payload)
        },

        deleteTodo: (state, action) => {
            return state.filter((itm, id) => id !== action.payload)
        },

        edit: (state, action) => {
            state[action.payload] = "edit"
            console.log(state[action.payload]);
        }
    }
})

export const { add, deleteTodo, edit } = todoSlice.actions
export default todoSlice.reducer