import React from 'react';
import { PeriodBtnWrapper, PeriodBtn } from './PeriodTypeSelect.styled';

export const PeriodTypeSelect = ({ currentDateMonth }) => {
  const route = `month/${currentDateMonth}`;
  return (
    <PeriodBtnWrapper>
      <PeriodBtn direction={'left'} to={route}>
        Month
      </PeriodBtn>
      <PeriodBtn direction={'right'} to="day/:currentDay">
        Day
      </PeriodBtn>
    </PeriodBtnWrapper>
  );
};
