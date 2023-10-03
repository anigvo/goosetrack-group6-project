import React from 'react';
import { MonthCalendarHead } from '../../components/MonthCalendarHead/MonthCalendarHead';
import { CalendarTable } from '../../components/CalendarTable/CalendarTable';
import { ChoosedMonthContainer} from './ChoosedMonth.styled'

const ChoosedMonth = () => {

  return (
    <ChoosedMonthContainer>
      <MonthCalendarHead />
      <CalendarTable />
    </ChoosedMonthContainer>
  );
};

export default ChoosedMonth;