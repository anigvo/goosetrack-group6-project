import styled from '@emotion/styled';
import { Field, ErrorMessage } from 'formik';

export const ContainerForm = styled.div`
    width: 100%;
    max-width: 480px;
    max-height: 521px;
    padding: 40px;
    border-radius: 8px;
    background-color: #fff;
`;

export const Title = styled.h1`
    margin-bottom: 40px;
    color: #3e85f3;
    text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
        0px 47px 355px rgba(0, 0, 0, 0.07);
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; 
`;

export const Label = styled.label`
    position: relative;
`;

export const Span = styled.span`
    display: block;
    color: #111;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    margin-bottom: 8px;
`;

export const InputForm = styled(Field)`
    width: 100%;
    padding: 18px;
    border-radius: 8px;
    border: 1px solid rgba(220, 227, 229, 0.6);

    color: #111;
    outline: none;
    font-family: Inter;
    margin-bottom: 18px;

    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px; 

    &:hover,
    &:focus {
        border: 1px solid #3e85f3;
    }

    ::placeholder {
        color: #dce3e5;
        font-weight: 400;
    }

        &.is-valid {
        border: 1px solid green;
        background-color: rgba(15, 216, 102, 0.038);
      }
    
      &.is-invalid {
        border: 1px solid rgba(240, 8, 8, 0.6);
        background-color: rgba(240, 8, 8, 0.045);
      }
    ';
`;

export const InputFormMargin0 = styled(InputForm)`
    margin-bottom: 0;
`;

export const Button = styled.button`
    margin-top: 48px;
    display: flex;
    width: 400px;
    padding: 16px 152px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 11px;
    border: none;
    outline: none;

    border-radius: 16px;
    background: #3e85f3;
    box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);

    color: #fff;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; 
    letter-spacing: -0.36px;
`;

export const Svg = styled.svg`
    stroke: white;
    fill: #3e85f3;
`;

export const Error = styled(ErrorMessage)`
    position: absolute;
    bottom: -37px;
    left: 0;
    margin-left: 18px;
    margin-top: 8px;
    color: #da1414;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px; 
`;

// import styled from '@emotion/styled';
// import { css } from '@emotion/react';
// import {ReactComponent as LoginIcon} from '../../assets/icons/login-icon.svg';
// import {ReactComponent as Error} from '../../assets/icons/error.svg';
// import {ReactComponent as Done} from '../../assets/icons/done.svg';
// import { media } from 'utils/queries';

// export const RegisterContainer = styled.div`
//   display: flex;
//   width: 100%;
//   justify-content: center;
//   align-items: center;
// `;

// export const Container = styled.div`
//   width: 375px;
//   border-radius: 8px;
//   padding: 40px 24px;
//   margin: 0 20px;
//   background:  #ffffff;
// `;

// export const Title = styled.h1`
//   margin: 0 0 32px 0;
//   color: #3e85f3;
//   text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
//     0px 47px 355px rgba(0, 0, 0, 0.07);
//   font-family: 'Inter', sans-serif;
//   font-size: 18px;
//   font-weight: 600;
//   line-height: 1.3;
// `;

// export const StyledForm = styled.form`
//   display: flex;
//   flex-direction: column;
// `;

// export const Label = styled.label`
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   gap: 8px;
//   color: #13151a;
//   font-size: 12px;
//   font-weight: 600;
//   font-family: 'Inter', sans-serif;
//   line-height: 1.28;
//   margin-bottom: ${(props) => (props.last ? '34px' : '24px')};
// `;

// export const Input = styled.input`
//   height: 46px;
//   padding: 0 14px;
//   border-radius: 8px;
//   border: 1px solid rgba(220, 227, 229, 0.6);
//   background-color:  #ffffff;
//   color: #13151a;
//   font-size: 14px;
//   font-family: 'Inter', sans-serif;
//   line-height: 1.28;

//   ::placeholder {
//     color:  #dce3e5;
//     font-size: 14px;
//     font-family: Inter;
//     line-height: 1.28;
//   }

//   :hover,
//   :focus {
//     border: 1px solid #3e85f3;
//   }

//   &.is-valid {
//     border: 1px solid green;
//     background-color: rgba(15, 216, 102, 0.038);
//   }

//   &.is-invalid {
//     border: 1px solid rgba(240, 8, 8, 0.6);
//     background-color: rgba(240, 8, 8, 0.045);
//   }
// ';

// // export const validIconStyles = css`
// //   position: absolute;
// //   top: 41px;
// //   right: 15px;
// //   color: green;
// // `;



// // export const InvalidIcon = styled(FiAlertCircle)`
// //   position: absolute;
// //   top: 41px;
// //   right: 15px;
// //   color: var(--color-task-high);
// // `;

// export const ErrorMessage = styled.div`
//   position: absolute;
//   margin: 0;
//   padding: 0;
//   top: 71px;
//   z-index: 10;    
//   color: var(--color-task-high);
//   font-family: Inter;
//   font-size: 11px;
//   font-weight: 200;
//   line-height: 1.28;
// `; 

// export const Togle = styled.span`
//   position: absolute;
//   top: 41px;
//   right: 34px;
//   cursor: pointer;
// `;

// export const ButtonContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 8px;
// `;

// export const Button = styled.button`
//   width: 100%;
//   height: 46px;
//   padding: 14px 0;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 10px;
//   cursor: pointer;
//   border: none;
//   border-radius: 16px;
//   background: #3e85f3;
//   box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
//   color: #ffffff;
//   font-size: 14px;
//   font-family: Inter, sans-serif;
//   font-weight: 600;
//   line-height: 1.28;
//   letter-spacing: -0.36px;
//   text-decoration: none;
//   :hover,
//   :focus {
//     background-color: #2571e2;
//     transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
//   }
// `;


// const styledIcon = css`
//     width: 20px;
//     height: 20px;
//     ${media('desktop', '')`
//     width: 24px;
//     height: 24px;
//     `}
// `

// export const SingUpIcon = styled(LoginIcon)`
//     ${styledIcon}
//     `; 

//     export const ValidIconStyled = styled(Done)`
//     ${styledIcon}
// `;

// export const InvalidIconStyled = styled(Error)`
//     ${styledIcon}
// `;


