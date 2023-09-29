import React from 'react';
import { PeriodPaginator } from 'components/PeriodPaginator/PeriodPaginator';
import { PeriodTypeSelect } from 'components/PeriodTypeSelect/PeriodTypeSelect';
import { CalendarToolbarContainer } from './CalendarToolbar.styled';
export const CalendarToolbar = () => {
  return (
    <CalendarToolbarContainer>
      <PeriodPaginator />
      <PeriodTypeSelect />
    </CalendarToolbarContainer>
  );
};
