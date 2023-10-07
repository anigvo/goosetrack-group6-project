import toast from "react-hot-toast";
import { LiaUserSlashSolid } from 'react-icons/lia';
import { BsDatabaseExclamation } from 'react-icons/bs'

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
    if (action.payload.includes('401')) {
        toast.error('Not valid email or password.', {
            icon: <LiaUserSlashSolid size={24} color="#EA3D65" />,
            style: {
                padding: '20px',
                fontSize: 18,
                boxShadow: 'none',
                border: '1px solid rgba(220, 227, 229, 0.80)'
            }
        });
    } else if (action.payload.includes('409')) {
        toast.error('Email is already in use.', {
            icon: <BsDatabaseExclamation size={24} color="#EA3D65" />,
            style: {
                padding: '20px',
                fontSize: 18,
                boxShadow: 'none',
                border: '1px solid rgba(220, 227, 229, 0.80)'
            }
        });
    } else {
        toast.error('Something went wrong.', {
            icon: <BsDatabaseExclamation size={24} color="#EA3D65" />,
            style: {
                padding: '20px',
                fontSize: 18,
                boxShadow: 'none',
                border: '1px solid rgba(220, 227, 229, 0.80)'
            }
        });
    }
}


export const handlePending = state => {
    state.isLoadingAuth = true;
}