import styled from '@emotion/styled';
import { media } from 'utils/queries';

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 100%;
    background-color: ${props => props.theme.calendarBackground};
    padding: 18px;
    border: 1px solid ${props => props.theme.calendarBorderColor};
    border-radius: 8px;
    height: fit-content;
    ${media('tablet', '')`
        min-width: calc(50% - 8px);
    `}
    ${media('desktop', '')`
        min-width: calc((100% - 2 * 27px) / 3)
    `}
`
