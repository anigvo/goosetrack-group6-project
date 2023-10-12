import styled from 'styled-components';
import { Field } from 'formik';
import { registerPageColors } from 'utils/colors';

export const MainContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  background: ${registerPageColors.mainBackground};
`;
export const FormContainer = styled.div`
  max-width: 335px;
  border-radius: 8px;
  background: ${registerPageColors.formColor};
  padding: 40px 24px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 18px;
  @media (min-width: 768px) {
    max-width: 480px;
    padding: 40px;
    margin-bottom: 24px;
  }
`;
export const Title = styled.h1`
  color: ${registerPageColors.buttonColor};
  text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 32px;
  margin-top: 0;
  display: inline-block;
  text-transform: capitalize;

  @media (min-width: 768px) {
    font-size: 24px;
    margin-bottom: 40px;
  }
`;
export const LabelInput = styled.label`
  display: flex;
  flex-direction: column;
  position: relative;
`;
export const SpanInputEmail = styled.span`
  color: ${props => props.$errEmail};
  font-family: 'Inter', sans-serif;
  font-family: $form-font;
  font-size: 12px;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 8px;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;
export const SpanInputPass = styled.span`
  color: ${props => props.$errPass};
  font-size: 12px;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 8px;
  margin-top: 24px;

  @media (min-width: 768px) {
    font-size: 14px;
    margin-top: 18px;
  }
`;
export const EmailInput = styled(Field)`
  border-radius: 8px;
  border: ${props => props.$errEmail};
  background: ${registerPageColors.formColor};
  max-width: 287px;
  height: 46px;
  padding: 0;
  padding-left: 12px;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  outline: none;

  ::placeholder {
    color: ${registerPageColors.placeholderColor};
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
  }
  &:hover {
    border-color: ${registerPageColors.borderHoverColor};
  }
  @media (min-width: 768px) {
    max-width: 400px;
    height: 54px;
    padding-left: 18px;
    font-size: 16px;
    ::placeholder {
      font-size: 16px;
    }
  }
`;
export const PasswordInput = styled(Field)`
  border-radius: 8px;
  border: ${props => props.$errPass};
  background: ${registerPageColors.formColor};
  max-width: 287px;
  height: 46px;
  padding: 0;
  padding-left: 8px;
  outline: none;
  
  ::placeholder {
    color: ${registerPageColors.placeholderColor};
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
  }
  &:hover {
    border-color: ${registerPageColors.borderHoverColor};
  }
  @media (min-width: 768px) {
    max-width: 400px;
    height: 54px;
    padding-left: 18px;
    font-size: 16px;
    ::placeholder {
      font-size: 16px;
    }
  }
`;
export const PasswordVisibilityIcon = styled.span`
  position: absolute;
  top: 75%;
  right: 60px;
  transform: translateY(-50%);
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
  }
`;
export const ErrorMsg = styled.p`
  color: ${registerPageColors.errorMessage};
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  margin-top: 8px;
  margin-bottom: -22px;
  padding-left: 12px;
`;
export const CorrectMsg = styled.p`
  color: ${registerPageColors.correctMessage};
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  margin-top: 8px;
  margin-bottom: -22px;
  padding-left: 12px;
`;
export const ButtonSubmit = styled.button`
  border-radius: 16px;
  background:  ${registerPageColors.buttonColor};
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  width: 100%;
  height: 46px;
  margin-top: 32px;
  border: none;
  color: ${registerPageColors.formColor};
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: -0.28px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 11px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background: #2b78ef;
  }
  @media (min-width: 768px) {
    height: 56px;
    margin-top: 48px;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.36px;
  }
`;
export const IconButtonSubmitSpan = styled.span`
  display: flex;
  align-items: center;
`;
export const IconButtonSubmit = styled.svg`
  stroke: ${registerPageColors.formColor};
  fill: ${registerPageColors.buttonColor};
  width: 18px;
  height: 18px;
  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;
export const Iconinput = styled.svg`
  position: absolute;
  width: 24px;
  height: 24px;
  bottom: 11px;
  right: 18px;
  @media (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;
export const ButtonSignup = styled.button`
  color: ${registerPageColors.buttonColor};
  text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  font-size: 12px;
  font-weight: 600;
  line-height: 14px;
  border: none;
  background: ${registerPageColors.mainBackground};
  margin-right: auto;
  margin-left: auto;
  cursor: pointer;

  background-image: linear-gradient(
    to right,
    currentColor 100%,
    currentColor 100%
  );
  background-repeat: no-repeat;
  background-position: 0 100%;
  background-size: 100% 1px;
  color: ${registerPageColors.buttonColor};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: ${registerPageColors.buttonHoverColor};
  }

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
`;
export const SignupContainer = styled.div`
  display: flex;
`;
export const GusContainer = styled.div`
  position: absolute;
  visibility: hidden;
  @media (min-width: 1440px) {
    bottom: 19px;
    right: 60px;
    visibility: visible;
  }
`;
