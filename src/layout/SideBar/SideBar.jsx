import { UserNav } from "components/UserNav/UserNav";
import { Aside, CloseBtn, Logo, LogoWrapper, Title, TitleOutline } from "./SideBar.styled";
import { LogoutBtn } from "buttons/LogoutBtn/LogoutBtn";
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';
import logo from '../../assets/images/logo.png';
import { useMediaQuery } from "hooks/useMediaQuery";
import { useEffect, useRef } from "react";

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

export const SideBar = ({ closeMethod, openBtnRef }) => {
    const isDesktop = useMediaQuery('(min-width: 1440px)')
    const sideBarRef = useRef(null);

    useEffect(() => {
        const closeOutside = (event) => {
            if (sideBarRef.current) {
                if (sideBarRef.current && !sideBarRef.current.contains(event.target)
                && (openBtnRef.current && !openBtnRef.current.contains(event.target)) && !isDesktop) closeMethod();
            }
          };
          if (sideBarRef.current) {
            window.addEventListener("click", closeOutside);
            return () => window.removeEventListener("click", closeOutside)
          }
    }, [sideBarRef, closeMethod, openBtnRef, isDesktop])

    return (
        <Aside
            initial={"initial"}
            animate={"isOn"}
            exit={"exit"}
            variants={isDesktop ? desktopVars : sideBarVars}
            ref={sideBarRef}>
            <div>
                <LogoWrapper>
                    <Logo src={logo} alt="logo" width={60}/>
                    <Title>G<TitleOutline>oo</TitleOutline>seTrack</Title>
                    <CloseBtn onClick={closeMethod} aria-label="close sidebar"><CloseIcon /></CloseBtn>
                </LogoWrapper>
                <UserNav />
            </div>
            <LogoutBtn />
        </Aside>)
};
