import { media } from 'utils/queries';
import styled from '@emotion/styled';
import { ErrorMessage, Field } from 'formik';
import { ReactComponent as UpdateAvatarIcon } from '../../assets/icons/add-avatar.svg';
import { ReactComponent as ErrorIcon } from '../../assets/icons/error.svg';
import { ReactComponent as ValidIcon } from '../../assets/icons/valid.svg';
import { ReactComponent as ChevronDown } from '../../assets/icons/chevron-down.svg';

export const UserSection = styled.div`
  //   display: flex;
`;

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
  position: absolute;
  top: 110px;
  width: 72px;
  height: 72px;
  border: 2px solid ${props => props.theme.userAvatarBorder};
  border-radius: 50%;
  background-color: ${props => props.theme.userAvatarInsideBackground};

  ${media('tablet', '')`
        margin-bottom: 20px;
        position: static;
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

  background-color: ${props => props.theme.userAvatarBorder};

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
  width: 8px;
  height: 8px;
  
  cursor: pointer;
//   :hover {
//     fill: #fff;
  }
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
      case 'valid':
        return '#3CBC81';
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
export const BoxInput = styled.div`
  //   position:;
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
  border: ${p => {
    switch (p.status) {
      case 'error':
        return '1px solid #E74A3B';
      case 'valid':
        return '1px solid #3CBC81';
      default:
        return;
    }
  }};
  border: 1px solid ${props => props.theme.userInputBorderColor};
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

export const DataIconWrap = styled.span`
  border: none;
  background-color: transparent;
  position: absolute;
  right: 10px;
  top: 31px;
  font-size: x-large;

  ${media('desktop', '')`
        right: 13px;
    `}
`;

export const Feedback = styled.div`
  //   height: 25px;
  //   margin-top: 8px;
  //   margin-left: 10px;
`;

export const ValidFeedback = styled.div`
  color: ${props => props.theme.correctMessage};
  font-size: 12px;
`;
export const IconDown = styled(ChevronDown)`
  stroke: ${props => props.theme.userShevronDovn};
`;
export const InvalidFeedback = styled(ErrorMessage)`
  color: ${props => props.theme.errorMessage};
  font-size: 12px;
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
