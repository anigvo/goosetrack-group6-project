import { LegendsBox, Legend, LegendColor } from './LegendsStatistic.styled';
import React from 'react'

const LegendsStatistic = ({data}) => {
    const colorDay = '#FFD2DD';
    const colorMonth = '#3E85F3';

const legendData = [
  { label: 'By Day', color: colorDay },
  { label: 'By Month', color: colorMonth },
];

  return (
    <LegendsBox>
      {legendData.map((legend, index) => (
        <Legend key={index}>
          <LegendColor          
            style={{ backgroundColor: legend.color }}
          ></LegendColor>
          {legend.label}
        </Legend>
      ))}
    </LegendsBox>
  );
};


export default LegendsStatistic