import React, { useState } from 'react';
import {
  СalendarGrid,
  CalendarDay,
  CalendarItem,
  CalendarTask,
  CalendarDayWrapper,
} from './CalendarTable.styled';
import { isSameDay, format, isSameMonth } from 'date-fns';

export const CalendarTable = ({ startOfWeekDate, daysToAdd, today }) => {
  const [fixedDate] = useState(today);
  const day = new Date(startOfWeekDate);
  const daysArray = [...Array(daysToAdd)].map(() => {
    const currentDay = new Date(day);
    day.setDate(day.getDate() + 1);
    return currentDay;
  });

  const isCurrentDay = day => isSameDay(day, fixedDate);

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
    </СalendarGrid>
  );
};
