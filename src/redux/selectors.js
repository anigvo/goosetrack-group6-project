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
        { todo: [], inProgress: [], done: [] }
    )
})