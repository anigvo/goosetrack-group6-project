import React from 'react';
import { PeriodBtnWrapper, PeriodBtn } from './PeriodTypeSelect.styled';

export const PeriodTypeSelect = () => {
  return (
    <PeriodBtnWrapper>
      <PeriodBtn direction={'left'} type="button" onClick={1}>
        Month
      </PeriodBtn>
      <PeriodBtn direction={'right'} type="button" onClick={1}>
        Day
      </PeriodBtn>
    </PeriodBtnWrapper>
  );
};
