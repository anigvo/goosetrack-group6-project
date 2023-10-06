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
            const oldItemIndex = state.items.findIndex(task => task._id === payload._id);
            state.items.splice(oldItemIndex, 1, payload);
        })
        .addCase(deleteUserTask.fulfilled, (state, {payload}) => {
            state.items = state.items.filter(task => task._id !== payload);
        })
    }
})

export const {setCurrentDay, setCurrentMonth} = tasksSlice.actions;

export const tasksReducer = tasksSlice.reducer;