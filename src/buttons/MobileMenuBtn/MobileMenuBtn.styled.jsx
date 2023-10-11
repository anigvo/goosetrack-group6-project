import styled from '@emotion/styled';
import { ReactComponent as Burger } from "../../assets/icons/menu.svg";
import { media } from 'utils/queries';

export const Button = styled.button`
    background-color: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
    &:disabled > svg {
        stroke: ${props => props.theme.mainFont}; 
    }
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