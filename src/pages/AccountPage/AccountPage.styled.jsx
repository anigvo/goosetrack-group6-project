import styled from "@emotion/styled";
import { media } from 'utils/queries';

export const BoxUserProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 335px;
  padding: 59px 18px 40px 18px;
  background-color: ${props => props.theme.userAvatarBackground};
  border-radius: 16px;
  gap: 40px;
  width: 100%;
  margin: 31px auto 0;
  position: relative;

  ${media('tablet', '')`
  position: static;
        max-width: 704px;
        padding: 40px 175px; 
        margin: 0 auto;   
        position: static;     
    `}
  ${media('desktop', '')`        
        max-width: 1087px;
        max-height: 752px;
        
        gap: 44px;
        padding: 60px 165px;
        
    `}
`;