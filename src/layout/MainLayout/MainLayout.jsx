import { Header } from "components/Header/Header";
import { SideBar } from "layout/SideBar/SideBar";
import { Suspense, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { LayoutWrapper, MainContent } from "./MainLayout.styled";
import { useMediaQuery } from "hooks/useMediaQuery";
import { AnimatePresence } from "framer-motion";

const MainLayout = () => {
    const [isOpenSidebar, setIsOpenSidebar] = useState(false);
    const isNotDesktop = useMediaQuery("(max-width: 1439px)");

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
        <LayoutWrapper>
            <AnimatePresence>
                {isOpenSidebar && <SideBar closeMethod={closeSidebar} />}
            </AnimatePresence>
            <MainContent>
                <Header openMethod={openSidebar} />
                <Suspense fallback={<></>}>
                    <Outlet />
                </Suspense>
            </MainContent>
        </LayoutWrapper>
    )
}

export default MainLayout;
