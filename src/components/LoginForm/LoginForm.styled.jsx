// import styled from '@emotion/styled';

// export const LoginContainer = styled.div`
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
//   background: var(--color-white);
// `;

// export const Title = styled.h1`
//   margin: 0 0 32px 0;
//   color: var(--color-blue);
//   text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
//     0px 47px 355px rgba(0, 0, 0, 0.07);
//   font-family: Inter;
//   font-size: 18px;
//   font-weight: 600;
//   line-height: 1.3;
// `;

// export const StyledForm = styled(Form)`
//   display: flex;
//   flex-direction: column;
// `;

// export const Label = styled.label`
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   gap: 8px;
//   color: var(--color-black);
//   font-size: 12px;
//   font-weight: 600;
//   font-family: Inter;
//   line-height: 1.28;
//   &:not(:last-child) {
//     margin-bottom: 24px;
//   }
//   ${({ last }) =>
//     last &&
//     `
//     margin-bottom: 34px;
//   `}
// `;

// export const Input = styled.input`
//   height: 46px;
//   padding: 0 14px;
//   border-radius: 8px;
//   border: 1px solid rgba(220, 227, 229, 0.6);
//   background-color: var(--color-white);
//   color: var(--color-black);
//   font-size: 14px;
//   font-family: Inter;
//   line-height: 1.28;
//   &::placeholder {
//     color: var(--input-placeholder-color);
//     font-size: 14px;
//     font-family: Inter;
//     line-height: 1.28;
//   }
//   &:hover,
//   &:focus {
//     border: 1px solid var(--color-blue);
//   }
//   ${({ type }) =>
//     type === 'password' &&
//     `
//     font-size: 16px;
//     line-height: 1.12;
//     padding: 0 18px;
//     height: 54px;
//     &::placeholder {
//       font-size: 16px;
//       line-height: 1.12;
//     }
//   `}
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
//   background: var(--color-blue);
//   box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
//   color: var(--color-white);
//   font-size: 14px;
//   font-family: Inter;
//   font-weight: 600;
//   line-height: 1.28;
//   letter-spacing: -0.36px;
//   &:hover,
//   &:focus {
//     background-color: #236ede;
//     transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
//   }
//   ${({ google }) =>
//     google &&
//     `
//     height: 45px;
//     background-color: #ffffff;
//     color: var(--color-blue);
//     &:hover,
//     &:focus {
//       background-color: #2b79ef48;
//       transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
//     }
//   `}
// `;

// export const ErrorMessage = styled.div`
//   position: absolute;
//   margin: 0;
//   padding: 0;
//   top: 72px;
//   z-index: 10;
//   color: var(--color-task-high);
//   font-family: Inter;
//   font-size: 12px;
//   font-weight: 200;
//   line-height: 1.28;
//   ${({ last }) =>
//     last &&
//     `
//     top: 84px;
//     font-size: 12.5px;
//   `}
// `;

// // export const ValidIcon = styled.div`
// //   position: absolute;
// //   top: 41px;
// //   right: 15px;
// //   color: var(--green-color);
// // `;

// // export const InvalidIcon = styled.div`
// //   position: absolute;
// //   top: 41px;
// //   right: 15px;
// //   color: var(--color-task-high);
// // `;

// // export const iconStyle = css`
// //   width: 18px;
// //   height: 18px;
// //   fill: transparent;
// //   stroke: #ffffff;
// // `;


