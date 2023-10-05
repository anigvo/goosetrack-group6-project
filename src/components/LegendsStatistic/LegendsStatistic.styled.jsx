import styled from "@emotion/styled";
import { media } from 'utils/queries';

export const LegendsBox = styled.div`
  display: flex;
gap: 20px;

  
`;
export const Legend = styled.div`


display: flex;
  
  align-items: center;
`;

  export const LegendColor = styled.div`
    width: 8px;
    height: 8px;
    margin-right: 10px;
    border-radius: 50%;
    ${media('tablet', '')`
  `}
    ${media('desktop', '')` 
  `}
`;

 