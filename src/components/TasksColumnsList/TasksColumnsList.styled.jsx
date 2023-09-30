import styled from '@emotion/styled';
import { media } from 'utils/queries';

export const ColumnList = styled.ul`
    display: flex;
    overflow-x: scroll;
    gap: 16px;
    flex-direction: row;
    padding-bottom: 34px;
    &::-webkit-scrollbar {
        background-color: ${props => props.theme.taskScrollBarBackfround};
        border-radius: 12px;
        width: 12px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.taskScrollbarColor};
        width: 12px;
        border-radius: 12px;
    }
    ${media('desktop', '')`
        gap: 27px;
        overflow: auto;
    `}
`