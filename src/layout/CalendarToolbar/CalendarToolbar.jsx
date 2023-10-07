import React from 'react';
import { PeriodPaginator } from 'components/PeriodPaginator/PeriodPaginator';
import { PeriodTypeSelect } from 'components/PeriodTypeSelect/PeriodTypeSelect';
import { CalendarToolbarContainer } from './CalendarToolbar.styled';
export const CalendarToolbar = ({
  prevHandler,
  nextHandler,
  pickHandler,
  today,
  currentDateMonth,
  periodType,
  changePeriod,
  currentDateDay,
  checkDate,
}) => {
  return (
    <CalendarToolbarContainer>
      <PeriodPaginator
        prevHandler={prevHandler}
        nextHandler={nextHandler}
        pickHandler={pickHandler}
        today={today}
        periodType={periodType}
        changePeriod={changePeriod}
        currentDateDay={currentDateDay}
        currentDateMonth={currentDateMonth}
        checkDate={checkDate}
      />
      <PeriodTypeSelect
        currentDateMonth={currentDateMonth}
        currentDateDay={currentDateDay}
        changePeriod={changePeriod}
      />
    </CalendarToolbarContainer>
  );
};
