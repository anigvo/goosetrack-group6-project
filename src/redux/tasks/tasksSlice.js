import { createSlice } from "@reduxjs/toolkit";
import { getDate, getYear } from "date-fns";
import { createUserTasks, deleteUserTask, getUserTasks, updateUserTask } from "./operations";

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        month: new Date().getMonth(),
        day: getDate(new Date()),
        year: getYear(new Date()),
        items: [],
    },
    reducers: {
        setCurrentDay(state, action) {
            state.day = action.payload;
        },
        setCurrentMonth(state, action) {
            state.month = action.payload;
        },
        setCurrentYear(state, action) {
            state.year = action.payload;
        }
    },
    extraReducers: builder => {
        builder
        .addCase(getUserTasks.fulfilled, (state, action) => {
            state.items = action.payload;
        })
        .addCase(createUserTasks.fulfilled, (state, {payload}) => {
            state.items.push(payload);
        })
        .addCase(updateUserTask.fulfilled, (state, {payload}) => {

        })
        .addCase(deleteUserTask.fulfilled, (state, {payload}) => {
            state.items.filter(task => task.id !== payload.id);
        })
    }
})

export const {setCurrentDay, setCurrentMonth} = tasksSlice.actions;

export const tasksReducer = tasksSlice.reducer;