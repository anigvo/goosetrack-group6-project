// import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import { Suspense, useEffect } from 'react';
// // import { Outlet } from 'react-router-dom';
// // import { CalendarToolbar } from 'layout/CalendarToolbar/CalendarToolbar';
// // import {
// //   startOfMonth,
// //   startOfWeek,
// //   addMonths,
// //   isSunday,
// //   isMonday,
// //   isTuesday,
// //   endOfMonth,
// //   getDaysInMonth,
// //   addDays,
// // } from 'date-fns';
// import {
//   // BoxPeriodPaginator,
//   // ConteinerData,
//   BoxStatistics,
// } from './StatisticsPage.styled';
// // import { useSelector } from 'react-redux';
// // import { selectDay, selectMonth, selectYear } from 'redux/selectors';
// // import { Loader } from 'components/Loader/Loader';
// import StatisticsChart from 'components/StatisticsChart/StatisticsChart';
// // import LegendsStatistic from 'components/LegendsStatistic/LegendsStatistic';
// const StatisticsPage = () => {
//   //const StatisticsPage = ({ updatePageName }) => {
//   // const navigate = useNavigate();
  
//   return (
//     <>
//       <BoxStatistics>

//         <StatisticsChart />
//       </BoxStatistics>
//      </>
//   );
// };

// export default StatisticsPage;



import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Suspense, useEffect } from 'react';
// import { Outlet } from 'react-router-dom';
import { CalendarToolbar } from 'layout/CalendarToolbar/CalendarToolbar';
import StatisticsChart from 'components/StatisticsChart/StatisticsChart';
import {
  // startOfMonth,
  // startOfWeek,
  addMonths,
  // isSunday,
  // isMonday,
  // isTuesday,
  // endOfMonth,
  // getDaysInMonth,
  addDays,
} from 'date-fns';
import { useSelector } from 'react-redux';
import { selectDay, selectMonth, selectYear } from 'redux/selectors';
import { BoxPeriodPaginator, BoxStatistics, ConteinerData } from './StatisticsPage.styled';
import LegendsStatistic from 'components/LegendsStatistic/LegendsStatistic';
// import { Loader } from 'components/Loader/Loader';
const StatisticsPage = ({ updatePageName }) => {
  // const [selectedDate, setSelectedDate] = useState(currentDate);
  // const navigate = useNavigate();
  const month = useSelector(selectMonth);
  const day = useSelector(selectDay);
  const year = useSelector(selectYear);

  // const handleDateChange = newDate => {
  //   // Обробник для зміни дати в PeriodPaginator
  //   setSelectedDate(newDate);
  // };
  useEffect(() => {
    updatePageName('Calendar');
  }, [updatePageName]);

  const [periodType, setPeriodType] = useState('month');
  const [currentDateMonth] = useState(month);
  const [currentDateDay] = useState(day);
  const [currentDateYear] = useState(year);
  const [today, setToday] = useState(new Date(year, month, day));

  // useEffect(() => {
  //   if (periodType === 'month') {
  //     navigate(`/calendar/month/${month}`);
  //   } else if (periodType === 'day') {
  //     navigate(`/calendar/day/${day}`);
  //   }
  // }, [navigate, periodType, day, month]);

  const prevHandler = () => {
    if (periodType === 'month') {
      setToday(prev => addMonths(prev, -1));
    } else {
      setToday(prev => addDays(prev, -1));
    }
  };

  const nextHandler = () => {
    if (periodType === 'month') {
      setToday(prev => addMonths(prev, 1));
    } else {
      setToday(prev => addDays(prev, 1));
    }
  };

  const pickHandler = date => {
    setToday(date);
  };

  const checkDate = (data, checkType) => {
    const currentDate = new Date(currentDateYear, currentDateMonth, 1);
    if (checkType === 'button') {
      if (data > currentDate) {
        return false;
      }
      return true;
    } else {
      if (data >= currentDate) {
        return false;
      }
      return true;
    }
  };
  return (
    <BoxStatistics>
      <ConteinerData>
        <BoxPeriodPaginator>
          <CalendarToolbar
            prevHandler={prevHandler}
            nextHandler={nextHandler}
            pickHandler={pickHandler}
            today={today}
            currentDateMonth={currentDateMonth}
            currentDateDay={currentDateDay}
            periodType={periodType}
            changePeriod={setPeriodType}
            checkDate={checkDate}
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

// import React, { useEffect } from 'react';

// import StatisticsChart from 'components/StatisticsChart/StatisticsChart';

// import {
 
//   BoxStatistics,

// } from './StatisticsPage.styled';


// const StatisticsPage = ({ updatePageName }) => {
 
//   useEffect(() => {
//     updatePageName('Calendar');
//   }, [updatePageName]);

 
//   return (
//     <BoxStatistics>
     
//       <StatisticsChart
//       />
//     </BoxStatistics>
//   );
// };

// export default StatisticsPage;