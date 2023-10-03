import React, { useState } from 'react';
import { DatePickerCustom } from '../DatePickerCustom/DatePickerCustom';
import { ReactComponent as ArrowLeft } from '../../assets/icons/chevron-left.svg';
import { ReactComponent as ArrowRight } from '../../assets/icons/chevron-right.svg';
import {
  PaginatorBtn,
  PeriodPaginatorContainer,
  PaginatorBtnWrapper,
} from './PeriodPaginator.styled';

export const PeriodPaginator = ({
  prevHandler,
  nextHandler,
  today,
  periodType,
}) => {

  const [selectedDate, setSelectedDate] = useState(new Date(today));
  const [filterDay, setFilterDay] = useState(selectedDate.getDay());
  const [filterMonth, setFilterMonth] = useState(selectedDate.getMonth());
  const [filterYear, setFilterYear] = useState(selectedDate.getFullYear());
  const currentDay = new Date().getDay();
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const handlePrevMonth = () => {
    const prevMonthDate = new Date(selectedDate);
    prevMonthDate.setMonth(prevMonthDate.getMonth() - 1);
    setSelectedDate(prevMonthDate);
    setFilterMonth(prevMonthDate.getMonth());
    setFilterYear(prevMonthDate.getFullYear());
    prevHandler();
  };

  const handleNextMonth = () => {
    const nextMonthDate = new Date(selectedDate);
    nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);
    setSelectedDate(nextMonthDate);
    setFilterMonth(nextMonthDate.getMonth());
    setFilterYear(nextMonthDate.getFullYear());
    nextHandler();
  };

  const handlePrevDay = () => {
    const prevDayDate = new Date(selectedDate);
    prevDayDate.setDate(prevDayDate.getDate() - 1);
    setSelectedDate(prevDayDate);
    setFilterMonth(prevDayDate.getMonth());
    prevHandler();
  };
  const handleNextDay = () => {
    const nextDayDate = new Date(selectedDate);
    nextDayDate.setDate(nextDayDate.getDate() + 1);
    setSelectedDate(nextDayDate);
    setFilterMonth(nextDayDate.getMonth());
    nextHandler();
  };

  return (
    <PeriodPaginatorContainer>
      <DatePickerCustom
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        filterMonth={filterMonth}
        setFilterMonth={setFilterMonth}
        filterYear={filterYear}
        setFilterYear={setFilterYear}
        handlePrevMonth={handlePrevMonth}
        handleNextMonth={handleNextMonth}
        filterDay={filterDay}
        setFilterDay={setFilterDay}
        currentDay={currentDay}
        handlePrevDay={handlePrevDay}
        handleNextDay={handleNextDay}
        periodType={periodType}
      />

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
            disabled={filterDay === currentDay}
            disabledStyle={filterDay === currentDay ? true : false}
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
