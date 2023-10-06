//  // кольори сторінки юзера
//  //  userAvatarBackground: '#FFFFFF',
// //   userAvatarBorder: '#3E85F3',
// //   userAvatarInsideBackground: '#F8F8F8',
// //   userNameTextColor: '#343434',
// //   userInputLabelColor: '#111111',
// //   userInputBorderColor: 'rgba(17, 17, 17, 0.15)',
// //   userInputTextColor: '#111111',
// //   userFillCollor: rgba(62, 133, 243, 0.18);

// //  userAvatarBackground: '#21222C',
// //   userAvatarBorder: '#3E85F3',
// //   userAvatarInsideBackground: '#171820',
// //   userNameTextColor: '#FFFFFF',
// //   userInputLabelColor: 'rgba(250, 250, 250, 0.3)',
// //   userInputBorderColor: 'rgba(255, 255, 255, 0.15)',
// //     userInputTextColor: '#FFFFFF',
// //   userFillCollor: rgba(255, 255, 255, 0.18);

// // кольори кнопок (однакові на темній та світлій темах)
// //   btnBackgroundColor: '#3E85F3',
// //   btnTextColor: '#FFFFFF',
// //     btnHoverBackground: '#2B78EF',

// import styled from "@emotion/styled";
// import { media } from 'utils/queries';
// import { ErrorMessage, Field } from 'formik';
// import { ReactComponent as UpdateAvatarIcon } from '../../assets/icons/plus.svg';
// import { ReactComponent as ErrorIcon } from '../../assets/icons/error.svg';
// import { ReactComponent as ValidIcon } from '../../assets/icons/valid.svg';

// export const AddAvatarContainer = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     gap: 18px;

//     ${media('tablet', '')`
//         gap: 14px;
//     `}
// `;
// export const AvatarContainer = styled.div`
//     width: 72px;
//     height: 76px;
//     position: absolute;

//      ${media('tablet', '')`
//         width: 124px;
//         height: 130px;
//         position: static;
//     `}
// `;

// export const AvatarBox = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     width: 72px;
//     height: 72px;
//     border-radius: 50%;
//     border: 2px solid ${props => props.theme.userAvatarBorder};
//     background-color: ${props => props.theme.userAvatarInsideBackground};
//     overflow: hidden;
//     position: absolute;
//     bottom: 99px;

//      ${media('tablet', '')`
//         width: 124px;
//         height: 124px;
//         position: static;
//     `}
// `;

// export const Avatar = styled.img`
//     width: 30px;
//     height: 30px;
//     object-fit: cover;
//     fill: ${props => props.theme.userFillCollor};

//     ${media('tablet', '')`
//         width: 48px;
//         height: 48px;
//     `}
// `;

// export const AddImageBox = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: center;

//     background-color: ${props => props.theme.btnBackgroundColor};
//     overflow: hidden;
//     width: 14px;
//     height: 14px;
//     border-radius: 50%;
//     position: relative;
//     left: 43px;
//     bottom: 32px;

//     ${media('tablet', '')`
//         width: 24px;
//         height: 24px;
//         left: 79px;
//         bottom: 20px;
//     `}
// `;

// export const AddImage = styled.img`
//     width: 8px;
//     height: 8px;

//     ${media('tablet', '')`
//         width: 18px;
//         height: 18px;
//     `}
// `;

// export const UserInfo = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
// `;

// export const UserName = styled.h2`
// font-size: 14px;
// font-weight: 700;
// line-height: 1.29;

// margin-bottom: 4px;
// color: ${props => props.theme.userNameTextColor};

// ${media('tablet', '')`
//     font-size: 18px;
//     line-height: 1.0;

//     margin-bottom: 8px;
// `}
// `;

// export const Position = styled.p`
// font-size: 12px;
// font-weight: 600;
// line-height: 1.17;
// color: ${props => props.theme.userInputLabelColor};

//  ${media('tablet', '')`
//     font-size: 14px;
//     line-height: 1.29;
// `}
// `;

// export const UserFormWrap = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     gap: 88px;
//     width: 100%;
// `;

// export const BoxAllInputs = styled.div`
//     display: flex;
//     flex-direction: column;
//     gap: 18px;

//     ${media('tablet', '')`
//         gap: 24px;
//     `}

//     ${media('desktop', '')`
//         flex-direction: row;
//         gap: 50px;
//     `}
// `;

// export const ContainerInputs = styled.div`
//     display: flex;
//     flex-direction: column;
//     gap: 18px;
//     width: 299px;

//     ${media('tablet', '')`
//         gap: 24px;
//         width: 354px;
//     `}
// `;

// export const BoxInput = styled.div`
// `;

