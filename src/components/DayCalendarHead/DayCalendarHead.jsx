import React from 'react';
import { isSameDay, format, startOfWeek } from 'date-fns';
import {
  DaysOfWeekList,
  DayOfWeek,
  DayNumberOfWeek,
  DayCalendarHeadContainer,
  DayNumberOfWeekWrapper,
} from './DayCalendarHead.styled';
import { useNavigate } from 'react-router-dom';
import { setCurrentDay } from 'redux/tasks/tasksSlice';
import { useDispatch } from 'react-redux';
export const DayCalendarHead = ({ today, pickHandler }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isCurrentDay = day => isSameDay(day, today);
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const daysOfWeekShort = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

  const startOfWeekToday = startOfWeek(today, {
    weekStartsOn: 1,
    locale: 'en-US',
  });
  const daysArray = [...Array(7)].map(() => {
    const currentDay = new Date(startOfWeekToday);
    startOfWeekToday.setDate(startOfWeekToday.getDate() + 1);
    return currentDay;
  });

  const handleDateClick = event => {
    const pickDay = Number(event.target.textContent);
    const pickDate = new Date();
    pickDate.setDate(pickDay);
    navigate(`/calendar/day/${pickDay}`);
    dispatch(setCurrentDay(pickDate.getDate()));
    pickHandler(pickDate);
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
          <DayNumberOfWeekWrapper
            key={format(dayItem, 'ddMMyyyy')}
            onClick={handleDateClick}
          >
            <DayNumberOfWeek isCurrentDay={isCurrentDay(dayItem)}>
              {format(dayItem, 'd')}
            </DayNumberOfWeek>
          </DayNumberOfWeekWrapper>
        ))}
      </DaysOfWeekList>
    </DayCalendarHeadContainer>
  );
};
