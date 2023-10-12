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