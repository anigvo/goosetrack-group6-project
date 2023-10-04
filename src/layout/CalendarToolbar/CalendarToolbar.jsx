import React from 'react';
import { PeriodPaginator } from 'components/PeriodPaginator/PeriodPaginator';
import { PeriodTypeSelect } from 'components/PeriodTypeSelect/PeriodTypeSelect';
import { CalendarToolbarContainer } from './CalendarToolbar.styled';
export const CalendarToolbar = ({
  prevHandler,
  nextHandler,
  today,
  currentDateMonth,
  periodType,
  changePeriod
}) => {

  return (
    <CalendarToolbarContainer>
      <PeriodPaginator
        prevHandler={prevHandler}
        nextHandler={nextHandler}
        today={today}
        periodType={periodType}
      />
      <PeriodTypeSelect currentDateMonth={currentDateMonth} changePeriod={changePeriod}/>
    </CalendarToolbarContainer>
  );
};
