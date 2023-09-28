import styled from '@emotion/styled';
import { media } from 'utils/queries';
import { ReactComponent as Burger } from "../../assets/icons/menu.svg";

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

export const MobileMenuBtn = styled.button`
    background-color: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
`;

export const BurgerIcon = styled(Burger)`
    stroke: ${props => props.theme.mainFont};
    width: 24px;
    height: 24px;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover, &:focus {
        stroke: ${props => props.theme.btnHoverBackground};
    }
    ${media('tablet', '')`
        width: 34px;
        height: 34px;
    `}
    ${media('desktop', '')`
        pointer-events; none;
        display: none;
    `}
`;


export const PageTitle = styled.h1`
    text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04), 0px 47px 355px rgba(0, 0, 0, 0.07);
font-size: 32px;
font-weight: 700;
color: ${props => props.theme.mainFont};
`;
