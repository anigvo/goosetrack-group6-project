import styled from "@emotion/styled";
import { media } from 'utils/queries';

export const BoxBar = styled.div`
    border-radius: 20px;
    border: 0.8px solid #E3F3FF;  
    width: 100%;
    height: 100%;
    max-width: 307px;  
    max-height: 413px; 
    
    
     
    ${media('tablet', '')`
        border-radius: 29px;
        max-width: 640px;
        max-height: 424px;
            
    `}
    ${media('desktop', '')`   
        padding: 20px;     
        max-width: 860px;
        max-height: 440px;
    `}
`;

export const BoxPeriodPaginator = styled.div` 

     
    ${media('tablet', '')`
           
    `}
    ${media('desktop', '')`        
        
        
    `}
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