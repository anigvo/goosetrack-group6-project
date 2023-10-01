import React from 'react';
import { PeriodBtnWrapper, PeriodBtn } from './PeriodTypeSelect.styled';

export const PeriodTypeSelect = () => {
  return (
    <PeriodBtnWrapper>
      <PeriodBtn direction={'left'} to="month/:currentDate">
        Month
      </PeriodBtn>
      <PeriodBtn direction={'right'} to="day/:currentDay">
        Day
      </PeriodBtn>
    </PeriodBtnWrapper>
  );
};
