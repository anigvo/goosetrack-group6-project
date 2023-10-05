import styled from '@emotion/styled';
import { media } from 'utils/queries';
export const СalendarGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 1px;
  border: 1px solid ${props => props.theme.calendarBorder};
  border-radius: 8px;
  overflow: hidden;
`;

export const CalendarItem = styled.li`
  background-color: ${props => props.theme.calendarBackground};
  list-style: none;
  color: ${props => props.theme.calendarTextColor};
  padding: 4px 8px;
  font-size: 12px;
  line-height: 1.16;
  font-weight: 700;
  font-family: 'Inter', sans-serif;
  height: 83px;
  ${media('tablet', '')`
height: 130px;
  padding: 14px;
  font-size: 16px;
  line-height: 1.15;
    `}
  ${media('desktop', '')`
height: 112px;
    `}
`;
export const CalendarTask = styled.div`
  justify-content: flex-start;
`;
export const CalendarDayWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 18px;
`;

export const CalendarDay = styled.div`
  display: ${props => (props.isCurrentDayMonth ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  background-color: ${props =>
    props.isCurrentDay
      ? props.theme.btnBackgroundColor
      : props.theme.calendarBackground};
  width: 20px;
  height: 22px;
  border-radius: 6px;
  padding: 4px 6px;
  color: ${props =>
    props.isCurrentDay
      ? props.theme.btnTextColor
      : props.theme.calendarTextColor};
  ${media('desktop', '')`
  width: 27px;
  height: 26px;
  padding: 4px 8px;
    border-radius: 8px;
    `}
`;
