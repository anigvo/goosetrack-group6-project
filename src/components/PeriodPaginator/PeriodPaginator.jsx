import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../utils/datePicker.css'
import { ReactComponent as ArrowLeft } from '../../assets/icons/chevron-left.svg';
import { ReactComponent as ArrowRight } from '../../assets/icons/chevron-right.svg';
import {
  PaginatorBtn,
  PeriodPaginatorContainer,
  CalendarBtn,
  PaginatorBtnWrapper,
} from './PeriodPaginator.styled';



export const PeriodPaginator = () => {
  const [startDate, setStartDate] = useState(new Date());
console.log(startDate);
  return (
    <PeriodPaginatorContainer>
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        customInput={<CalendarBtn type="button">MARCH 2023</CalendarBtn>}
      />

      <PaginatorBtnWrapper>
        <PaginatorBtn direction={'left'} type="button" onClick={1}>
          <ArrowLeft />
        </PaginatorBtn>
        <PaginatorBtn direction={'right'} type="button" onClick={1}>
          <ArrowRight />
        </PaginatorBtn>
      </PaginatorBtnWrapper>
    </PeriodPaginatorContainer>
  );
};
