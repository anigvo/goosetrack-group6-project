import React from 'react';
import { isSameDay, format, startOfWeek, addDays } from 'date-fns';
import {
  DaysOfWeekList,
  DayOfWeek,
  DayNumberOfWeek,
  DayCalendarHeadContainer,
  DayNumberOfWeekWrapper,
} from './DayCalendarHead.styled';
import { useNavigate } from 'react-router-dom';
import {
  setCurrentDay,
  setCurrentMonth,
  setCurrentYear,
} from 'redux/tasks/tasksSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectFullDate } from 'redux/selectors';
export const DayCalendarHead = ({ checkDate }) => {
  const reduxDate = useSelector(selectFullDate);
  const currentDate = new Date(reduxDate);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isCurrentDay = day => isSameDay(day, currentDate);
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const daysOfWeekShort = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

  const startOfWeekToday = startOfWeek(currentDate, {
    weekStartsOn: 1,
    locale: 'en-US',
  });
  const daysArray = [...Array(7)].map(() => {
    const currentDay = new Date(startOfWeekToday);
    startOfWeekToday.setDate(startOfWeekToday.getDate() + 1);
    return currentDay;
  });

  const handleDateClick = data => {
    const pickDay = data.getDate();
    navigate(`/calendar/day/${pickDay}`);
    dispatch(setCurrentDay(data.getDate()));
    dispatch(setCurrentMonth(data.getMonth()));
    dispatch(setCurrentYear(data.getFullYear()));
  };

  return (
    <DayCalendarHeadContainer>
      <DaysOfWeekList>
        {window.innerWidth < 767
          ? daysOfWeekShort.map((day, index) => (
              <DayOfWeek key={index}>{day}</DayOfWeek>
            ))
          : daysOfWeek.map((day, index) => (
              <DayOfWeek key={index}>{day}</DayOfWeek>
            ))}
      </DaysOfWeekList>
      <DaysOfWeekList>
        {daysArray.map(dayItem => (
          <DayNumberOfWeekWrapper key={format(dayItem, 'ddMMyyyy')}>
            <DayNumberOfWeek
              aria-label='change day'
              isCurrentDay={isCurrentDay(dayItem)}
              onClick={() => handleDateClick(dayItem)}
              disabled={checkDate(addDays(dayItem, 2))}
              disabledStyled={checkDate(addDays(dayItem, 2))}
            >
              {format(dayItem, 'd')}
            </DayNumberOfWeek>
          </DayNumberOfWeekWrapper>
        ))}
      </DaysOfWeekList>
    </DayCalendarHeadContainer>
  );
};
