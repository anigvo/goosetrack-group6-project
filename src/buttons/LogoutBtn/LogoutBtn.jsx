import { LogBtn } from "./LogoutBtn.styled";
import { ReactComponent as LogOutIcon } from '../../assets/icons/log-out.svg';
import { useDispatch } from "react-redux";
import { logOutUser } from "redux/auth/operations";

export const LogoutBtn = () => {
    const dispatch = useDispatch();
    const handleLogOut = () => {
        dispatch(logOutUser());
    }
    return (
        <LogBtn onClick={handleLogOut}>Log out<LogOutIcon /></LogBtn>
    )
};
