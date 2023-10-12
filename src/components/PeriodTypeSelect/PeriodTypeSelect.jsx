import React from 'react';
import { PeriodBtnWrapper, PeriodBtn } from './PeriodTypeSelect.styled';
import { useSelector } from 'react-redux';
import { selectDay, selectMonth } from 'redux/selectors';

export const PeriodTypeSelect = ({ changePeriod }) => {
  const month = useSelector(selectMonth);
  const day = useSelector(selectDay);

  return (
    <PeriodBtnWrapper>
      <PeriodBtn aria-label='select period month' direction={'left'} to={`month/${month}`} onClick={() => changePeriod('month')}>
        Month
      </PeriodBtn>
      <PeriodBtn aria-label='select period day' direction={'right'} to={`day/${day}`} onClick={() => changePeriod('day')}>
        Day
      </PeriodBtn>
    </PeriodBtnWrapper>
  );
};
