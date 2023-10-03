import { TasksColumnsList } from 'components/TasksColumnsList/TasksColumnsList';
import { useParams, useOutletContext } from 'react-router-dom';
import { useEffect } from 'react';
const ChoosedDay = () => {
  const { currentDay } = useParams();
  console.log(currentDay);
  const [startOfWeekDate, daysToAdd, today, setPeriodType] = useOutletContext();
  useEffect(() => {
    setPeriodType('day');
  }, [setPeriodType]);

  return (
    <>
      <TasksColumnsList />
    </>
  );
};

export default ChoosedDay;
