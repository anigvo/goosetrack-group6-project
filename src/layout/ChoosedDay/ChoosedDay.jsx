import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { TasksColumnsList } from 'components/TasksColumnsList/TasksColumnsList';
import { DayCalendarHead } from 'components/DayCalendarHead/DayCalendarHead';
import { ChoosedDayContainer } from './ChoosedDay.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getUserTasks } from 'redux/tasks/operations';
import { selectDay } from 'redux/selectors';

const ChoosedDay = () => {
  const [startOfWeekDate, daysToAdd, today, setPeriodType, pickHandler] =
    useOutletContext();
  const dispatch = useDispatch();
  const day = useSelector(selectDay);

  useEffect(() => {
    setPeriodType('day');
    dispatch(getUserTasks('day'))
  }, [setPeriodType, dispatch, day]);


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
