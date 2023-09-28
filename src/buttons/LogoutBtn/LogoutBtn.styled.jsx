import styled from '@emotion/styled';
import { media } from '../../utils/queries';

export const LogBtn = styled.button`
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.28;
    letter-spacing: -0.36px;
    color: ${props => props.theme.btnTextColor};
    background-color: ${props => props.theme.btnBackgroundColor};
    border-radius: 16px;
    box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
    border: none;
    padding: 14px 28.5px;
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 20px;
    width: max-content;
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    & > svg {
        width: 20px;
        height: 20px;
        stroke: ${props => props.theme.btnTextColor};
    }
    &:hover, &:focus {
        background-color: ${props => props.theme.btnHoverBackground};
    }
        ${media('tablet', '')`
            font-size: 18px;
            gap: 11px;
            padding: 16px 23px;
            line-height: 1.33;
            margi-bottom: 24px;
        `}
`;
