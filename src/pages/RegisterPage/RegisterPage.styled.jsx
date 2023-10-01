import styled from '@emotion/styled';
import { media } from 'utils/queries';

export const RegisterPageContainer = styled.div`
  display: flex;
  gap: 18px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #dcebf7;

  ${media('tablet', '')`
    gap: 24px;
   `}

  ${media('desktop', '')`
    background-image: url('../../assets/images/loginpage-goose-form.png');
    background-repeat: no-repeat;
    background-position: 49px 100%;
    
    
    `}
  `;



