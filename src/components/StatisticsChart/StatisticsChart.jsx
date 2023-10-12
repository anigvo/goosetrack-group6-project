import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { selectTheme } from 'redux/selectors';
import { Loader } from 'components/Loader/Loader';

import 'react-datepicker/dist/react-datepicker.css';
import { BoxBar } from './StatisticsChart.styled';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectMonth,
  selectDay,
  selectTasks, 
  selectYear,
  selectIsLoadingTasks,
} from 'redux/selectors';
import { getUserTasks } from 'redux/tasks/operations';

import { useEffect, useState } from 'react';
import { lightTheme, darkTheme } from '../../utils/colors';

Chart.register(...registerables);
Chart.register(ChartDataLabels);

const StatisticsChart = () => {
  const isLoading = useSelector(selectIsLoadingTasks);
  const month = useSelector(selectMonth);
  const day = useSelector(selectDay);
  const year = useSelector(selectYear);
  const tasks = useSelector(selectTasks);

const [windowWidth, setWindowWidth] = useState(window.innerWidth);

const fontSizeByInterest = {
  small: 12, 
  large: 16,
  };

const fontSizeByGroup = {
  small: 12,  
  large: 14,
};
 
const tickWidth = {
  small: 14,  
  medium: 32, 
  large: 61,  
  };  
  
  const maxBarThickness = {
    small: 22,  
    large: 27,
};
 const categoryPercentage = {
   small: 0.7,
   medium: 0.5,
   large: 0.35,
 };

  
  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setWindowWidth(newWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getSizeMin = () => {
    if (windowWidth < 768) {
      return {
        maxBarThickness: maxBarThickness.small,
        fontSizeByInterest: fontSizeByInterest.small,
        fontSizeByGroup: fontSizeByGroup.small,
      };
    } else {
      return {
        maxBarThickness: maxBarThickness.large,
        fontSizeByInterest: fontSizeByInterest.large,
        fontSizeByGroup: fontSizeByGroup.large,
      }; 
    }
  };
 const getSizeMax = () => {
   if (windowWidth > 1439) {
     return {
       tickWidth: tickWidth.large,
       categoryPercentage: categoryPercentage.large,
     };
   } else if (windowWidth > 767) {
     return {
       tickWidth: tickWidth.medium,
       categoryPercentage: categoryPercentage.medium,
     };
   } else if (windowWidth < 768) {
     return {
       tickWidth: tickWidth.small,
       categoryPercentage: categoryPercentage.small,
     };
   }
 };
  
  const colorDay = '#FFD2DD';
  const colorMonth = '#3E85F3';

  const theme = useSelector(selectTheme);
  const textColor =
    theme === 'light'
      ? lightTheme.statisticsTextColor
      : darkTheme.statisticsTextColor;
  
  const gridColor =
    theme === 'light'
      ? lightTheme.chartBorderColor
      : darkTheme.chartBorderColor;

  const gradientMonth = context => {
    const chart = context.chart;
    const { ctx, chartArea } = chart;
    if (!chartArea) {
      return null;
    }

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

    const height = chartArea.bottom - chartArea.top; 
    const top = chartArea.top; 

    const gradient = ctx.createLinearGradient(0, top + height, 0, top);
    gradient.addColorStop(0, colorDay);
    gradient.addColorStop(0.9687, 'rgba(255, 210, 221, 0.00)');

    return gradient;
  };

  const todoByDay = tasks.filter(task => {
    const taskDate = new Date(task.date);
    return (
      task.category === 'to-do' &&
      taskDate.getFullYear() === year &&
      taskDate.getMonth() === month &&
      taskDate.getDate() === day
    );
  }).length;
  const todoByMonth = tasks.filter(task => {
    const taskDate = new Date(task.date);
    return (
      task.category === 'to-do' &&
      taskDate.getFullYear() === year &&
      taskDate.getMonth() === month
    );
  }).length;

  const inprogressByDay = tasks.filter(task => {
    const taskDate = new Date(task.date);
    return (
      task.category === 'in-progress' &&
      taskDate.getFullYear() === year &&
      taskDate.getMonth() === month &&
      taskDate.getDate() === day
    );
  }).length;

  const inprogressByMonth = tasks.filter(task => {
    const taskDate = new Date(task.date);
    return (
      task.category === 'in-progress' &&
      taskDate.getFullYear() === year &&
      taskDate.getMonth() === month
    );
  }).length;

  const doneByDay = tasks.filter(task => {
    const taskDate = new Date(task.date);
    return (
      task.category === 'done' &&
      taskDate.getFullYear() === year &&
      taskDate.getMonth() === month &&
      taskDate.getDate() === day
    );
  }).length;

  const doneByMonth = tasks.filter(task => {
    const taskDate = new Date(task.date);
    return (
      task.category === 'done' &&
      taskDate.getFullYear() === year &&
      taskDate.getMonth() === month
    );
  }).length;

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
        data: tasksByDay.map(task => {
          const totalTasksByDay = tasksByDay.reduce(
            (sum, value) => sum + value,
            0
          );
          if (totalTasksByDay === 0) {
            return 0;
          }
          return (task / totalTasksByDay) * 100;
        }),
        display: true,
        backgroundColor: gradientDay,
        borderSkipped: false,
        maxBarThickness: getSizeMin().maxBarThickness,
        borderRadius: {
          bottomLeft: 10,
          bottomRight: 10,
        },
      },
      {
        label: 'By Month',
        data: tasksByMonth.map(task => {
          const totalTasksByMonth = tasksByMonth.reduce(
            (sum, value) => sum + value,
            0
          );
          if (totalTasksByMonth === 0) {
            return 0;
          }
          return (task / totalTasksByMonth) * 100;
        }),

        display: true,

        backgroundColor: gradientMonth,
        borderSkipped: false,
        maxBarThickness: getSizeMin().maxBarThickness,
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
    categoryPercentage: getSizeMax().categoryPercentage,
    barPercentage: 1,

    scales: {
      x: {
        ticks: {
          font: {
            size: getSizeMin().fontSizeByGroup,
          },
          color: textColor,
        },
        // barPercentage: 0.9,
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
        responsive: true,
        offset: true,
        grid: {
          color: gridColor,
          border: {
            display: false,
          },
          tickColor: 'rgba(0, 0, 0, 0)',
          tickLength: getSizeMax().tickWidth,
          tickWidth: getSizeMax().tickWidth,

          offsetGridLines: true,
        },
        border: {
          display: false,
        },
        beginAtZero: true,
        max: 100,
        ticks: {
          color: textColor,
          max: 100,
          min: 0,
          stepSize: 20,
          font: {
            size: 14,
          },
        },
      },
    },
    layout: {
      padding: {
        bottom: 20,
      },
    },

    plugins: {
      title: {
        display: true,
        text: 'Tasks',
        color: textColor,
        position: 'top',
        align: 'start',
        font: {
          size: 14,
        },
      },
      datalabels: {
        color: textColor,
        anchor: 'end',
        align: 'top',
        font: {
          size: getSizeMin().fontSizeByInterest,
          weight: 500,
          family: 'Poppins',
        },
        formatter: function (value, _) {
          return Math.round(value) + '%';
        },
      },
      legend: {
        display: false,
      },
    },
  };

  return (
    <>
      {isLoading ? (
        <Loader type={'suspense'} />
      ) : (
        <BoxBar>
          <Bar data={data} options={options} />
        </BoxBar>
      )}
    </>
  );
};

export default StatisticsChart;
