import styled from '@emotion/styled';
import { media } from 'utils/queries';

export const FeedbackBtn = styled.button`
    background-color: ${props => props.theme.btnBackgroundColor};
    color: ${props => props.theme.btnTextColor};
    border-radius: 10px;
    padding: 8px 20px;
    font-size: 12px;
    text-align: center;
    line-height: 1.33;
    font-weight: 600;
    border: none;
    font-family: 'Inter', sans-serif;
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover, &:focus {
        background-color: ${props => props.theme.btnHoverBackground};
    }
    ${media('tablet', '')`
        font-size: 14px;
        padding: 12px 32px;
        border-radius: 14px;
    `}
`
