import StatisticsChart from 'components/StatisticsChart/StatisticsChart';
import { useEffect } from 'react';
import ErrorBoundary from 'utils/ErrorBoundary';
import {BoxStatistics} from './StatisticsPage.styled';


const StatisticsPage = ({ updatePageName }) => {
  useEffect(() => {
    updatePageName('Statistics');
  }, [updatePageName]);
  return (
    <BoxStatistics>
      <ErrorBoundary>
        <StatisticsChart />
      </ErrorBoundary>
    </BoxStatistics>
    
  );
};

export default StatisticsPage;
