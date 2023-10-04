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
  changePeriod,
  pickHandler,
}) => {
  const navigate = useNavigate();

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
      setSelectedDate(date);
    }
  };

  const handleDateClick = date => {
    handleDateChange(date);
    const pickDate = date;
    const day = pickDate.getDate();
    navigate(`/calendar/day/${day}`);
    setSelectedDate(pickDate);
    changePeriod('day');
    pickHandler(pickDate);
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
          {selectedDate.toLocaleDateString('en-GB', {
            month: 'long',
            year: 'numeric',
          })}
        </DatePickerCustomHeaderTitle>
        <DatePickerButton onClick={increase}>
          <ArrowRight />
        </DatePickerButton>
      </DatePickerCustomHeader>
    );
  };

  return (
    <DatePicker
      selected={selectedDate}
      onChange={handleDateChange}
      onMonthChange={handleMonthChange}
      onSelect={handleDateClick}
      locale="en-GB"
      customInput={
        <CalendarBtn type="button">
          {selectedDate.toLocaleDateString('en-GB', {
            month: 'long',
            year: 'numeric',
          })}
        </CalendarBtn>
      }
      filterDate={filterDate}
      renderCustomHeader={customHeader}
    />
  );
};
