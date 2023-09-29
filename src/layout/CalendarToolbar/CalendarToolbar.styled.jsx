import styled from '@emotion/styled';
import { media } from 'utils/queries';

export const CalendarToolbarContainer = styled.div`
margin-bottom: 24px;
  ${media('tablet', '')`
        margin-bottom: 32px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 16px;
        line-height: 1.12;
        margin-bottom: 18px;
    `}
`;
