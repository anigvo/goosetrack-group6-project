import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = ({ pageName }) => {
  return (
    <>
      <h1>Main Layout</h1>
      <h2>{pageName}</h2>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MainLayout;
