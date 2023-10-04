import styled from '@emotion/styled';
import { media } from 'utils/queries';

export const LayoutWrapper = styled.div`
padding-left: 20px;
padding-right: 20px;
max-width: 375px;
margin: 0 auto;
height: 100%;
${media('tablet', '')`
    max-width: 768px;
    padding-left: 32px;
    padding-right: 32px;
`}
${media('desktop', '')`
    padding: 0;
    max-width: 1440px;
    display: flex;
    flex-direction: row;
    width: 100%;
`}
`;

export const MainContent = styled.div`
    width: 100%;
    ${media('desktop', '')`
        padding-left: 32px;
        padding-right: 32px;
    `}
`;

export const OutletWrapper = styled.div`
    padding-top: 64px;
    padding-bottom: 40px;
    ${media('desktop', '')`
        padding-top: 32px;
        padding-bottom: 32px;
    `}
`;

