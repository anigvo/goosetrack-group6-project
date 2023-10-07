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
import {
  setCurrentDay,
  setCurrentMonth,
  setCurrentYear,
} from 'redux/tasks/tasksSlice';
import { useDispatch } from 'react-redux';

export const DayCalendarHead = ({
  today,
  pickHandler,
  currentDateMonth,
  currentDateDay,
  currentDateYear,
}) => {
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

  const handleDateClick = data => {
    console.log(data);
    console.log(today);
    const pickDate = new Date(data);
    const pickDay = pickDate.getDate();
    navigate(`/calendar/day/${pickDay}`);
    dispatch(
      setCurrentYear(pickDate.getFullYear()),
      setCurrentMonth(pickDate.getMonth()),
      setCurrentDay(pickDate.getDate())
    );
    checkDate(data);
    pickHandler(pickDate);
  };

  const checkDate = data => {
    const currentDate = new Date(currentDateYear, currentDateMonth, 1);
    if (data >= currentDate) {
      return false;
    }
    return true;
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
              isCurrentDay={isCurrentDay(dayItem)}
              onClick={() => handleDateClick(dayItem)}
              disabled={checkDate(dayItem)}
              disabledStyled={checkDate(dayItem)}
            >
              {format(dayItem, 'd')}
            </DayNumberOfWeek>
          </DayNumberOfWeekWrapper>
        ))}
      </DaysOfWeekList>
    </DayCalendarHeadContainer>
  );
};
