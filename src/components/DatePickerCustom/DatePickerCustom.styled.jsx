import styled from '@emotion/styled';
import { media } from 'utils/queries';

export const CalendarBtn = styled.button`
  &:hover,
  &:focus {
    background-color: ${props => props.theme.btnHoverBackground};
  }
  text-transform: uppercase;
  width: 157px;
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
        width: 170px;
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

  font-size: 20px;
  line-height: 1.2;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  ${media('tablet', '')`
 font-size: 24px;
  line-height: 1.16;
    `}
`;
