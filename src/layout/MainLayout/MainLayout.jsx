import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <>
            <h1>Main Layout</h1>
            <Suspense>
                <Outlet />
            </Suspense>
        </>
    )
}

export default MainLayout;