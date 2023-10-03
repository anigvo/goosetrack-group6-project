import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
import {
  СalendarGrid,
  CalendarDay,
  CalendarItem,
  CalendarTask,
  CalendarDayWrapper,
} from './CalendarTable.styled';
import {
  startOfMonth,
  startOfWeek,
  isSameDay,
  format,
  addMonths,
  isSameMonth,
  isSunday,
  isMonday,
  isTuesday,
  endOfMonth,
} from 'date-fns';

export const CalendarTable = () => {
  //   const { currentData } = useParams();
  const [today, setToday] = useState(new Date());

  const chooseDay = () => {
    let startOfMonthDate = startOfMonth(today);
    let endOfMonthDate = endOfMonth(today);
    let startOfWeekDate = startOfWeek(startOfMonthDate, { weekStartsOn: 1 });
    let daysToAdd = 35;

    if (isTuesday(endOfMonthDate) && isMonday(startOfMonthDate)) {
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
  const day = new Date(startOfWeekDate);

  const daysArray = [...Array(daysToAdd)].map(() => {
    const currentDay = new Date(day);
    day.setDate(day.getDate() + 1);
    return currentDay;
  });

  const isCurrentDay = day => isSameDay(day, today);

  const prevHandler = () => {
    setToday(prev => addMonths(prev, -1));
  };

  const nextHandler = () => {
    setToday(prev => addMonths(prev, 1));
  };

  return (
    <СalendarGrid>
      {daysArray.map(dayItem => (
        <CalendarItem key={format(dayItem, 'ddMMyyyy')}>
          <CalendarDayWrapper>
            <CalendarDay
              isCurrentDay={isCurrentDay(dayItem)}
              isCurrentDayMonth={isSameMonth(dayItem, today)}
            >
              {format(dayItem, 'd')}
            </CalendarDay>
          </CalendarDayWrapper>
          <CalendarTask />
        </CalendarItem>
      ))}
      <button onClick={prevHandler}>PREV</button>
      <button onClick={nextHandler}>NEXT</button>
    </СalendarGrid>
  );
};
