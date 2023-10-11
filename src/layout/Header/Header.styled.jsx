import styled from '@emotion/styled';
import { media } from 'utils/queries';

export const HeaderWrapper = styled.header`
padding-top: 24px;
display: flex;
justify-content: space-between;
${media('desktop', '')`
    padding-top: 41px;
`}
`

export const InfoWrapper = styled.div`
    display: flex;
    align-items: center;
`;


export const PageTitle = styled.h1`
    text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04), 0px 47px 355px rgba(0, 0, 0, 0.07);
font-size: 32px;
font-weight: 700;
color: ${props => props.theme.mainFont};
`;

export const TitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
`

export const MotivationWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 8px;
`

export const Motivation = styled.p`
font-family: 'Inter', sans-serif;
font-size: 14px;
font-weight: 600;
line-height: 1.2;
& > span {
    color: ${props => props.theme.btnBackgroundColor};
}
`

export const MotivationImg = styled.img`
width: 64px;
height: 64px;`