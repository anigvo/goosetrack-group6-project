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
//   font-style: normal;
//   font-weight: 600;
//   font-size: 14px;
//   line-height: 18px;
//   text-align: center;
//   border: none;
//   color: #ffffff;
//   display: grid;
//   grid-row: 5;
//   justify-self: center;
//   align-items: center;
//   padding: 14px 50px;
//   margin: 0 auto;
//   margin-top: 40px;
//   isolation: isolate;
//   min-width: 195px;
//   background-color: ${({ disabled }) => {
//     return disabled ? '#d3d3d3' : '#3e85f3';
//   }};

//   border-radius: 16px;
//   grid-column-start: 1;
//   grid-column-end: 3;
//   cursor: ${({ disabled }) => {
//     return disabled ? 'not-allowed' : 'pointer';
//   }};

//   transition: box-shadow linear 350ms;

//   :hover,
//   :focus {
// background-color: ${({ disabled }) => {
//   return disabled ? '#d3d3d3' : '#2b78ef';
// }};
//   }

//   ${media('tablet', '')`
//     min-width: 262px;
//     padding: 15px 84px;
//     `};
//   ${media('desktop', '')`
//         margin-top: 55px;
//     `}

// `;
