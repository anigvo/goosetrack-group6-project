import styled from '@emotion/styled';
import { media } from 'utils/queries';

export const DayCalendarHeadContainer = styled.li`
  text-align: center;
  padding-top: 14px;
  padding-bottom: 14px;
  list-style: none;
  border: 1px solid ${props => props.theme.calendarBorder};
  border-radius: 8px;
  background-color: ${props => props.theme.calendarBackground};
  text-transform: uppercase;
  color: ${props => props.theme.calendarTextColor};
  margin-bottom: 14px;

  ${media('tablet', '')`
    margin-bottom: 18px;
        padding-top: 10px;
    padding-bottom: 10px;
    `}
  ${media('desktop', '')`
    margin-bottom: 16px;
    `}
`;
export const DaysOfWeekList = styled.ul`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 1px;
  &:not(:last-child) {
    margin-bottom: 6px;
    ${media('tablet', '')`
    margin-bottom: 4px;
    `}
  }
`;
export const DayOfWeek = styled.li`
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  line-height: 1.12;
  ${media('tablet', '')`
  font-size: 14px;
  line-height: 1.28;
    `}
`;
export const DayNumberOfWeek = styled.button`
  border: none;
  font-weight: 700;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  line-height: 1.16;
  background-color: ${props =>
    props.isCurrentDay
      ? props.theme.btnBackgroundColor
      : props.theme.calendarBackground};
  color: ${props =>
    props.disabledStyled
      ? props.theme.calendarBorder
      : props.isCurrentDay
      ? props.theme.btnTextColor
      : props.theme.calendarTextColor};
  padding: 4px 6px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: ${props =>
      props.disabledStyled
        ? 'none'
        : props.isCurrentDay
        ? props.theme.btnBackgroundColor
        : props.theme.calendarBorder};
  }

  ${media('tablet', '')`
  padding: 4px 8px;
  font-size: 16px;
  line-height: 1.12;
    `}
`;
export const DayNumberOfWeekWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
