import React, { useState } from 'react';
import {
  СalendarGrid,
  CalendarDay,
  CalendarItem,
  CalendarTask,
  CalendarDayWrapper,
  CalendarTaskText,
} from './CalendarTable.styled';
import { isSameDay, format, isSameMonth } from 'date-fns';
import { selectFullDate } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  startOfMonth,
  startOfWeek,
  isSunday,
  isMonday,
  isTuesday,
  endOfMonth,
  getDaysInMonth,
} from 'date-fns';
import {
  setCurrentDay,
  setCurrentMonth,
  setCurrentYear,
} from 'redux/tasks/tasksSlice';
export const CalendarTable = ({ changePeriod }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const reduxDate = useSelector(selectFullDate);
  const currentDate = new Date(reduxDate);
  const chooseDay = () => {
    let startOfMonthDate = startOfMonth(currentDate);
    let endOfMonthDate = endOfMonth(currentDate);
    let startOfWeekDate = startOfWeek(startOfMonthDate, { weekStartsOn: 1 });
    let daysToAdd = 35;
    if (
      getDaysInMonth(currentDate) === 28 ||
      getDaysInMonth(currentDate) === 29
    ) {
      if (isMonday(startOfMonthDate)) {
        return {
          startOfWeekDate,
          daysToAdd: 28,
        };
      } else if (getDaysInMonth(currentDate) === 29) {
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

  const [fixedDate] = useState(currentDate);
  const day = new Date(startOfWeekDate);
  const daysArray = [...Array(daysToAdd)].map(() => {
    const currentDay = new Date(day);
    day.setDate(day.getDate() + 1);
    return currentDay;
  });

  const isCurrentDay = day => isSameDay(day, fixedDate);

  const handleDateClick = date => {
    const day = date.getDate();
    changePeriod('day');
    navigate(`/calendar/day/${day}`);
    dispatch(setCurrentDay(date.getDate()));
    dispatch(setCurrentMonth(date.getMonth()));
    dispatch(setCurrentYear(date.getFullYear()));
  };
  return (
    <СalendarGrid>
      {daysArray.map(dayItem => (
        <CalendarItem
          key={format(dayItem, 'ddMMyyyy')}
          onClick={() => handleDateClick(dayItem)}
          disabled={!isSameMonth(dayItem, currentDate)}
        >
          <CalendarDayWrapper>
            <CalendarDay
              isCurrentDay={isCurrentDay(dayItem)}
              isCurrentDayMonth={isSameMonth(dayItem, currentDate)}
            >
              {format(dayItem, 'd')}
            </CalendarDay>
          </CalendarDayWrapper>
          <CalendarTask>
            {isSameMonth(dayItem, currentDate) ? (
              <CalendarTaskText>
                TextTextTextTextTextTextTextText Text TextText
              Text</CalendarTaskText>
            ) : null}
          </CalendarTask>
        </CalendarItem>
      ))}
    </СalendarGrid>
  );
};
