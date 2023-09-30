import styled from 'styled-components';

export const MainPageContainer = styled.div`
  padding: 0px 20px;
  margin: auto;
  
  @media screen and (min-width: 375px ) {
    padding: 0px 32px;
    max-width: 375px;
    
  }
  
  @media screen and (min-width: 768px) {
    padding: 0px 32px;
    max-width: 768px;
  }
  @media screen and (min-width: 1440px) {
    padding: 0px 128px;
    max-width: 1440px;
  }
`;