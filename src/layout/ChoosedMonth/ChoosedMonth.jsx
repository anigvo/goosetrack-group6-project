import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { MonthCalendarHead } from '../../components/MonthCalendarHead/MonthCalendarHead';
import { CalendarTable } from '../../components/CalendarTable/CalendarTable';
import { ChoosedMonthContainer } from './ChoosedMonth.styled';
import { useDispatch } from 'react-redux';
import { getUserTasks } from 'redux/tasks/operations';
const ChoosedMonth = () => {
  const [setPeriodType] = useOutletContext();
  const dispatch = useDispatch();
  useEffect(() => {
    setPeriodType('month');
    dispatch(getUserTasks('month'));
  }, [dispatch, setPeriodType]);

  return (
    <ChoosedMonthContainer>
      <MonthCalendarHead />
      <CalendarTable changePeriod={setPeriodType} />
    </ChoosedMonthContainer>
  );
};

export default ChoosedMonth;
