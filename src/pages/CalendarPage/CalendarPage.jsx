import { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { CalendarToolbar } from 'layout/CalendarToolbar/CalendarToolbar';

const CalendarPage = ({ updatePageName }) => {
  useEffect(() => {
    updatePageName('Calendar');
  }, [updatePageName]);
  return (
    <>
      <CalendarToolbar />
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default CalendarPage;
