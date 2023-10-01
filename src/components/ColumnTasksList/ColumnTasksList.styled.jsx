import styled from "@emotion/styled";
import { media } from "utils/queries";

export const TasksList = styled.ul`
    display: flex;
    flex-direction: column;
    row-gap: 14px;
    overflow-y: auto;
    height: ${props => {
        if (props.tasksLength > 2) {
            return '30vh';
        } else {
            return 'fit-content';
        }
    }};
    margin-bottom: 10px;
    padding-right: 6px;
    ${media('tablet', '')`
    height: ${props => {
        if (props.tasksLength > 2) {
            return '60vh';
        } else {
            return 'fit-content';
        }
    }};
    `}
    &::-webkit-scrollbar {
        background-color: ${props => props.theme.taskScrollBarBackground};
        border-radius: 12px;
        width: 6px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.taskScrollbarColor};
        width: 6px;
        border-radius: 12px;
    }
`;
