import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
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
  setMonth,
  getDaysInMonth,
} from 'date-fns';

const CalendarPage = ({ updatePageName }) => {
  useEffect(() => {
    updatePageName('Calendar');
  }, [updatePageName]);

  const { currentDate } = useParams();
  const [periodType, setPeriodType] = useState('month');
  const [currentDateMonth] = useState(currentDate);
  const [today, setToday] = useState(setMonth(new Date(), currentDateMonth));
  console.log(today);
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
    setToday(prev => addMonths(prev, -1));
  };

  const nextHandler = () => {
    setToday(prev => addMonths(prev, 1));
  };

  return (
    <>
      <CalendarToolbar
        prevHandler={prevHandler}
        nextHandler={nextHandler}
        today={today}
        currentDateMonth={currentDateMonth}
        periodType={periodType}
      />
      <Suspense>
        <Outlet context={[startOfWeekDate, daysToAdd, today, setPeriodType]} />
      </Suspense>
    </>
  );
};

export default CalendarPage;
