import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { MonthCalendarHead } from '../../components/MonthCalendarHead/MonthCalendarHead';
import { CalendarTable } from '../../components/CalendarTable/CalendarTable';
import { ChoosedMonthContainer } from './ChoosedMonth.styled';

const ChoosedMonth = () => {
  const [startOfWeekDate, daysToAdd, today, setPeriodType] = useOutletContext();
  useEffect(() => {
    setPeriodType('month');
  }, [setPeriodType]);
  
  return (
    <ChoosedMonthContainer>
      <MonthCalendarHead />
      <CalendarTable
        startOfWeekDate={startOfWeekDate}
        daysToAdd={daysToAdd}
        today={today}
      />
    </ChoosedMonthContainer>
  );
};

export default ChoosedMonth;
