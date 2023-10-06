import styled from '@emotion/styled';
import { media } from 'utils/queries';

export const DaysOfWeekList = styled.ul`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 1px;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding-top: 14px;
  padding-bottom: 14px;
  list-style: none;
  border: 1px solid ${props => props.theme.calendarBorder};
  border-radius: 8px;
  background-color: ${props => props.theme.calendarBackground};
  text-transform: uppercase;
  color: ${props => props.theme.calendarTextColor};
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  line-height: 1.12;
  margin-bottom: 14px;

  ${media('tablet', '')`
  margin-bottom: 18px;
    `}
  ${media('desktop', '')`
  margin-bottom: 15px;
    `}
`;

export const DayOfWeek = styled.li`
  color: ${props =>
    props.weekend ? props.theme.calendarWeekend : 'currentColor'};
`;
