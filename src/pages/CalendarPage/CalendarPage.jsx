import { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { CalendarToolbar } from 'layout/CalendarToolbar/CalendarToolbar';
import {CalendarContainer} from './CalendarPage.styled'

const CalendarPage = ({ updatePageName }) => {
  useEffect(() => {
    updatePageName('Calendar');
  }, [updatePageName]);
  return (
    <CalendarContainer>
      <CalendarToolbar />
      <Suspense>
        <Outlet />
      </Suspense>
    </CalendarContainer>
  );
};

export default CalendarPage;
