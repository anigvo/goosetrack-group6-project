import styled from '@emotion/styled';
import { media } from 'utils/queries';

export const PeriodPaginatorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 18px;
  ${media('tablet', '')`
        justify-content: baseline;
        margin-bottom: 0;
    `}
`;
export const CalendarBtn = styled.button`
  &:hover,
  &:focus {
    background-color: ${props => props.theme.btnHoverBackground};
  }
  text-transform: uppercase;
  width: 148px;
  height: 30px;
  background-color: ${props => props.theme.btnBackgroundColor};
  padding: 6px 12px;
  border: 0;
  border-radius: 8px;
  color: ${props => props.theme.btnTextColor};
  font-size: 14px;
  line-height: 1.28;
  font-weight: 700;
  cursor: pointer;
  text-align: center;
  font-family: 'Inter', sans-serif;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  ${media('tablet', '')`
  margin-right: 8px;
        width: 161px;
        height: 34px;
        font-size: 16px;
        line-height: 1.12;
        padding: 8px 12px;
    `}
`;

export const DatePickerButton = styled.button`
  background-color: transparent;
  border: 0;
  padding: 0;
  cursor: ${props => (props.disabledStyle ? 'auto' : 'pointer')};
  & > svg {
    width: 16px;
    height: 16px;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    stroke: ${props =>
      props.disabledStyle
        ? props.theme.btnCalendarArrowDisabled
        : props.theme.btnCalendarArrowEnabled};
    ${media('tablet', '')`
    width: 18px;
    height: 18px;
    `}
  }
`;

export const DatePickerCustomHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 15px;
`;

export const DatePickerCustomHeaderTitle = styled.p`
  color: ${props => props.theme.btnTextColor};
  font-size: 24px;
  line-height: 1.16;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
`;

export const PaginatorBtnWrapper = styled.div`
  display: flex;
`;
export const PaginatorBtn = styled.button`
  & > svg {
    width: 16px;
    height: 16px;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    stroke: ${props =>
      props.disabledStyle
        ? props.theme.arrowDisabledColor
        : props.theme.arrowEnabledColor};
    ${media('tablet', '')`
    width: 18px;
    height: 18px;
    `}
  }
  &:hover,
  &:focus {
    background-color: ${props =>
      !props.disabledStyle && props.theme.calendarBorderColor};
  }
  width: 36px;
  height: 30px;
  cursor: ${props => (props.disabledStyle ? 'auto' : 'pointer')};
  background-color: ${props => props.theme.calendarBackground};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid ${props => props.theme.arrowDisabledColor};
  border-bottom-left-radius: ${props =>
    props.direction === 'left' ? `8px` : `0px`};
  border-top-left-radius: ${props =>
    props.direction === 'left' ? `8px` : `0px`};
  border-bottom-right-radius: ${props =>
    props.direction === 'right' ? `8px` : `0px`};
  border-top-right-radius: ${props =>
    props.direction === 'right' ? `8px` : `0px`};
  ${media('tablet', '')`
    width: 38px;
    height: 34px;
    `}
`;
