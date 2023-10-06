import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { TasksColumnsList } from 'components/TasksColumnsList/TasksColumnsList';
import { DayCalendarHead } from 'components/DayCalendarHead/DayCalendarHead';
import { ChoosedDayContainer } from './ChoosedDay.styled';

const ChoosedDay = () => {
  const [startOfWeekDate, daysToAdd, today, setPeriodType, pickHandler] =
    useOutletContext();
  useEffect(() => {
    setPeriodType('day');
  }, [setPeriodType]);

  return (
    <ChoosedDayContainer>
      <DayCalendarHead
        startOfWeekDate={startOfWeekDate}
        daysToAdd={daysToAdd}
        today={today}
        changePeriod={setPeriodType}
        pickHandler={pickHandler}
      />
      <TasksColumnsList />
    </ChoosedDayContainer>
  );
};

export default ChoosedDay;
