import styled from "@emotion/styled";
import { media } from 'utils/queries';

export const BoxBar = styled.div`
  border-radius: 20px;
  border: 0.8px solid ${props => props.theme.chartBorderColor};

  //   border: 0.8px solid #e3f3ff;
  width: 100%;
  height: 100%;
  max-width: 307px;
  height: 413px;
  padding: 40px 14px;

  ${media('tablet', '')`
        padding: 32px;
        border-radius: 29px;
        max-width: 640px;
        height: 424px;
        
            
    `}
  ${media('desktop', '')`   
        padding: 40px;     
        max-width: 860px;
        height: 440px;
    `}
`;

export const BoxPeriodPaginator = styled.div` 

`;
export const ConteinerData = styled.div` 
   display: flex;
   flex-direction: column;
  
   padding: 0 40px 40px;

     
    ${media('tablet', '')`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0 40px 40px;
     `}
    ${media('desktop', '')`        
        
        
    `}
`;