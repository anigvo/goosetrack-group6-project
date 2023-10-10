// import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

import 'react-datepicker/dist/react-datepicker.css';
import { BoxBar } from './StatisticsChart.styled';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectMonth,
  selectDay,
  selectTasks,
  // selectCategoryTasks,
  selectYear,
} from 'redux/selectors';
import { getUserTasks } from 'redux/tasks/operations';
import { useEffect } from 'react';

Chart.register(...registerables);

const StatisticsChart = () => {
  const month = useSelector(selectMonth);
  const day = useSelector(selectDay);
  const year = useSelector(selectYear);
  const tasks = useSelector(selectTasks);

  // Використовуємо селектори для отримання необхідних даних

  // const categoryTasks = useSelector(selectCategoryTasks);

  const colorDay = '#FFD2DD';
  const colorMonth = '#3E85F3';

  const gradientMonth = context => {
    const chart = context.chart;
    const { ctx, chartArea } = chart;
    if (!chartArea) {
      return null;
    }

    // Створення градієнта замість кольорів
    const gradient = ctx.createLinearGradient(
      0,
      chartArea.bottom,
      0,
      chartArea.top
    );
    gradient.addColorStop(0, colorMonth);
    gradient.addColorStop(1, 'rgba(62, 133, 243, 0.00)');

    return gradient;
  };

  const gradientDay = context => {
    const chart = context.chart;
    const { ctx, chartArea } = chart;
    if (!chartArea) {
      return null;
    }

    // Створення градієнта замість кольорів
    const gradient = ctx.createLinearGradient(
      0,
      chartArea.bottom,
      0,
      chartArea.top
    );
    gradient.addColorStop(0, colorDay);
    gradient.addColorStop(0.9687, 'rgba(255, 210, 221, 0.00)');

    return gradient;
  };

  const todoByDay = tasks.filter(
    task =>
      task.category === 'to-do' &&
      task.date.startsWith(`${year}-${month + 1}-${day}`)
  ).length;
  const todoByMonth = tasks.filter(
    task =>
      task.category === 'to-do' && task.date.startsWith(`${year}-${month + 1}`)
  ).length;
  const inprogressByDay = tasks.filter(
    task =>
      task.category === 'in-progress' &&
      task.date.startsWith(`${year}-${month + 1}-${day}`)
  ).length;
  const inprogressByMonth = tasks.filter(
    task =>
      task.category === 'in-progress' &&
      task.date.startsWith(`${year}-${month + 1}`)
  ).length;
  const doneByDay = tasks.filter(
    task =>
      task.category === 'done' &&
      task.date.startsWith(`${year}-${month + 1}-${day}`)
  ).length;
  const doneByMonth = tasks.filter(
    task =>
      task.category === 'done' && task.date.startsWith(`${year}-${month + 1}`)
  ).length;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getUserTasks({ period: 'month', date: `${year}-${month + 1}-${day}` })
    );
  }, [dispatch, year, month, day]);

  const tasksByDay = [todoByDay, inprogressByDay, doneByDay];
  const tasksByMonth = [todoByMonth, inprogressByMonth, doneByMonth];

  const data = {
    labels: ['To Do', 'In Progress', 'Done'],
    datasets: [
      {
        label: 'By Day',
        data: tasksByDay.map(
          task =>
            (task / tasksByDay.reduce((sum, value) => sum + value, 0)) * 100
        ),
        display: true,
        backgroundColor: gradientDay,
        borderSkipped: false,
        maxBarThickness: 27,
        borderRadius: {
          bottomLeft: 10,
          bottomRight: 10,
        },
      },
      {
        label: 'By Month',
        data: tasksByMonth.map(
          task =>
            (task / tasksByMonth.reduce((sum, value) => sum + value, 0)) * 100
        ),
        display: true,
        backgroundColor: gradientMonth,
        borderSkipped: false,
        maxBarThickness: 27,
        borderRadius: {
          bottomLeft: 10,
          bottomRight: 10,
        },
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    categoryPercentage: 0.3,
    barPercentage: 0.9,
    scales: {
      x: {
        ticks: {
          // This more specific font property overrides the global property
          font: {
            size: 14,
          },
        },
        barPercentage: 0.1,
        drawBorder: false,

        grid: {
          display: false,
          offset: true,
        },
        border: {
          display: false,
        },
      },
      y: {
        title: {
          display: true,
          text: 'Tasks',
          position: 'top',
        },
        offset: true,

        grid: {
          color: 'rgba(227, 243, 255, 1)',
          border: {
            display: false,
          },
          offsetGridLines: true,
        },
        border: {
          display: false,
        },
        beginAtZero: true,
        max: 100,
        ticks: {
          max: 100,
          min: 0,
          stepSize: 20,
          font: {
            size: 14,
          },
          // callback: function (value) {
          //   return value + '%'; // Додаємо відсотковий підпис до значень
          // },
        },
      },
    },
    layout: {
      padding: {
        bottom: 20,
      },
    },

    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <>
      <BoxBar>
        <Bar data={data} options={options} />
      </BoxBar>
    </>
  );
};

export default StatisticsChart;

// ___________________________________________________________________
// import React, { useState } from 'react';
// import { Bar } from 'react-chartjs-2';
// import { Chart, registerables } from 'chart.js';

// import 'react-datepicker/dist/react-datepicker.css';
// import { BoxBar, ConteinerData, BoxPeriodPaginator } from './StatisticsChart.styled';
// import { CalendarToolbar } from 'layout/CalendarToolbar/CalendarToolbar';
// import {
//   addMonths,
//   addDays,
//   /*startOfMonth,
//   startOfWeek,
//   isSunday,
//   isMonday,
//   isTuesday,
//   endOfMonth,
//   getDaysInMonth,*/
// } from 'date-fns';

// import { useSelector, useDispatch } from 'react-redux';
// import { setCurrentMonth, setCurrentYear/*, setCurrentDay*/ } from '../../redux/tasks/tasksSlice';

// import {
//   selectMonth,
//   selectDay,
//   selectYear,
//   selectTasks,
// } from 'redux/selectors';

// Chart.register(...registerables);

// const StatisticsChart = () => {
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const dispatch = useDispatch();
//   // const [selectedDate, setSelectedDate] = useState(new Date(today));
//   const [filterMonth, setFilterMonth] = useState(selectedDate.getMonth());
//   const [filterYear, setFilterYear] = useState(selectedDate.getFullYear());
//   // const currentDay = currentDateDay;
//   // const currentMonth = currentDateMonth;
//   // const currentYear = new Date().getFullYear();

//   // useEffect(() => {
//   //   setSelectedDate(today);
//   // }, [today]);

//   const month = useSelector(selectMonth);
//   const day = useSelector(selectDay);
//   const year = useSelector(selectYear);
//   const tasks = useSelector(selectTasks);

//   const [periodType, setPeriodType] = useState('month');
//   const [currentDateMonth] = useState(month);
//   const [currentDateDay] = useState(day);
//   const [currentDateYear] = useState(year);
//   const [today, setToday] = useState(new Date(year, month, day));

// //   const chooseDay = () => {
// //   let startOfMonthDate = startOfMonth(today);
// //   let endOfMonthDate = endOfMonth(today);
// //   let startOfWeekDate = startOfWeek(startOfMonthDate, { weekStartsOn: 1 });
// //   let daysToAdd = 35;
// //   if (getDaysInMonth(today) === 28 || getDaysInMonth(today) === 29) {
// //     if (isMonday(startOfMonthDate)) {
// //       return {
// //         startOfWeekDate,
// //         daysToAdd: 28,
// //       };
// //     } else if (getDaysInMonth(today) === 29) {
// //       return {
// //         startOfWeekDate,
// //         daysToAdd: 35,
// //       };
// //     } else {
// //       return {
// //         startOfWeekDate,
// //         daysToAdd: 35,
// //       };
// //     }
// //   } else if (isTuesday(endOfMonthDate) && isMonday(startOfMonthDate)) {
// //     daysToAdd = 35;
// //   } else if (
// //     isSunday(startOfMonthDate) ||
// //     isMonday(endOfMonthDate) ||
// //     isTuesday(endOfMonthDate)
// //   ) {
// //     daysToAdd = 42;
// //   }

// //   return {
// //     startOfWeekDate,
// //     daysToAdd,
// //   };
// // };

//   // const { startOfWeekDate, daysToAdd } = chooseDay();

//   const prevHandler = () => {
//   if (periodType === 'month') {
//     setToday(prev => addMonths(prev, -1));
//   } else {
//     setToday(prev => addDays(prev, -1));
//   }
// };

// const nextHandler = () => {
//   if (periodType === 'month') {
//     setToday(prev => addMonths(prev, 1));
//   } else {
//     setToday(prev => addDays(prev, 1));
//   }
// };

// const pickHandler = date => {
//   setToday(date);
// };

// const checkDate = (data, checkType) => {
//   const currentDate = new Date(currentDateYear, currentDateMonth, 1);
//   if (checkType === 'button') {
//     if (data > currentDate) {
//       return false;
//     }
//     return true;
//   } else {
//     if (data >= currentDate) {
//       return false;
//     }
//     return true;
//   }
// };

//   const todoByDay = tasks.filter(
//     task => task.status === 'todo' && task.date === `${year}-${month + 1}-${day}`
//   ).length;
//   const todoByMonth = tasks.filter(
//     task => task.status === 'todo' && task.date.startsWith(`${year}-${month + 1}`)
//   ).length;
//   const inprogressByDay = tasks.filter(
//     task => task.status === 'inProgress' && task.date === `${year}-${month + 1}-${day}`
//   ).length;
//   const inprogressByMonth = tasks.filter(
//     task => task.status === 'inProgress' && task.date.startsWith(`${year}-${month + 1}`)
//   ).length;
//   const doneByDay = tasks.filter(
//     task => task.status === 'done' && task.date === `${year}-${month + 1}-${day}`
//   ).length;
//   const doneByMonth = tasks.filter(
//     task => task.status === 'done' && task.date.startsWith(`${year}-${month + 1}`)
//   ).length;

//   const handlePrevMonth = () => {
//     const prevMonthDate = new Date(selectedDate);
//     prevMonthDate.setMonth(prevMonthDate.getMonth() - 1);
//     setSelectedDate(prevMonthDate);
//     setFilterMonth(prevMonthDate.getMonth());
//     setFilterYear(prevMonthDate.getFullYear());
//     dispatch(setCurrentMonth(prevMonthDate.getMonth()));
//     dispatch(setCurrentYear(prevMonthDate.getFullYear()));
//     prevHandler();
//   };

//   const handleNextMonth = () => {
//     const nextMonthDate = new Date(selectedDate);
//     nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);
//     setSelectedDate(nextMonthDate);
//     setFilterMonth(nextMonthDate.getMonth());
//     setFilterYear(nextMonthDate.getFullYear());
//     dispatch(setCurrentMonth(nextMonthDate.getMonth()));
//     dispatch(setCurrentYear(nextMonthDate.getFullYear()));
//     nextHandler();
//   };

//   // const handlePrevDay = () => {
//   //   const prevDayDate = new Date(selectedDate);
//   //   prevDayDate.setDate(prevDayDate.getDate() - 1);
//   //   setSelectedDate(prevDayDate);
//   //   setFilterMonth(prevDayDate.getMonth());
//   //   dispatch(setCurrentDay(prevDayDate.getDate()));
//   //   dispatch(setCurrentMonth(prevDayDate.getMonth()));
//   //   dispatch(setCurrentYear(prevDayDate.getFullYear()));
//   //   checkDate(prevDayDate);
//   //   prevHandler();
//   // };

//   // const handleNextDay = () => {
//   //   const nextDayDate = new Date(selectedDate);
//   //   nextDayDate.setDate(nextDayDate.getDate() + 1);
//   //   setSelectedDate(nextDayDate);
//   //   setFilterMonth(nextDayDate.getMonth());
//   //   dispatch(setCurrentDay(nextDayDate.getDate()));
//   //   dispatch(setCurrentMonth(nextDayDate.getMonth()));
//   //   dispatch(setCurrentYear(nextDayDate.getFullYear()));
//   //   checkDate(nextDayDate);
//   //   nextHandler();
//   // };

//   const colorDay = '#FFD2DD';
//   const colorMonth = '#3E85F3';

//   const allTasksByDay = todoByDay + inprogressByDay + doneByDay;
//   const allTasksByMonth = todoByMonth + inprogressByMonth + doneByMonth;

//   const todoByDayPercent = (todoByDay / allTasksByDay) * 100;
//   const todoByMonthPercent = (todoByMonth / allTasksByMonth) * 100;
//   const inprogressByDayPercent = (inprogressByDay / allTasksByDay) * 100;
//   const inprogressByMonthPercent = (inprogressByMonth / allTasksByMonth) * 100;
//   const doneByDayPercent = (doneByDay / allTasksByDay) * 100;
//   const doneByMonthPercent = (doneByMonth / allTasksByMonth) * 100;

//   const gradientMonth = context => {
//     const chart = context.chart;
//     const { ctx, chartArea } = chart;
//     if (!chartArea) {
//       return null;
//     }

//     // Створення градієнта замість кольорів
//     const gradient = ctx.createLinearGradient(
//       0,
//       chartArea.bottom,
//       0,
//       chartArea.top
//     );
//     gradient.addColorStop(0, colorMonth);
//     gradient.addColorStop(1, 'rgba(62, 133, 243, 0.00)');

//     return gradient;
//   };

//  const gradientDay = context => {
//     const chart = context.chart;
//     const { ctx, chartArea } = chart;
//     if (!chartArea) {
//       return null;
//     }

//     // Створення градієнта замість кольорів
//     const gradient = ctx.createLinearGradient(
//       0,
//       chartArea.bottom,
//       0,
//       chartArea.top
//     );
//     gradient.addColorStop(0, colorDay);
//     gradient.addColorStop(0.9687, 'rgba(255, 210, 221, 0.00)');

//     return gradient;
//   };

//   const data = {
//     labels: ['To Do', 'In Progress', 'Done'],
//     datasets: [
//       {
//         label: 'By Day',
//         data: [todoByDayPercent, inprogressByDayPercent, doneByDayPercent],
//         display: false,
//         backgroundColor: gradientDay,
//         borderSkipped: false,
//         maxBarThickness: 27,
//         borderRadius: {
//           bottomLeft: 10,
//           bottomRight: 10,
//         },
//       },
//       {
//         label: 'By Month',
//         data: [todoByMonthPercent, inprogressByMonthPercent, doneByMonthPercent],
//         display: false,
//         backgroundColor: gradientMonth,
//         borderSkipped: false,
//         maxBarThickness: 27,
//         borderRadius: {
//           bottomLeft: 10,
//           bottomRight: 10,
//         },
//       },
//     ],
//   };

//    const options = {
//      categoryPercentage: 0.3,
//      barPercentage: 0.9,
//      responsive: true,
//      scales: {
//        x: {
//          ticks: {
//            // This more specific font property overrides the global property
//            font: {
//              size: 14,
//            },
//          },
//          barPercentage: 0.1,
//          drawBorder: false,

//          grid: {
//            display: false,
//            offset: true,
//          },
//          border: {
//            display: false,
//          },
//        },
//        y: {
//          title: {
//            display: true,
//            text: 'Tasks',
//            position: 'top',
//          },
//          offset: true,

//          grid: {
//            color: 'rgba(227, 243, 255, 1)',
//            border: {
//              display: false,
//            },
//            offsetGridLines: true,
//          },
//          border: {
//            display: false,
//          },
//          beginAtZero: true,
//          max: 100,
//          ticks: {
//            max: 100,
//            min: 0,
//            stepSize: 20,
//            font: {
//              size: 14,
//            },
//          },
//        },
//      },
//      layout: {
//        padding: {
//          bottom: 20,
//        },
//      },

//      plugins: {
//        legend: {
//          display: false,
//        },
//      },
//    };

//   return (
//     <>
//       {/* <ConteinerData>
//         <BoxPeriodPaginator>
//           <CalendarToolbar
//             prevHandler={handlePrevMonth} // Попередній місяць
//             // nextHandler={handleNextMonth} // Наступний місяць

//             // pickHandler={pickHandler}
//             // today={today}
//             // currentDateMonth={currentDateMonth}
//             // currentDateDay={currentDateDay}
//             // periodType={periodType}
//             // changePeriod={setPeriodType}
//             // checkDate={checkDate}
//             // selectedDate={selectedDate}
//             // setSelectedDate={setSelectedDate}
//             // filterMonth={filterMonth}
//             // setFilterMonth={setFilterMonth}
//             // filterYear={filterYear}
//             // setFilterYear={setFilterYear}
//             // handlePrevMonth={handlePrevMonth}
//             // handleNextMonth={handleNextMonth}
//             // handlePrevDay={handlePrevDay}
//             // handleNextDay={handleNextDay}
//             // // changePeriod={changePeriod}
//             // currentDay={currentDay}
//             // pickHandler={pickHandler}
//           />
//         {/* </BoxPeriodPaginator> */}
//         {/* Додайте компонент LegendsStatistic тут, якщо він не був імпортований */}
//       {/*</ConteinerData> */}

//       <BoxBar>
//         <Bar data={data} options={options} />
//       </BoxBar>
//     </>
//   );
// };

// export default StatisticsChart;
// _________________________________________________________
