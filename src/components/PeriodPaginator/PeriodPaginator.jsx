import React, { useEffect, useState } from 'react';
import { DatePickerCustom } from '../DatePickerCustom/DatePickerCustom';
import { ReactComponent as ArrowLeft } from '../../assets/icons/chevron-left.svg';
import { ReactComponent as ArrowRight } from '../../assets/icons/chevron-right.svg';
import {
  PaginatorBtn,
  PeriodPaginatorContainer,
  PaginatorBtnWrapper,
  DayTitle,
} from './PeriodPaginator.styled';
import { useDispatch } from 'react-redux';
import {
  setCurrentDay,
  setCurrentMonth,
  setCurrentYear,
} from 'redux/tasks/tasksSlice';

export const PeriodPaginator = ({
  prevHandler,
  nextHandler,
  pickHandler,
  today,
  periodType,
  currentDateDay,
  currentDateMonth,
  changePeriod,
  checkDate,
}) => {
  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState(new Date(today));
  const [filterMonth, setFilterMonth] = useState(selectedDate.getMonth());
  const [filterYear, setFilterYear] = useState(selectedDate.getFullYear());
  const currentDay = currentDateDay;
  const currentMonth = currentDateMonth;
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    setSelectedDate(today);
  }, [today]);

  const handlePrevMonth = () => {
    const prevMonthDate = new Date(selectedDate);
    prevMonthDate.setMonth(prevMonthDate.getMonth() - 1);
    setSelectedDate(prevMonthDate);
    setFilterMonth(prevMonthDate.getMonth());
    setFilterYear(prevMonthDate.getFullYear());
    dispatch(
      setCurrentMonth(prevMonthDate.getMonth()),
      setCurrentYear(prevMonthDate.getFullYear())
    );
    prevHandler();
  };

  const handleNextMonth = () => {
    const nextMonthDate = new Date(selectedDate);
    nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);
    setSelectedDate(nextMonthDate);
    setFilterMonth(nextMonthDate.getMonth());
    setFilterYear(nextMonthDate.getFullYear());
    dispatch(
      setCurrentMonth(nextMonthDate.getMonth()),
      setCurrentYear(nextMonthDate.getFullYear())
    );
    nextHandler();
  };

  const handlePrevDay = () => {
    const prevDayDate = new Date(selectedDate);
    prevDayDate.setDate(prevDayDate.getDate() - 1);
    setSelectedDate(prevDayDate);
    setFilterMonth(prevDayDate.getMonth());
    dispatch(
      setCurrentDay(prevDayDate.getDate()),
      setCurrentMonth(prevDayDate.getMonth()),
      setCurrentYear(prevDayDate.getFullYear())
    );
    checkDate(prevDayDate);
    prevHandler();
  };

  const handleNextDay = () => {
    const nextDayDate = new Date(selectedDate);
    nextDayDate.setDate(nextDayDate.getDate() + 1);
    setSelectedDate(nextDayDate);
    setFilterMonth(nextDayDate.getMonth());
    dispatch(
      setCurrentDay(nextDayDate.getDate()),
      setCurrentMonth(nextDayDate.getMonth()),
      setCurrentYear(nextDayDate.getFullYear())
    );
    checkDate(nextDayDate);
    nextHandler();
  };

  return (
    <PeriodPaginatorContainer>
      {periodType === 'month' ? (
        <DatePickerCustom
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          filterMonth={filterMonth}
          setFilterMonth={setFilterMonth}
          filterYear={filterYear}
          setFilterYear={setFilterYear}
          handlePrevMonth={handlePrevMonth}
          handleNextMonth={handleNextMonth}
          changePeriod={changePeriod}
          currentDay={currentDay}
          pickHandler={pickHandler}
        />
      ) : (
        <DayTitle>
          {selectedDate.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          })}
        </DayTitle>
      )}
      <PaginatorBtnWrapper>
        {periodType === 'month' ? (
          <PaginatorBtn
            direction={'left'}
            type="button"
            onClick={handlePrevMonth}
            disabled={
              filterMonth === currentMonth && filterYear === currentYear
            }
            disabledStyle={
              filterMonth === currentMonth && filterYear === currentYear
                ? true
                : false
            }
          >
            <ArrowLeft />
          </PaginatorBtn>
        ) : (
          <PaginatorBtn
            direction={'left'}
            type="button"
            onClick={handlePrevDay}
            disabled={checkDate(selectedDate, 'button')}
            disabledStyle={checkDate(selectedDate, 'button')}
          >
            <ArrowLeft />
          </PaginatorBtn>
        )}
        {periodType === 'month' ? (
          <PaginatorBtn
            direction={'right'}
            type="button"
            onClick={handleNextMonth}
          >
            <ArrowRight />
          </PaginatorBtn>
        ) : (
          <PaginatorBtn
            direction={'right'}
            type="button"
            onClick={handleNextDay}
          >
            <ArrowRight />
          </PaginatorBtn>
        )}
      </PaginatorBtnWrapper>
    </PeriodPaginatorContainer>
  );
};
