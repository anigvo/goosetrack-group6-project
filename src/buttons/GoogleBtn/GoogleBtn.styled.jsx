import { registerPageColors } from 'utils/colors';
import styled from 'styled-components';

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
`

export const Span = styled.span`
font-size: 14px;
color: rgba(52, 52, 52, 0.50);
`

export const GoogleButton = styled.a`
  border-radius: 16px;
  border: 1px solid ${registerPageColors.buttonColor};
  color: ${registerPageColors.buttonColor};
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
  width: max-content;
  &:hover{
    box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  }
  @media (min-width: 768px) {
    line-height: 24px;
    letter-spacing: -0.36px;
  }
`;