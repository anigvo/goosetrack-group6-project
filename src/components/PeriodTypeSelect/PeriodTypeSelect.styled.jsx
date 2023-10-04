import styled from '@emotion/styled';
import { media } from 'utils/queries';
import { NavLink } from 'react-router-dom';

export const PeriodBtnWrapper = styled.div`
  display: flex;
  
`;
export const PeriodBtn = styled(NavLink)`
  &:hover,
  &:focus,
  &.active {
    background-color: ${props => props.theme.periodTypeBackgroundOutline};
    color: ${props => props.theme.periodTypeTextOutline};
  }
  display: flex;
  align-items: center;
  justify-content: center;
  width: 76px;
  height: 34px;
  cursor: pointer;
  font-size: 14px;
  line-height: 1.28;
  text-align: center;
  font-weight: 500;
  border: none;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  color: ${props => props.theme.periodTypeText};
  border: 1px solid ${props => props.theme.arrowDisabledColor};
  background-color: ${props => props.theme.periodTypeBackground};
  border: 0;
  border-left: ${props =>
    props.direction === 'right'
      ? `1px solid ${props.theme.periodTypeBorderline}`
      : `0px`};
  border-right: ${props =>
    props.direction === 'left'
      ? `1px solid ${props.theme.periodTypeBorderline}`
      : `0px`};
  border-bottom-left-radius: ${props =>
    props.direction === 'left' ? `8px` : `0px`};
  border-top-left-radius: ${props =>
    props.direction === 'left' ? `8px` : `0px`};
  border-bottom-right-radius: ${props =>
    props.direction === 'right' ? `8px` : `0px`};
  border-top-right-radius: ${props =>
    props.direction === 'right' ? `8px` : `0px`};
  ${media('tablet', '')`
        font-size: 16px;
        line-height: 1.12;
    `}
`;
