import styled from "@emotion/styled";
import { media } from 'utils/queries';

export const BoxStatistics = styled.div` 
    max-width: 335px;        
    background-color: ${props => props.theme.userAvatarBackground};
   
    border-radius: 16px;
    padding: 128px 14px 175px 14px;
    width: 100%;
    ${media('tablet', '')`
        max-width: 704px;
        padding: 132px 64px 224px 64px;
    `}
    ${media('desktop', '')`        
        max-width: 1087px;
        max-height: 752px; 
        padding: 134px 114px 104px 114px;     
    `}
`;



