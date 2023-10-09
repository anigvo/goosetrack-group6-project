import { createSlice } from '@reduxjs/toolkit';
import {
  createUserTasks,
  deleteUserTask,
  getUserTasks,
  updateUserTask,
} from './operations';
import toast from "react-hot-toast";
import { handlePending, handleRejected, initialState } from "./constants";
import { BiTaskX } from 'react-icons/bi';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setCurrentDay(state, action) {
      state.day = action.payload;
    },
    setCurrentMonth(state, action) {
      state.month = action.payload;
    },
    setCurrentYear(state, action) {
      state.year = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getUserTasks.pending, handlePending)
      .addCase(getUserTasks.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoadingTasks = false;
      })
      .addCase(getUserTasks.rejected, handleRejected)
      .addCase(createUserTasks.fulfilled, (state, { payload }) => {
        state.items.push(payload);
      })
      .addCase(updateUserTask.fulfilled, (state, { payload }) => {
        const oldItemIndex = state.items.findIndex(task => task._id === payload._id);
        state.items.splice(oldItemIndex, 1, payload);
      })
      .addCase(deleteUserTask.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(task => task._id !== payload);
        toast.success("Task was deleted successfully!", {
          icon: <BiTaskX size={24} color='#3CBC81'/>
        })
      })
  }
})
export const { setCurrentDay, setCurrentMonth, setCurrentYear } =
  tasksSlice.actions;

export const tasksReducer = tasksSlice.reducer;
