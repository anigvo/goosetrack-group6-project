import { useEffect } from 'react';

const StatisticsPage = ({ updatePageName }) => {
  useEffect(() => {
    updatePageName('Statistics');
  }, [updatePageName]);
  return <h1>Statistics page</h1>;
};

export default StatisticsPage;
