import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { TasksColumnsList } from 'components/TasksColumnsList/TasksColumnsList';
import { DayCalendarHead } from 'components/DayCalendarHead/DayCalendarHead';
import { ChoosedDayContainer } from './ChoosedDay.styled';

const ChoosedDay = () => {
  const [setPeriodType, checkDate] =
    useOutletContext();

  useEffect(() => {
    setPeriodType('day');
  }, [setPeriodType]);

  return (
    <ChoosedDayContainer>
      <DayCalendarHead
        changePeriod={setPeriodType}
        checkDate={checkDate}
      />
      <TasksColumnsList />
    </ChoosedDayContainer>
  );
};

export default ChoosedDay;
