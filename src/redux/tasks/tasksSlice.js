import { createSlice } from "@reduxjs/toolkit";
import { getDate } from "date-fns";

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        month: new Date().getMonth(),
        day: getDate(new Date()),
        tasks: [],
    },
    reducers: {
        setCurrentDay(state, action) {
            state.day = action.payload;
        },
        setCurrentMonth(state, action) {
            state.month = action.payload;
        }
    }
})

export const {setCurrentDay, setCurrentMonth} = tasksSlice.actions;

export const tasksReducer = tasksSlice.reducer;