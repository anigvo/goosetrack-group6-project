import { THEME } from "./constants";
const { createSlice } = require("@reduxjs/toolkit");

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        value: THEME.LIGHT,
    },
    reducers: {
        setTheme(state, action) {
            state.value = action.payload;
        }
    }
})

export const { setTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;