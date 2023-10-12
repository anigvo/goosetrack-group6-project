import styled from '@emotion/styled';
import { media } from 'utils/queries';
import { motion } from 'framer-motion';

export const Aside = styled(motion.aside)`
background-color: ${props => props.theme.sidebarBackground};
color: ${props => props.theme.sidebarText};
padding-left: 24px;
padding-right: 24px;
display: flex;
flex-direction: column;
justify-content: space-between;
height: 100vh;
${media('', 'tabletMax')`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 999;
`}
${media('tablet', 'tabletMax')`
    padding-left: 32px;
    padding-right: 32px;
`}
${media('desktop', '')`
    width: 290px;
    position: sticky;
    top: 0;
    bottom: 0;
    left: 0;
`}
`

export const LogoWrapper = styled.div`
display: flex;
align-items: center;
gap: 6px;
margin-bottom: 50px;
margin-top: 20px;
${media('desktop', '')`
    margin-bottom: 32px;
    `}
`;

export const Logo = styled.img`
width: 60px;
height: 60px;
${media('desktop', '')`
    width: 71px;
    height: 68px;
`}
`;

export const Title = styled.p`
color: ${props => props.theme.logoTextColor};
text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04), 0px 47px 355px rgba(0, 0, 0, 0.07);
font-size: 16px;
font-weight: 700;
line-height: 1.5;
display: flex;
${media('desktop', '')`
    font-size: 24px;
    line-height: normal;
`}
`;


export const TitleOutline = styled.span`
font-style: italic;
transform: translateX(-1px);
${media('desktop', '')`
    transform: translateX(-2px);
`}
`;


export const CloseBtn = styled.button`
& > svg {
    width: 24px;
    height: 24px;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    ${media('tablet', '')`
        width: 34px;
        height: 34px;
    `}
}
&:hover, &:focus {
    stroke: ${props => props.theme.btnBackgroundColor};
}
stroke: ${props => props.theme.headerUsernameText};
background-color: transparent;
border: none;
padding: 0;
cursor: pointer;
${media('desktop', '')`
    display: none;
    pointer-events: none;
`}
`;

