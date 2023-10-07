import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { CalendarToolbar } from 'layout/CalendarToolbar/CalendarToolbar';
import {
  startOfMonth,
  startOfWeek,
  addMonths,
  isSunday,
  isMonday,
  isTuesday,
  endOfMonth,
  getDaysInMonth,
  addDays,
} from 'date-fns';
import { useSelector } from 'react-redux';
import { selectDay, selectMonth, selectYear } from 'redux/selectors';
import { Loader } from 'components/Loader/Loader';
const CalendarPage = ({ updatePageName }) => {
  const navigate = useNavigate();
  const month = useSelector(selectMonth);
  const day = useSelector(selectDay);
  const year = useSelector(selectYear);

  useEffect(() => {
    updatePageName('Calendar');
  }, [updatePageName]);

  const [periodType, setPeriodType] = useState('month');
  const [currentDateMonth] = useState(month);
  const [currentDateDay] = useState(day);
  const [currentDateYear] = useState(year);
  const [today, setToday] = useState(new Date(year, month, day));

  useEffect(() => {
    if (periodType === 'month') {
      navigate(`/calendar/month/${month}`);
    } else if (periodType === 'day') {
      navigate(`/calendar/day/${day}`);
    }
  }, [navigate, periodType, day, month]);

  const chooseDay = () => {
    let startOfMonthDate = startOfMonth(today);
    let endOfMonthDate = endOfMonth(today);
    let startOfWeekDate = startOfWeek(startOfMonthDate, { weekStartsOn: 1 });
    let daysToAdd = 35;
    if (getDaysInMonth(today) === 28 || getDaysInMonth(today) === 29) {
      if (isMonday(startOfMonthDate)) {
        return {
          startOfWeekDate,
          daysToAdd: 28,
        };
      } else if (getDaysInMonth(today) === 29) {
        return {
          startOfWeekDate,
          daysToAdd: 35,
        };
      } else {
        return {
          startOfWeekDate,
          daysToAdd: 35,
        };
      }
    } else if (isTuesday(endOfMonthDate) && isMonday(startOfMonthDate)) {
      daysToAdd = 35;
    } else if (
      isSunday(startOfMonthDate) ||
      isMonday(endOfMonthDate) ||
      isTuesday(endOfMonthDate)
    ) {
      daysToAdd = 42;
    }

    return {
      startOfWeekDate,
      daysToAdd,
    };
  };

  const { startOfWeekDate, daysToAdd } = chooseDay();

  const prevHandler = () => {
    if (periodType === 'month') {
      setToday(prev => addMonths(prev, -1));
    } else {
      setToday(prev => addDays(prev, -1));
    }
  };

  const nextHandler = () => {
    if (periodType === 'month') {
      setToday(prev => addMonths(prev, 1));
    } else {
      setToday(prev => addDays(prev, 1));
    }
  };

  const pickHandler = date => {
    setToday(date);
  };

  return (
    <>
      <CalendarToolbar
        prevHandler={prevHandler}
        nextHandler={nextHandler}
        pickHandler={pickHandler}
        today={today}
        currentDateMonth={currentDateMonth}
        currentDateDay={currentDateDay}
        periodType={periodType}
        changePeriod={setPeriodType}
      />
      <Suspense fallback={<Loader type={'suspense'} />}>
        <Outlet
          context={[
            startOfWeekDate,
            daysToAdd,
            today,
            setPeriodType,
            pickHandler,
            currentDateMonth,
            currentDateDay,
            currentDateYear,
          ]}
        />
      </Suspense>
    </>
  );
};

export default CalendarPage;
