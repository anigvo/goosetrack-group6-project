import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../utils/datePicker.css';
import { ReactComponent as ArrowLeft } from '../../assets/icons/chevron-left.svg';
import { ReactComponent as ArrowRight } from '../../assets/icons/chevron-right.svg';
import {
  CalendarBtn,
  DatePickerCustomHeader,
  DatePickerCustomHeaderTitle,
  DatePickerButton,
} from './DatePickerCustom.styled';
import { registerLocale } from 'react-datepicker';
import enGB from 'date-fns/locale/en-GB';
import { useNavigate } from 'react-router-dom';
import {
  setCurrentDay,
  setCurrentMonth,
  setCurrentYear,
} from 'redux/tasks/tasksSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectFullDate } from 'redux/selectors';
registerLocale('en-GB', enGB);

export const DatePickerCustom = ({
  filterMonth,
  setFilterMonth,
  filterYear,
  setFilterYear,
  handlePrevMonth,
  handleNextMonth,
  changePeriod,
  periodType,
  page,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const reduxDate = useSelector(selectFullDate);
  const currentDate = new Date(reduxDate);

  const filterDate = date => {
    const month = date.getMonth();
    const year = date.getFullYear();
    return month === filterMonth && year === filterYear;
  };

  const handleMonthChange = date => {
    const selectedMonth = date.getMonth();
    const selectedYear = date.getFullYear();
    if (selectedMonth !== filterMonth || selectedYear !== filterYear) {
      setFilterMonth(selectedMonth);
      setFilterYear(selectedYear);
      dispatch(setCurrentDay(date.getDate()));
      dispatch(setCurrentMonth(date.getMonth()));
      dispatch(setCurrentYear(date.getFullYear()));
    }
  };

  const handleDateClick = date => {
    if (page === 'calendar') {
      const day = date.getDate();
      changePeriod('day');
      navigate(`/calendar/day/${day}`);
    }

    dispatch(setCurrentDay(date.getDate()));
    dispatch(setCurrentMonth(date.getMonth()));
    dispatch(setCurrentYear(date.getFullYear()));
  };

  const customHeader = ({ date, decreaseMonth, increaseMonth }) => {
    const currentMonth = new Date().getMonth();
    const selectedMonth = date.getMonth();
    const currentYear = new Date().getFullYear();
    const selectedYear = date.getFullYear();
    const decrease = () => {
      decreaseMonth();
      handlePrevMonth();
    };

    const increase = () => {
      increaseMonth();
      handleNextMonth();
    };
    return (
      <DatePickerCustomHeader>
        <DatePickerButton
          aria-label='decrease period'
          onClick={decrease}
          disabled={
            selectedMonth === currentMonth && selectedYear === currentYear
          }
          disabledStyle={
            selectedMonth === currentMonth && selectedYear === currentYear
              ? true
              : false
          }
        >
          <ArrowLeft />
        </DatePickerButton>

        <DatePickerCustomHeaderTitle>
          {periodType === 'month'
            ? currentDate.toLocaleDateString('en-GB', {
                month: 'long',
                year: 'numeric',
              })
            : currentDate.toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })}
        </DatePickerCustomHeaderTitle>
        <DatePickerButton onClick={increase} aria-label='increase period'>
          <ArrowRight />
        </DatePickerButton>
      </DatePickerCustomHeader>
    );
  };

  return (
    <DatePicker
      selected={currentDate}
      onMonthChange={handleMonthChange}
      onSelect={handleDateClick}
      closeOnScroll={true}
      locale="en-GB"
      filterDate={filterDate}
      renderCustomHeader={customHeader}
      customInput={
        <CalendarBtn type="button" aria-label='calendar button'>
          {periodType === 'month'
            ? currentDate.toLocaleDateString('en-GB', {
                month: 'long',
                year: 'numeric',
              })
            : currentDate.toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })}
        </CalendarBtn>
      }
    />
  );
};
