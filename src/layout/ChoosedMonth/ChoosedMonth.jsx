import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { MonthCalendarHead } from '../../components/MonthCalendarHead/MonthCalendarHead';
import { CalendarTable } from '../../components/CalendarTable/CalendarTable';
import { ChoosedMonthContainer } from './ChoosedMonth.styled';

const ChoosedMonth = () => {
  const [setPeriodType] = useOutletContext();

  useEffect(() => {
    setPeriodType('month');
  }, [setPeriodType]);

  return (
    <ChoosedMonthContainer>
      <MonthCalendarHead />
      <CalendarTable changePeriod={setPeriodType} />
    </ChoosedMonthContainer>
  );
};

export default ChoosedMonth;
