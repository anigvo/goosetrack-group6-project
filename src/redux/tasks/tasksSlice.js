const { createSlice } = require("@reduxjs/toolkit");

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: []
    },

})

export const tasksReducer = tasksSlice.reducer;