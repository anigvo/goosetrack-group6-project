import { registerPageColors } from 'utils/colors';
import styled from 'styled-components';

export const GoogleButton = styled.a`
  border-radius: 16px;
  border: 1px solid #fff;
  color: ${registerPageColors.formColor};
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: -0.28px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  padding: 10px 20px;
  &:hover{
    box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  }
  @media (min-width: 768px) {
    line-height: 24px;
    letter-spacing: -0.36px;
  }
`;