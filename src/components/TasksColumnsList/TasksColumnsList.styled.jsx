import styled from '@emotion/styled';
import { media } from 'utils/queries';

export const ColumnList = styled.ul`
    display: flex;
    overflow-x: scroll;
    gap: 16px;
    flex-direction: row;
    padding-bottom: 34px;
    &::-webkit-scrollbar {
        background-color: ${props => props.theme.taskScrollBarBackground};
        border-radius: 12px;
        height: 12px;
        ${media('tablet', '')`
            height: 14px;
        `}
    }
    &::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.taskScrollbarColor};
        height: 12px;
        border-radius: 12px;
        ${media('tablet', '')`
            height: 14px;
        `}
    }
    ${media('desktop', '')`
        gap: 27px;
        overflow: auto;
        padding-bottom: 0px;
    `}
`