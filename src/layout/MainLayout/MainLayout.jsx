import { Header } from "layout/Header/Header";
import { SideBar } from "layout/SideBar/SideBar";
import { Suspense, useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import { LayoutWrapper, MainContent, OutletWrapper } from "./MainLayout.styled";
import { useMediaQuery } from "hooks/useMediaQuery";
import { AnimatePresence } from "framer-motion";
import { Loader } from "components/Loader/Loader";

const MainLayout = ({ pageName }) => {
    const [isOpenSidebar, setIsOpenSidebar] = useState(true);
    const isNotDesktop = useMediaQuery("(max-width: 1439px)");
    const openSidebarBtnRef = useRef(null);

    useEffect(() => {
        if (!isNotDesktop) setIsOpenSidebar(true);
    }, [isNotDesktop]);

    const openSidebar = () => {
        setIsOpenSidebar(true);
    }

    const closeSidebar = () => {
        setIsOpenSidebar(false);
    }

    return (
       <><LayoutWrapper>
            <AnimatePresence>
                {isOpenSidebar && <SideBar openBtnRef={openSidebarBtnRef} closeMethod={closeSidebar} />}
            </AnimatePresence>
            <MainContent>
                <Header ref={openSidebarBtnRef} openMethod={openSidebar} title={pageName} isOpenSidebar={isOpenSidebar}/>
                <OutletWrapper>
                    <Suspense fallback={<Loader type={'suspense'}/>}>
                        <Outlet />
                    </Suspense>
                </OutletWrapper>
            </MainContent>
        </LayoutWrapper>
        </> 
    )
}

export default MainLayout;
