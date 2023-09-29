import styled from '@emotion/styled';

export const RegisterPageContainer = styled.div`
  display: flex;
  gap: 18px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #dcebf7;

  @media (min-width: 768px) {
    gap: 24px;
  }

  @media (min-width: 1440px) {
    background-image: url(../..asserts/images/loginpage-goose-form.png);
    background-repeat: no-repeat;
    background-position: 49px 100%;
  }
`;

// export default RegisterPageContainer;

