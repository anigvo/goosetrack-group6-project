import { getDate, getYear } from "date-fns";

export const initialState = {
    month: new Date().getMonth(),
    day: getDate(new Date()),
    year: getYear(new Date()),
    items: [],
    isLoadingTasks: false
}

export const handlePending = state => {
    state.isLoadingTasks = true;
};

export const handleRejected = state => {
    state.isLoadingTasks = false;
}