export const userInitialState = {
    name: null,
    email: null,
    birthday: null,
    phone: null,
    skype: null,
    avatarURL: null,
}

export const initialState = {
    user: userInitialState,
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    error: null,
    isLoadingAuth: false
};

export const handleRejected = (state, action) => {
    state.error = action.payload;
    state.isLoadingAuth = false;
}


export const handlePending = state => {
    state.isLoadingAuth = true;
}