import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { MonthCalendarHead } from '../../components/MonthCalendarHead/MonthCalendarHead';
import { CalendarTable } from '../../components/CalendarTable/CalendarTable';
import { ChoosedMonthContainer } from './ChoosedMonth.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getUserTasks } from 'redux/tasks/operations';
import { selectMonth } from 'redux/selectors';
const ChoosedMonth = () => {
  const [setPeriodType] = useOutletContext();
  const dispatch = useDispatch();
  const month = useSelector(selectMonth);

  useEffect(() => {
    setPeriodType('month');
    dispatch(getUserTasks('month'));
  }, [dispatch, setPeriodType, month]);

  return (
    <ChoosedMonthContainer>
      <MonthCalendarHead />
      <CalendarTable changePeriod={setPeriodType} />
    </ChoosedMonthContainer>
  );
};

export default ChoosedMonth;
