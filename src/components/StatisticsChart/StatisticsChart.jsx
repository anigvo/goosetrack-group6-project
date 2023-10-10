import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

import 'react-datepicker/dist/react-datepicker.css';
import { BoxBar } from './StatisticsChart.styled';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectMonth,
  selectDay,
  selectTasks,
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

  const colorDay = '#FFD2DD';
  const colorMonth = '#3E85F3';

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
