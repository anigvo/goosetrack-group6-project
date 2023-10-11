import React from 'react';
import { PeriodPaginator } from 'components/PeriodPaginator/PeriodPaginator';
import { PeriodTypeSelect } from 'components/PeriodTypeSelect/PeriodTypeSelect';
import { CalendarToolbarContainer } from './CalendarToolbar.styled';
export const CalendarToolbar = ({
  periodType,
  changePeriod,
  checkDate,
  page,
}) => {
  return (
    <CalendarToolbarContainer page={page}>
      <PeriodPaginator
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
