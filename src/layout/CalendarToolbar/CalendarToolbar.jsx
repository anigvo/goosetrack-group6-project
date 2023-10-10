import React from 'react';
import { PeriodPaginator } from 'components/PeriodPaginator/PeriodPaginator';
import { PeriodTypeSelect } from 'components/PeriodTypeSelect/PeriodTypeSelect';
import { CalendarToolbarContainer } from './CalendarToolbar.styled';
export const CalendarToolbar = ({
  currentDateMonth,
  currentDateYear,
  periodType,
  changePeriod,
  checkDate,
  page,
}) => {
  return (
    <CalendarToolbarContainer>
      <PeriodPaginator
        currentDateMonth={currentDateMonth}
        currentDateYear={currentDateYear}
        periodType={periodType}
        changePeriod={changePeriod}
        checkDate={checkDate}
        page={page}
      />
      {page === 'calendar' ? (
        <PeriodTypeSelect changePeriod={changePeriod} />
      ) : (
        <></>
      )}
    </CalendarToolbarContainer>
  );
};
