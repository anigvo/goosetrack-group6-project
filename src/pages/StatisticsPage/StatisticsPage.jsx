import React, { useEffect, useState } from 'react';
import { CalendarToolbar } from 'layout/CalendarToolbar/CalendarToolbar';
import StatisticsChart from 'components/StatisticsChart/StatisticsChart';
import { useSelector } from 'react-redux';
import { selectMonth, selectYear } from 'redux/selectors';
import {
  BoxPeriodPaginator,
  BoxStatistics,
  ConteinerData,
} from './StatisticsPage.styled';
import LegendsStatistic from 'components/LegendsStatistic/LegendsStatistic';
// import { Loader } from 'components/Loader/Loader';
const StatisticsPage = ({ updatePageName }) => {
  const month = useSelector(selectMonth);
  const year = useSelector(selectYear);

  useEffect(() => {
    updatePageName('Statistics');
  }, [updatePageName]);

  const [periodType, setPeriodType] = useState('day');
  const [currentDateMonth] = useState(month);
  const [currentDateYear] = useState(year);

  const checkDate = data => {
    const currentDate = new Date(currentDateYear, currentDateMonth, 2);
    if (data > currentDate) {
      return false;
    }
    return true;
  };

  return (
    <BoxStatistics>
      <ConteinerData>
        <BoxPeriodPaginator>
          <CalendarToolbar
            currentDateMonth={currentDateMonth}
            currentDateYear={currentDateYear}
            periodType={periodType}
            changePeriod={setPeriodType}
            checkDate={checkDate}
            page={'statistics'}
          />
        </BoxPeriodPaginator>
        <LegendsStatistic />
      </ConteinerData>
      {/* <Suspense fallback={<Loader type={'suspense'} />}>
        <Outlet
          context={[
            startOfWeekDate,
            daysToAdd,
            today,
            setPeriodType,
            pickHandler,
            checkDate,
          ]}
        />
      </Suspense> */}
      <StatisticsChart
      // todoByDay={todoByDay}
      // todoByMonth={todoByMonth}
      // inprogressByDay={inprogressByDay}
      // inprogressByMonth={inprogressByMonth}
      // doneByDay={doneByDay}
      // doneByMonth={doneByMonth}
      />
    </BoxStatistics>
  );
};

export default StatisticsPage;
