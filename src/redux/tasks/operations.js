import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTasks, deleteTask, updateTask, createTask } from "api/tasks";

export const getUserTasks = createAsyncThunk(
    'tasks/get',
    async (credentials, thunkAPI) => {
        const {tasks: {day, month, year}} = thunkAPI.getState();
        try {
            const tasks = await getTasks(credentials, `${year}-${month+1}-${day}`);
            return tasks;
        } catch (error) {
            thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const createUserTasks = createAsyncThunk(
    'tasks/create',
    async (task, thunkAPI) => {
        try {
            const newTask = await createTask(task);
            return newTask;
        } catch (error) {
            thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const updateUserTask = createAsyncThunk(
    'tasks/update',
    async (credentials, thunkAPI) => {
        const {task, id} = credentials;        
        try {
            const updatedTask = await updateTask(task, id);
            return updatedTask;
        } catch (error) {
            thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const deleteUserTask = createAsyncThunk(
    'tasks/delete',
    async (id, thunkAPI) => {
        try {
            await deleteTask(id);
            return id;
        } catch (error) {
            thunkAPI.rejectWithValue(error.message);
        }
    }
)