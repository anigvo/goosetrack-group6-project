import styled from '@emotion/styled';
import { media } from 'utils/queries';

export const SaveBtn = styled.button`
  font-size: 14px;
  font-weight: 600;
  line-height: 1.29;

  border: none;
  font: inherit;
  cursor: ${({ disabled }) => {
    return disabled ? 'not-allowed' : 'pointer';
  }};

  width: 195px;
  height: 46px;
  padding: 0 8px;

  border-radius: 16px;

  color: ${props => props.theme.btnTextColor};

  background-color: ${({ disabled }) => {
    return disabled ? '#d3d3d3' : props => props.theme.btnBackgroundColor;
  }};

  transition: box-shadow linear 350ms;
  :hover,
  :focus {
    background-color: ${({ disabled }) => {
      return disabled ? '#d3d3d3' : props => props.theme.btnHoverBackground;
    }};
    box-shadow: ${({ disabled }) => {
      return disabled ? 'none' : '4px 2px 16px 0px rgba(136, 165, 191, 0.48)';
    }};
  }
  ${media('tablet', '')`
        width: 262px;
        height: 48px;
    `};

  ${media('desktop', '')`
        margin-top: 44px;
    `};
`;