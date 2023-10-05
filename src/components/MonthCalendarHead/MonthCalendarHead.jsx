import React from 'react';
import { DaysOfWeekList, DayOfWeek } from './MonthCalendarHead.styled';

export const MonthCalendarHead = () => {
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <DaysOfWeekList>
      {daysOfWeek.map((day, index) => (
        <DayOfWeek
          key={index}
          weekend={index === 5 || index === 6 ? true : false}
        >
          {day}
        </DayOfWeek>
      ))}
    </DaysOfWeekList>
  );
};
