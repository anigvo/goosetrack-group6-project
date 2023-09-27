import styled from '@emotion/styled';
import { media } from '../../utils/queries';

const H1 = styled.h1`
  width: 100%;
  ${media('', 'mobileSmallMax')`
    color: red;
  `}
  ${media('mobile', 'mobileMax')`
    color: blue;
  `}
  ${media('tablet', 'tabletMax')`
    color: green;
  `}
  ${media('desktop', '')`
    color: yellow;
  `}
`;
export { H1 };
