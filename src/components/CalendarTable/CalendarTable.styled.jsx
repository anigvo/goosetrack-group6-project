import styled from '@emotion/styled';

export const СalendarGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 1px;
  border: 1px solid ${props => props.theme.calendarBorder};
  border-radius: 8px;
  overflow: hidden;
`;

export const CalendarItem = styled.li`
  min-width: 150px;
  min-height: 125px;
  background-color: ${props => props.theme.calendarBackground};
  list-style: none;
  color: ${props => props.theme.calendarTextColor};
  padding: 14px;
  font-size: 16px;
  line-height: 1.15;
  font-weight: 700;
  font-family: 'Inter', sans-serif;
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
  width: 27px;
  height: 26px;
  border-radius: 8px;
  padding: 4px 8px;
  color: ${props =>
    props.isCurrentDay
      ? props.theme.btnTextColor
      : props.theme.calendarTextColor};
`;
