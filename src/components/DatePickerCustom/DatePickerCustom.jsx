import React, { useState, useEffect } from 'react';
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
registerLocale('en-GB', enGB);

export const DatePickerCustom = ({
  selectedDate,
  setSelectedDate,
  filterMonth,
  setFilterMonth,
  filterYear,
  setFilterYear,
  handlePrevMonth,
  handleNextMonth,
  filterDay,
  setFilterDay,
  periodType,
  handlePrevDay,
  handleNextDay,
}) => {
  const [selectedHeaderDate, setSelectedHeaderDate] = useState(selectedDate);
  console.log(periodType);
  console.log(typeof periodType);
  useEffect(() => {
    setSelectedHeaderDate(selectedDate);
  }, [selectedDate]);

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const filterDate = date => {
    const selectedMonth = filterMonth;
    const selectedYear = filterYear;
    const month = date.getMonth();
    const year = date.getFullYear();
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
  const handleDayChange = date => {
    const selectedDay = date.getDate();
    if (selectedDay !== filterDay) {
      setFilterDay(selectedDay);
      setSelectedHeaderDate(date);
    }
  };
  const customHeader = ({ date, decreaseMonth, increaseMonth }) => {
    const currentMonth = new Date().getMonth();
    const selectedMonth = date.getMonth();
    const currentYear = new Date().getFullYear();
    const selectedYear = date.getFullYear();
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const selectedDay = date.getDate();

    const decrease = () => {
      decreaseMonth();
      handlePrevMonth();
    };

    const increase = () => {
      increaseMonth();
      handleNextMonth();
    };

    const decreaseDay = () => {
      handlePrevDay();
    };

    const increaseDay = () => {
      handleNextDay();
    };
    if (periodType === 'month') {
      return (
        <DatePickerCustomHeader>
          <DatePickerButton
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
            {selectedHeaderDate.toLocaleDateString('en-GB', {
              month: 'long',
              year: 'numeric',
            })}
          </DatePickerCustomHeaderTitle>
          <DatePickerButton onClick={increase}>
            <ArrowRight />
          </DatePickerButton>
        </DatePickerCustomHeader>
      );
    } else {
      return (
        <DatePickerCustomHeader>
          <DatePickerButton
            onClick={decreaseDay}
            disabled={selectedDay === currentDay}
            disabledStyle={selectedDay === currentDay ? true : false}
          >
            <ArrowLeft />
          </DatePickerButton>

          <DatePickerCustomHeaderTitle>
            {selectedHeaderDate.toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            })}
          </DatePickerCustomHeaderTitle>
          <DatePickerButton onClick={increaseDay}>
            <ArrowRight />
          </DatePickerButton>
        </DatePickerCustomHeader>
      );
    }
  };
  if (periodType === 'month') {
    return (
      <DatePicker
        selected={selectedHeaderDate}
        onChange={handleDateChange}
        onMonthChange={handleMonthChange}
        locale="en-GB"
        customInput={
          <CalendarBtn type="button">
            {selectedHeaderDate.toLocaleDateString('en-GB', {
              month: 'long',
              year: 'numeric',
            })}
          </CalendarBtn>
        }
        filterDate={filterDate}
        renderCustomHeader={customHeader}
      />
    );
  } else {
    return (
      <DatePicker
        selected={selectedHeaderDate}
        onChange={handleDateChange}
        onDayChange={handleDayChange}
        locale="en-GB"
        customInput={
          <CalendarBtn type="button">
            {selectedHeaderDate.toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            })}
          </CalendarBtn>
        }
        filterDate={filterDate}
        renderCustomHeader={customHeader}
      />
    );
  }
};
