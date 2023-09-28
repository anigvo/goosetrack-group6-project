import { LogBtn } from "./LogoutBtn.styled";
import {ReactComponent as LogOutIcon} from '../../assets/icons/log-out.svg';

export const LogoutBtn = () => {
    return (
        <>
            <LogBtn>Log out<LogOutIcon/></LogBtn>
        </>
    )
};
