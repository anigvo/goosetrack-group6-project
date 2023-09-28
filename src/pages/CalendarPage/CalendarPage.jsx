import { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
const CalendarPage = ({ updatePageName }) => {
  useEffect(() => {
    updatePageName('Calendar');
  }, [updatePageName]);
  return (
    <>
      <h1>Calendar page</h1>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default CalendarPage;
