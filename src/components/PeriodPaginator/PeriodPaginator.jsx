import React, { useState } from 'react';
import { DatePickerCustom } from '../DatePickerCustom/DatePickerCustom';
import { ReactComponent as ArrowLeft } from '../../assets/icons/chevron-left.svg';
import { ReactComponent as ArrowRight } from '../../assets/icons/chevron-right.svg';
import {
  PaginatorBtn,
  PeriodPaginatorContainer,
  PaginatorBtnWrapper,
} from './PeriodPaginator.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  setCurrentDay,
  setCurrentMonth,
  setCurrentYear,
} from 'redux/tasks/tasksSlice';
import { selectFullDate } from 'redux/selectors';
export const PeriodPaginator = ({
  periodType,
  changePeriod,
  checkDate,
  page,
}) => {
  const reduxDate = useSelector(selectFullDate);
  const currentDate = new Date(reduxDate);
  const dispatch = useDispatch();
  const [filterMonth, setFilterMonth] = useState(currentDate.getMonth());
  const [filterYear, setFilterYear] = useState(currentDate.getFullYear());

  const handlePrevMonth = () => {
    const prevMonthDate = new Date(currentDate);
    prevMonthDate.setMonth(prevMonthDate.getMonth() - 1);
    setFilterMonth(prevMonthDate.getMonth());
    setFilterYear(prevMonthDate.getFullYear());
    dispatch(setCurrentDay(prevMonthDate.getDate()));
    dispatch(setCurrentMonth(prevMonthDate.getMonth()));
    dispatch(setCurrentYear(prevMonthDate.getFullYear()));
  };

  const handleNextMonth = () => {
    const nextMonthDate = new Date(currentDate);
    nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);
    setFilterMonth(nextMonthDate.getMonth());
    setFilterYear(nextMonthDate.getFullYear());
    dispatch(setCurrentDay(nextMonthDate.getDate()));
    dispatch(setCurrentMonth(nextMonthDate.getMonth()));
    dispatch(setCurrentYear(nextMonthDate.getFullYear()));
  };

  const handlePrevDay = () => {
    const prevDayDate = new Date(currentDate);
    prevDayDate.setDate(prevDayDate.getDate() - 1);
    setFilterMonth(prevDayDate.getMonth());
    setFilterYear(prevDayDate.getFullYear());
    dispatch(setCurrentDay(prevDayDate.getDate()));
    dispatch(setCurrentMonth(prevDayDate.getMonth()));
    dispatch(setCurrentYear(prevDayDate.getFullYear()));
  };

  const handleNextDay = () => {
    const nextDayDate = new Date(currentDate);
    nextDayDate.setDate(nextDayDate.getDate() + 1);
    setFilterMonth(nextDayDate.getMonth());
    setFilterYear(nextDayDate.getFullYear());
    dispatch(setCurrentDay(nextDayDate.getDate()));
    dispatch(setCurrentMonth(nextDayDate.getMonth()));
    dispatch(setCurrentYear(nextDayDate.getFullYear()));
  };

  return (
    <PeriodPaginatorContainer>
      <DatePickerCustom
        page={page}
        filterMonth={filterMonth}
        setFilterMonth={setFilterMonth}
        filterYear={filterYear}
        setFilterYear={setFilterYear}
        handlePrevMonth={handlePrevMonth}
        handleNextMonth={handleNextMonth}
        changePeriod={changePeriod}
        periodType={periodType}
      />
      <PaginatorBtnWrapper>
        {periodType === 'month' ? (
          <PaginatorBtn
            direction={'left'}
            type="button"
            onClick={handlePrevMonth}
            disabled={
              new Date().getMonth() === filterMonth &&
              new Date().getFullYear() === filterYear
            }
            disabledStyle={
              new Date().getMonth() === filterMonth &&
              new Date().getFullYear() === filterYear
                ? true
                : false
            }
            aria-label="Paginator Button Left"
          >
            <ArrowLeft />
          </PaginatorBtn>
        ) : (
          <PaginatorBtn
            direction={'left'}
            type="button"
            onClick={handlePrevDay}
            disabled={checkDate(currentDate)}
            disabledStyle={checkDate(currentDate)}
            aria-label="Paginator Button Left"
          >
            <ArrowLeft />
          </PaginatorBtn>
        )}
        {periodType === 'month' ? (
          <PaginatorBtn
            direction={'right'}
            type="button"
            onClick={handleNextMonth}
            aria-label="Paginator Button Right"
          >
            <ArrowRight />
          </PaginatorBtn>
        ) : (
          <PaginatorBtn
            direction={'right'}
            type="button"
            onClick={handleNextDay}
            aria-label="Paginator Button Right"
          >
            <ArrowRight />
          </PaginatorBtn>
        )}
      </PaginatorBtnWrapper>
    </PeriodPaginatorContainer>
  );
};
