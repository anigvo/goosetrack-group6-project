import React, { useState } from 'react';
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
} from './PeriodPaginator.styled';

export const PeriodPaginator = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [filterMonth, setFilterMonth] = useState(startDate.getMonth());
    const currentMonth = new Date().getMonth();

  const handleDateChange = date => {
    setStartDate(date);
  };

  const filterDate = date => {
    const selectedMonth = filterMonth;
    const month = date.getMonth();
    return month === selectedMonth;
  };

  const handleMonthChange = date => {
    const selectedMonth = date.getMonth();
    setFilterMonth(selectedMonth);
  };
const handlePrevMonth = () => {
  const prevMonthDate = new Date(startDate);
  prevMonthDate.setMonth(prevMonthDate.getMonth() - 1);
  setStartDate(prevMonthDate);
  setFilterMonth(prevMonthDate.getMonth());
};

const handleNextMonth = () => {
  const nextMonthDate = new Date(startDate);
  nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);
  setStartDate(nextMonthDate);
  setFilterMonth(nextMonthDate.getMonth()); 
};

  
  const customHeader = ({ date, decreaseMonth, increaseMonth }) => {
    const currentMonth = new Date().getMonth();
    const selectedMonth = date.getMonth();

    return (
      <div className="date-picker-header">
        <button
          className="date-picker-navigation"
          onClick={decreaseMonth}
          disabled={selectedMonth === currentMonth}
        >
          <ArrowLeft />
        </button>
        <div className="date-picker-current-month">
          {date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        </div>
        <button className="date-picker-navigation" onClick={increaseMonth}>
          <ArrowRight />
        </button>
      </div>
    );
  };
  
  
  
  return (
    <PeriodPaginatorContainer>
      <DatePicker
        selected={startDate}
        onChange={handleDateChange}
        onMonthChange={handleMonthChange}
        customInput={
          <CalendarBtn type="button">
            {startDate.toLocaleDateString('en-US', {
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
          disabled={filterMonth === currentMonth}
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
