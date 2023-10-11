import { Header } from "layout/Header/Header";
import { SideBar } from "layout/SideBar/SideBar";
import { Suspense, useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import { LayoutWrapper, MainContent, OutletWrapper } from "./MainLayout.styled";
import { useMediaQuery } from "hooks/useMediaQuery";
import { AnimatePresence } from "framer-motion";
import { Loader } from "components/Loader/Loader";

const MainLayout = ({ pageName }) => {
    const [isOpenSidebar, setIsOpenSidebar] = useState(false);
    const isNotDesktop = useMediaQuery("(max-width: 1439px)");
    const sideBarRef = useRef(null);
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

    useEffect(() => {
        const closeOutside = (event) => {
            if (sideBarRef.current && !sideBarRef.current.contains(event.target)
            && !openSidebarBtnRef.current.contains(event.target)) setIsOpenSidebar(false);
          };
          if (sideBarRef.current) {
            window.addEventListener("click", closeOutside);
            return () => window.removeEventListener("click", closeOutside)
          }
    }, [sideBarRef])

    return (
       <><LayoutWrapper>
            <AnimatePresence>
                {isOpenSidebar && <SideBar ref={sideBarRef} closeMethod={closeSidebar} />}
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
