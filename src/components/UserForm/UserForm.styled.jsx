import { media } from 'utils/queries';
import styled from '@emotion/styled';
import { ErrorMessage, Field } from 'formik';
import { ReactComponent as UpdateAvatarIcon } from '../../assets/icons/add-avatar.svg';
import { ReactComponent as ErrorIcon } from '../../assets/icons/error.svg';
import { ReactComponent as ValidIcon } from '../../assets/icons/valid.svg';


export const ContainerForm = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  ${media('desktop', '')`
    gap: 44px;

    `};
`;
export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const UserAvatar = styled.div`
  width: 72px;
  height: 72px;
  border: 2px solid ${props => props.theme.userAvatarBorder};
  border-radius: 50%;
  background-color: ${props => props.theme.userAvatarInsideBackground};
  margin-bottom: 18px;
  position: absolute;
  top: -36px;

  ${media('tablet', '')`
        position: static;
        margin-bottom: 20px;
        width: 124px;
        height: 124px;
    `};
`;

export const UserName = styled.h3`
  font-size: 14px;
  font-weight: 700;
  line-height: 1.29;

  margin-bottom: 4px;
  color: ${props => props.theme.userNameTextColor};

  ${media('tablet', '')`
        font-size: 18px;
        line-height: 1.0;

        margin-bottom: 8px;
    `}
`;

export const UserRole = styled.p`
  font-size: 12px;
  font-weight: 600;
  line-height: 1.17;
  color: ${props => props.theme.userInputLabelColor};

  ${media('tablet', '')`
        font-size: 14px;
        line-height: 1.29;
    `}
`;

export const AvatarUploadContainer = styled.div`
  position: relative;
`;

export const AvatarUploadBtn = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: -2px;
  left: 43px;
  border-radius: 50%;
  width: 14px;
  height: 14px;
  cursor: pointer;
  background-color: ${props => props.theme.userAvatarBorder};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover, &:focus {
    background-color: ${props => props.theme.btnHoverBackground};
  }
  ${media('tablet', '')`
    width: 24px;
    height: 24px;
    bottom: -3px;
    left: 79px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
`};
`;

export const UpdateIcon = styled(UpdateAvatarIcon)`
    fill: ${props => props.theme.btnTextColor}; 
    cursor: pointer;
    stroke-width: 8px;
    width: 8px;
    height: 8px;
  ${media('tablet', '')`
    width: 18px;
    height: 18px;
    bottom: 20px;
    left: 78px;
    `};
`;

export const UserFormWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 88px;
  width: 100%;
`;

export const BoxAllInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  ${media('tablet', '')`
        gap: 24px;
    `}

  ${media('desktop', '')`
        flex-direction: row;
        gap: 50px;
    `}
`;

export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 299px;

  ${media('tablet', '')`
        gap: 24px;
        width: 354px;
    `}
`;

export const LabelText = styled.p`
  font-size: 12px;
  line-height: 1.17;
  margin-bottom: 8px;

  color: ${({ status }) => {
    switch (status) {
      case 'error':
        return '#E74A3B';
      default:
        return props => props.theme.userInputLabelColor;
    }
  }};
  ${media('tablet', '')`
        font-size: 14px;
        line-height: 1.29;
    `}
`;

export const Label = styled.label`
  position: relative;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.25;
  color: #111111;
  margin-bottom: 0px;
  ${media('tablet', '')`
    font-size: 14px;
    line-height: 1.2;
    `};
  ${media('desktop', '')`
       
    `}
`;
export const BoxInput = styled.label`
`;

export const FormInput = styled(Field)`
  font-weight: 600;
  font-size: 14px;
  line-height: 1.29;

  color: ${props => props.theme.userInputTextColor};
  height: 42px;
  width: 100%;
  margin: 0px;
  padding-left: 14px;
  background-color: inherit;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  border-width: 1px;
  border-style: solid;
  border-color: ${props => {
    switch (props.status) {
      case 'error':
        return '#E74A3B';
      case 'default':
        return props => props.theme.userInputBorderColor;
      default:
        return;
    }
  }};
  border-radius: 8px;

  outline: none;

  :hover,
  :focus {
    border: 1px solid ${props => props.theme.userInputBorderHoverColor};
  }
  ${media('tablet', '')`
        font-size: 16px;
        line-height: 1.125;
        height: 46px;
        padding-left: 18px;

    `}
`;

export const Feedback = styled.div`

`;

export const ValidFeedback = styled.div`
  color: #3cbc81;
  font-size: 12px;
`;

export const InvalidFeedback = styled(ErrorMessage)`
  color: #da1414;
  font-size: 12px;
  margin-top: 5px;
`;

export const ValidationIcon = styled.span`
  border: none;
  background-color: transparent;
  position: absolute;
  right: 10px;
  top: 34px;
  font-size: x-large;
  ${media('desktop', '')`
        right: 13px;
    `}
`;

export const InvalidInputIcon = styled(ErrorIcon)`
  width: 24px;
  height: 24px;
  fill: ${props => props.theme.errorMessage};
`;
export const ValidInputIcon = styled(ValidIcon)`
  width: 24px;
  height: 24px;
  fill: ${props => props.theme.correctMessage};
`;
