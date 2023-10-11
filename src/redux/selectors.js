import { createSelector } from "@reduxjs/toolkit";

export const selectTheme = state => state.theme.value;

export const selectUser = state => state.auth.user;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectError = state => state.auth.error;

export const selectAvatar = state => state.auth.user.avatarURL;

export const selectName = state => state.auth.user.name

export const selectMonth = state => state.tasks.month;

export const selectDay = state => state.tasks.day;

export const selectYear = state => state.tasks.year;

export const selectIsLoadingAuth = state => state.auth.isLoadingAuth;

export const selectTasks = state => state.tasks.items;

export const selectCategoryTasks = createSelector([selectTasks], (items) => {
    return items.reduce(
        (allTasks, task) => {
            if (task.category === "to-do") {
                allTasks.todo.push(task);
            } else if (task.category === 'in-progress') {
                allTasks.inProgress.push(task)
            } else if (task.category === 'done') {
                allTasks.done.push(task);
            }
            return allTasks;
        },
        { todo: [], inProgress: [], done: [] })
})

export const selectIsLoadingTasks = state => state.tasks.isLoadingTasks;

export const selectFullDate = createSelector([selectDay, selectMonth, selectYear], (day, month, year) => {
    const fullDay = day.toString().length === 1 ? day.toString().padStart(2, '0') : day;
    const isoMonth = month + 1;
    const fullMonth = isoMonth.toString().length === 1 ? isoMonth.toString().padStart(2, '0') : isoMonth;
    return `${year}-${fullMonth}-${fullDay}`;
})

export const selectTodosAndInProgress = createSelector([selectTasks], (items) => {
    return items.reduce(
        (allTasks, task) => {
            if (task.category === "to-do") {
                allTasks.push(task);
            }
             else if (task.category === 'in-progress') {
               allTasks.push(task);
            }
            return allTasks;
        }, [])
})