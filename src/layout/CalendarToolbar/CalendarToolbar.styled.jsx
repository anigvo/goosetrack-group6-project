import styled from '@emotion/styled';
import { media } from 'utils/queries';

export const CalendarToolbarContainer = styled.div`
  margin-bottom: ${props =>
    props.page === 'calendar' && window.innerWidth > 767
      ? '32px'
      : props.page === 'calendar'
      ? '24px'
      : '0px'};
  ${media('tablet', '')`
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 16px;
        line-height: 1.12;
    `};
`;
