import { UserNav } from "components/UserNav/UserNav";
import { Aside, CloseBtn, Logo, LogoWrapper, Title, TitleOutline } from "./SideBar.styled";
import { LogoutBtn } from "buttons/LogoutBtn/LogoutBtn";
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';
import logo from '../../assets/images/logo.png';

const sideBarVars = {
    initial: { x: '-100%' },
    isOn: { x: '0%', transition: { type: "spring", stiffness: 100 } },
    exit: { x: '-100%' }
}

export const SideBar = ({ closeMethod }) => {
    return (
        <Aside
            initial={"initial"}
            animate={"isOn"}
            exit={"exit"}
            variants={sideBarVars}>
            <div>
                <LogoWrapper>
                    <Logo src={logo} />
                    <Title>G<TitleOutline>oo</TitleOutline>seTrack</Title>
                    <CloseBtn onClick={closeMethod}><CloseIcon /></CloseBtn>
                </LogoWrapper>
                <UserNav />
            </div>
            <LogoutBtn />
        </Aside>)
};
