import styled from '@emotion/styled';
import { media } from 'utils/queries';

export const СalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 1px;
  border: 1px solid ${props => props.theme.calendarBorder};
  border-radius: 8px;
  overflow: hidden;
  overflow-x: auto;
`;

export const CalendarItem = styled.button`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.calendarBackground};
  list-style: none;
  color: ${props => props.theme.calendarTextColor};
  font-size: 12px;
  line-height: 1.16;
  font-weight: 700;
  font-family: 'Inter', sans-serif;
  height: 98px;
  cursor: pointer;
  border: none;
  padding: 0;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    background-color: ${props => props.theme.calendarBorderColor};
  }
  &:disabled {
    cursor: default;
  }

  ${media('tablet', '')`
height: 150px;
  font-size: 14px;
  line-height: 1.15;
    `}
  ${media('desktop', '')`
    font-size: 16px;
height: 140px;
    `}
`;
export const CalendarDayWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 4px;
  padding: 4px 8px;
  ${media('tablet', '')`
  padding: 14px;
    `}
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
  ${media('tablet', '')`
  padding: 4px 8px;
    `}
  ${media('desktop', '')`
  width: 27px;
  height: 26px;
    border-radius: 8px;
    `}
`;
export const CalendarTask = styled.div`
  display: flex;
  justify-content: center;
  padding-left: 2px;
  padding-right: 2px;
  ${media('tablet', '')`
  padding-left: 4px;
  padding-right: 4px;
    `}
  ${media('desktop', '')`
  padding-left: 8px;
  padding-right: 8px;
    `}
`;

export const CalendarTaskList = styled.ul`
  text-align: start;
  list-style: none;
  width: 100%;
`;

export const CalendarTaskItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 4px;
  }
  max-width: 42px;
  width: 42px;
  font-size: 10px;
  line-height: 1.4;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-right: 4px;
  padding-left: 4px;
  ${media('tablet', '')`
  max-width: 90px;
  width: 90px;
  font-size: 14px;
  line-height: 1.28;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-right: 10px;
  padding-left: 10px;
    `}
  ${media('desktop', '')`
  max-width: 147px;
  width: 147px;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-right: 12px;
  padding-left: 12px;
    `}
  border-radius: 8px;
  color: ${props =>
    props.priority === 'low'
      ? props.theme.calendarLowTaskText
      : props.priority === 'medium'
      ? props.theme.calendarMediumTaskText
      : props.theme.calendarHighTaskText};
  background-color: ${props =>
    props.priority === 'low'
      ? props.theme.calendarLowTaskBackground
      : props.priority === 'medium'
      ? props.theme.calendarMediumTaskBackground
      : props.theme.calendarHighTaskBackground};
`;

export const TaskSpan = styled.li`
  color: ${props => props.theme.calendarTextColor};
  font-size: 10px;
  line-height: 1.4;
  ${media('tablet', '')`
  font-size: 14px;
  line-height: 1.28;
    `}
`;
