import styled from '@emotion/styled';
import { media } from 'utils/queries';

export const CalendarContainer = styled.div`
  padding-top: 64px;
  padding-bottom: 52px;
  ${media('desktop', '')`
      padding-top: 32px;
      padding-bottom: 32px;
    `}
`;