// export const InputTitle = styled.h2`
// font-size: 12px;
// line-height: 1.17;
// margin-bottom: 8px;
// color: ${props => props.theme.userInputLabelColor};

// ${media('tablet', '')`
//     font-size: 14px;
//     line-height: 1.29;
// `}
// `;

// export const Input = styled.input`
//     font-size: 14px;
//     font-weight: 600;
//     line-height: 1.29;

//     background-color: inherit;
//     border-radius: 8px;
//     border: 1px solid ${props => props.theme.userInputBorderColor};
//     height: 42px;
//     width: 100%;
//     padding-left: 14px;

//     cursor: pointer;
//     color: ${props => props.theme.userInputTextColor};

//     :hover,
//     :focus {
//         border: 1px solid ${props => props.theme.userInputBorderHoverColor};
//     }

//  ${media('tablet', '')`
//     font-size: 16px;
//     line-height: 1.125;
//     height: 46px;
//     padding-left: 18px;

// `}
// `;

// export const Button = styled.button`
//     font-size: 14px;
//     font-weight: 600;
//     line-height: 1.29;

//     border: none;
//     font: inherit;
//     cursor: pointer;

//     width: 195px;
//     height: 46px;
//     padding: 0 8px;
//     margin-top: 44px;
//     border-radius: 16px;

//     color: ${props => props.theme.btnTextColor};
//     background-color: ${props => props.theme.btnBackgroundColor};

//     ${media('tablet', '')`
//         width: 262px;
//         height: 48px;
//     `};

//     :hover,
//     :focus {
//         background: ${props => props.theme.btnHoverBackground};
//         box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
//     }
// `;

//  // кольори сторінки юзера
//  //  userAvatarBackground: '#FFFFFF',
// //   userAvatarBorder: '#3E85F3',
// //   userAvatarInsideBackground: '#F8F8F8',
// //   userNameTextColor: '#343434',
// //   userInputLabelColor: '#111111',
// //   userInputBorderColor: 'rgba(17, 17, 17, 0.15)',
// //   userInputTextColor: '#111111',
// //   userFillCollor: rgba(62, 133, 243, 0.18);

// //  userAvatarBackground: '#21222C',
// //   userAvatarBorder: '#3E85F3',
// //   userAvatarInsideBackground: '#171820',
// //   userNameTextColor: '#FFFFFF',
// //   userInputLabelColor: 'rgba(250, 250, 250, 0.3)',
// //   userInputBorderColor: 'rgba(255, 255, 255, 0.15)',
// //     userInputTextColor: '#FFFFFF',
// //   userFillCollor: rgba(255, 255, 255, 0.18);

// // кольори кнопок (однакові на темній та світлій темах)
// //   btnBackgroundColor: '#3E85F3',
// //   btnTextColor: '#FFFFFF',
// //     btnHoverBackground: '#2B78EF',

import { media } from 'utils/queries';
import styled from '@emotion/styled';
import { ErrorMessage, Field } from 'formik';
import { ReactComponent as UpdateAvatarIcon } from '../../assets/icons/add-avatar.svg';
import { ReactComponent as ErrorIcon } from '../../assets/icons/error.svg';
import { ReactComponent as ValidIcon } from '../../assets/icons/valid.svg';
import { ReactComponent as ChevronDown } from '../../assets/icons/chevron-down.svg';

export const UserSection = styled.section``;
// display: flex;
//   width: 100%;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   padding: 0 18px 40px 18px;
//   margin-top: 64px;
//   margin-bottom: 40px;
//   background-color: #ffffff;
//   border-radius: 16px;

//   ${media('tablet', '')`
//         margin-top: 64px;
//         padding-top: 40px
//         display: flex;
//         padding: 40px 175px 40px 175px;
//     `};
//     ${media('desktop', '')`
//         width: inherit;
//         padding: 60px 165px 60px 165px;
//         margin-top: 32px;
//         margin-bottom: 32px;
//     `}

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
  border: 2px solid #3e85f3;
  border-radius: 50%;
  // -o-object-fit: cover;
  // object-fit: cover;
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

  background-color: #3e85f3;

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
  //   position: absolute;
  fill: #fff;
  width: 8px;
  height: 8px;

  //   bottom: 13px;
  //   left: 45px;
  cursor: pointer;
  //   z-index: 1;

  :hover {
    fill: #fff;
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

export const BoxInput = styled.div``;

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
  color: #3cbc81;
  font-size: 12px;
`;
export const IconDown = styled(ChevronDown)`
  stroke: ${props => props.theme.userShevronDovn};
`;
export const InvalidFeedback = styled(ErrorMessage)`
  color: #da1414;
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
  fill: #e74a3b;
`;
export const ValidInputIcon = styled(ValidIcon)`
  width: 24px;
  height: 24px;
  fill: #3cbc81;
`;
