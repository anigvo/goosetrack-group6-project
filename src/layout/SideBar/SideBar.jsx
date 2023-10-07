import { UserNav } from "components/UserNav/UserNav";
import { Aside, CloseBtn, Logo, LogoWrapper, Title, TitleOutline } from "./SideBar.styled";
import { LogoutBtn } from "buttons/LogoutBtn/LogoutBtn";
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';
import logo from '../../assets/images/logo.png';
import { useMediaQuery } from "hooks/useMediaQuery";

const sideBarVars = {
    initial: { x: '-100%' },
    isOn: { x: '0%', transition: { type: "spring", stiffness: 100, damping: 18 } },
    exit: { x: '-100%' }
}

const desktopVars = {
    initial: { x: '0%' },
    isOn: { x: '0%' },
    exit: { x: '0%' }
}

export const SideBar = ({ closeMethod }) => {
    const isDesktop = useMediaQuery('(min-width: 1440px)')
    return (
        <Aside
            initial={"initial"}
            animate={"isOn"}
            exit={"exit"}
            variants={isDesktop ? desktopVars : sideBarVars}>
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
