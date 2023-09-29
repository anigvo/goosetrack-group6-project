import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const StyledAuthNavigate = styled(NavLink)`
  color: #3e85f3;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.16;
  text-decoration: underline;
  border: none;
  background-color: inherit;
  cursor: pointer;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export default StyledAuthNavigate;









