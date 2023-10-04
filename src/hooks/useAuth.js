import { useSelector } from 'react-redux';
import {
    selectUser,
    selectIsLoggedIn,
    selectIsRefreshing,
    selectIsLoadingAuth,
} from 'redux/selectors';

export const useAuth = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isRefreshing = useSelector(selectIsRefreshing);
    const user = useSelector(selectUser);
    const isLoadingAuth = useSelector(selectIsLoadingAuth);

    return {
        isLoggedIn,
        isRefreshing,
        user,
        isLoadingAuth
    };
}