export const selectTheme = state => state.theme.value;

export const selectUser = state => state.auth.user;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectError = state => state.auth.error;

export const selectAvatar = state => state.auth.user.avatarURL;

export const selectName = state => state.auth.user.name

export const selectMonth = state => state.tasks.month;

export const selectDay = state => state.tasks.day;