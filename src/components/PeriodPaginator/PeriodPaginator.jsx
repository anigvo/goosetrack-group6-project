import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../utils/datePicker.css';
import { ReactComponent as ArrowLeft } from '../../assets/icons/chevron-left.svg';
import { ReactComponent as ArrowRight } from '../../assets/icons/chevron-right.svg';
import {
  PaginatorBtn,
  PeriodPaginatorContainer,
  CalendarBtn,
  PaginatorBtnWrapper,
  DatePickerCustomHeader,
  DatePickerCustomHeaderTitle,
  DatePickerButton,
} from './PeriodPaginator.styled';

export const PeriodPaginator = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [filterMonth, setFilterMonth] = useState(selectedDate.getMonth());
  const [filterYear, setFilterYear] = useState(selectedDate.getFullYear());
  const [selectedHeaderDate, setSelectedHeaderDate] = useState(selectedDate);

  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const filterDate = date => {
    const selectedMonth = filterMonth;
    const selectedYear = filterYear;
    const year = date.getFullYear();
    const month = date.getMonth();
    return month === selectedMonth && year === selectedYear;
  };

  const handleMonthChange = date => {
    const selectedMonth = date.getMonth();
    const selectedYear = date.getFullYear();
    if (selectedMonth !== filterMonth || selectedYear !== filterYear) {
      setFilterMonth(selectedMonth);
      setFilterYear(selectedYear);
      setSelectedHeaderDate(date);
    }
  };

  useEffect(() => {
    setSelectedHeaderDate(selectedDate);
  }, [selectedDate]);

  const handlePrevMonth = () => {
    const prevMonthDate = new Date(selectedDate);
    prevMonthDate.setMonth(prevMonthDate.getMonth() - 1);
    setSelectedDate(prevMonthDate);
    setFilterMonth(prevMonthDate.getMonth());
    setFilterYear(prevMonthDate.getFullYear());
  };

  const handleNextMonth = () => {
    const nextMonthDate = new Date(selectedDate);
    nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);
    setSelectedDate(nextMonthDate);
    setFilterMonth(nextMonthDate.getMonth());
    setFilterYear(nextMonthDate.getFullYear());
  };

  const customHeader = ({ date, decreaseMonth, increaseMonth }) => {
    const currentMonth = new Date().getMonth();
    const selectedMonth = date.getMonth();
    const currentYear = new Date().getFullYear();
    const selectedYear = date.getFullYear();

    return (
      <DatePickerCustomHeader>
        <DatePickerButton
          onClick={decreaseMonth}
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
          {selectedHeaderDate.toLocaleDateString('en-US', {
            month: 'long',
            year: 'numeric',
          })}
        </DatePickerCustomHeaderTitle>
        <DatePickerButton onClick={increaseMonth}>
          <ArrowRight />
        </DatePickerButton>
      </DatePickerCustomHeader>
    );
  };

  return (
    <PeriodPaginatorContainer>
      <DatePicker
        selected={selectedHeaderDate}
        onChange={handleDateChange}
        onMonthChange={handleMonthChange}
        customInput={
          <CalendarBtn type="button">
            {selectedHeaderDate.toLocaleDateString('en-US', {
              month: 'long',
              year: 'numeric',
            })}
          </CalendarBtn>
        }
        filterDate={filterDate}
        renderCustomHeader={customHeader}
      />

      <PaginatorBtnWrapper>
        <PaginatorBtn
          direction={'left'}
          type="button"
          onClick={handlePrevMonth}
          disabled={filterMonth === currentMonth && filterYear === currentYear}
          disabledStyle={
            filterMonth === currentMonth && filterYear === currentYear
              ? true
              : false
          }
        >
          <ArrowLeft />
        </PaginatorBtn>
        <PaginatorBtn
          direction={'right'}
          type="button"
          onClick={handleNextMonth}
        >
          <ArrowRight />
        </PaginatorBtn>
      </PaginatorBtnWrapper>
    </PeriodPaginatorContainer>
  );
};
