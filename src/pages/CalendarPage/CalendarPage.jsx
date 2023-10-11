import React, { useState, Suspense, useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { CalendarToolbar } from 'layout/CalendarToolbar/CalendarToolbar';
import { useSelector, useDispatch } from 'react-redux';
import { selectDay, selectMonth, selectYear } from 'redux/selectors';
import { Loader } from 'components/Loader/Loader';
import { getUserTasks } from 'redux/tasks/operations';

const CalendarPage = ({ updatePageName }) => {
  const navigate = useNavigate();
  const month = useSelector(selectMonth);
  const day = useSelector(selectDay);
  const year = useSelector(selectYear);
  const dispatch = useDispatch();

  useEffect(() => {
    updatePageName('Calendar');
  }, [updatePageName]);

  const [periodType, setPeriodType] = useState('month');
  const [currentDateMonth] = useState(month);
  const [currentDateYear] = useState(year);

  useEffect(() => {
    if (periodType === 'month') {
      dispatch(getUserTasks('month'));
      navigate(`/calendar/month/${month}`);
    } else if (periodType === 'day') {
      dispatch(getUserTasks('day'));
      navigate(`/calendar/day/${day}`);
    }
  }, [navigate, periodType, day, month, dispatch]);

  const checkDate = data => {
    const currentDate = new Date(currentDateYear, currentDateMonth, 2);
    if (data > currentDate) {
      return false;
    }
    return true;
  };

  return (
    <>
      <CalendarToolbar
        periodType={periodType}
        changePeriod={setPeriodType}
        checkDate={checkDate}
        page={'calendar'}
      />
      <Suspense fallback={<Loader type={'suspense'} />}>
        <Outlet context={[setPeriodType, checkDate]} />
      </Suspense>
    </>
  );
};

export default CalendarPage;
