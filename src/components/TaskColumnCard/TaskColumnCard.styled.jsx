import styled from '@emotion/styled';
import { media } from 'utils/queries';

export const Task = styled.li`
    border-radius: 8px;
    padding: 14px 13px 18px;
    background-color: ${props => props.theme.taskBackground};
    border: 1px solid ${props => props.theme.taskBorderColor};
    display: flex;
    flex-direction: column;
    gap: 28px;
`

export const TaskTitle = styled.p`
text-overflow: ellipsis;
overflow: hidden;
white-space: nowrap;
font-size: 14px;
font-weight: 500;
line-height: 1.28;
`

export const TaskOwner = styled.img`
border: 1.8px solid ${props => props.theme.userAvatarBorder};
border-radius: 50%;
width: 32px;
height: 32px;
object-fit: cover;
`

export const TaskPriority = styled.p`
text-transform: capitalize;
color: ${props => props.theme.taskPriorityTextColor};
background-color: ${props => {
    switch (props.priority) {
        case 'low':
            return props.theme.taskLowPriority;
        case 'medium':
            return props.theme.taskMediumPriority;
        case 'high':
            return props.theme.taskHighPriority;
        default:
            return props.theme.mainFont;
    }
}};
font-size: 10px;
font-weight: 600;
line-height: 1.2;
padding: 4px 12px;
border-radius: 4px;
`;

export const TaskFeatures = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: end;
`;

export const TaskSettings = styled.div`
display: flex;
flex-direction: row;
align-items: end;
gap: 8px;
`;

