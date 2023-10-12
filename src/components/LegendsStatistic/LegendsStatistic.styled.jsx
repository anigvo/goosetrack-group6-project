import styled from '@emotion/styled';
import { media } from 'utils/queries';

export const LegendsBox = styled.div`
  display: flex;
  gap: 20px;
`;
export const Legend = styled.div`
  font-size: 14px;
  line-height: 1.29;

  color: ${props => props.theme.statisticsTextColor};

  display: flex;
  align-items: center;
  ${media('tablet', '')`
  font-size: 16px;
  line-height: 1.13;
  `}
  ${media('desktop', '')` 
  `}
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
