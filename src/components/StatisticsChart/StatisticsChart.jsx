import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

import 'react-datepicker/dist/react-datepicker.css';
import { BoxBar, ConteinerData, BoxPeriodPaginator } from './StatisticsChart.styled';
import { PeriodPaginator } from 'components/PeriodPaginator/PeriodPaginator';
import LegendsStatistic from 'components/LegendsStatistic/LegendsStatistic';

Chart.register(...registerables);

const colorDay = '#FFD2DD';
const colorMonth = '#3E85F3';

// Вхідні дані для графіка
const todoByDay = 50; // Приклад значень для to do
const todoByMonth = 800;
const inprogressByDay = 800; // Приклад значень для in progress
const inprogressByMonth = 300;
const doneByDay = 150; // Приклад значень для done
const doneByMonth = 25

// Обчислення загальної кількості задач за день
const allTasksByDay = todoByDay + inprogressByDay + doneByDay;
const allTasksByMonth = todoByMonth + inprogressByMonth + doneByMonth;

// Обчислення відсотків для todo, inprogress і done
const todoByDayPercent = (todoByDay / allTasksByDay) * 100;
const todoByMonthPercent = (todoByMonth / allTasksByMonth) * 100;
const inprogressByDayPercent = (inprogressByDay / allTasksByDay) * 100;
const inprogressByMonthPercent = (inprogressByMonth / allTasksByMonth) * 100;
const doneByDayPercent = (doneByDay / allTasksByDay) * 100;
const doneByMonthPercent = (doneByMonth / allTasksByMonth) * 100;


// Градієнт для заповнення
const gradientMonth = (context) => {
   const chart = context.chart;
  const { ctx, chartArea } = chart;
  if (!chartArea) {
    return null;
  }

  // Створення градієнта замість кольорів
  const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
  gradient.addColorStop(0, colorMonth);
  gradient.addColorStop(1, 'rgba(62, 133, 243, 0.00)'); // Використовуємо 0.9687 замість 0.9687%, оскільки Chart.js вимагає відсотки від 0 до 1.

  return gradient;
};

const gradientDay = (context) => {
  const chart = context.chart;
  const { ctx, chartArea } = chart;
  if (!chartArea) {
    
    return null;
  }

  // Створення градієнта замість кольорів
  const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
  gradient.addColorStop(0, colorDay);
  gradient.addColorStop(0.9687, 'rgba(255, 210, 221, 0.00)'); 

  return gradient;
};


const data = {
  labels: ['To Do', 'In Progress', 'Done'],
  datasets: [
    {
      label: 'By Day',
      data: [todoByDayPercent, inprogressByDayPercent, doneByDayPercent],
      display: false,
      backgroundColor: gradientDay, 
      borderSkipped: false,
      maxBarThickness: 27,    
      borderRadius: {
        bottomLeft: 10,
        bottomRight: 10,
      }
    },
    {
      label: 'By Month',
      data: [todoByMonthPercent, inprogressByMonthPercent, doneByMonthPercent],
      display: false,
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
    categoryPercentage: 0.3,
    barPercentage: 0.9,
    responsive: true,
  scales: {
    x: {  
      ticks: {                    // This more specific font property overrides the global property
        font: {
            size: 14
        }
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
        position: 'top'
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
        display: false
      },      
      beginAtZero: true,
      max: 100, 
      ticks: {      
        max: 100,
        min: 0,
        stepSize: 20,
        font: {
            size: 14
        } 
      },      
    },    
  },
  layout: {
    padding: {
      bottom: 20, 
    },
  },
  
  plugins: {
    legend:{
      display: false, 
    },
  },
// plugins: {
//     legend: {
//     display: true,
    
//     labels: {
//         color: '#343434;',
//         font: {
//           size: 16
//         },
//         lineHeight: 1.125,
        
//           usePointStyle: true,
//           pointStyle: 'circle',
//           boxHeight: 8,
        
//         generateLabels: (chart) => {
//           const data = chart.data;
//           if (data.labels.length && data.datasets.length) {
//             return data.datasets.map((dataset, index) => {
              
//               let fillStyle;
              
//               if (index === 0) {
//                 // Встановлюємо колір фону легенди для "By Day"
//                 fillStyle = colorDay; // Ваш колір для "By Day"
//               } else {
//                 // Встановлюємо колір фону легенди для "By Month"
//                 fillStyle = colorMonth; // Ваш колір для "By Month"
//               }
              
//               return {
//                 text: dataset.label,

//                 fillStyle,
//                 hidden: false,                
//                 lineWidth: 0,
//                 position: 'right',
//               };
//             });
//           }
//           return [];
//         },
//       },
//     },
//   },
};

const StatisticsChart = () => {
  return (
    <>
      <ConteinerData>
        <BoxPeriodPaginator> 
          <PeriodPaginator/>
        </BoxPeriodPaginator> 
        <LegendsStatistic data={data}/>
      </ConteinerData>
      <BoxBar>
        <Bar data={data} options={options} />
      </BoxBar>
    </>
  );
};

export default StatisticsChart;
