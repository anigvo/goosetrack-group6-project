import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ReactComponent as Trash } from '../../assets/icons/trash.svg';
import { ReactComponent as Pencil } from '../../assets/icons/pencil.svg';
import { ReactComponent as Arrow } from '../../assets/icons/arrow.svg';
import { motion } from 'framer-motion';

export const ToolList = styled.ul`
display: flex;
flex-direction: row;
align-items: end;
gap: 10px;
`;

export const Tool = styled.li`
position: relative;
`;

export const OtherOptions = styled(motion.div)`
    background-color: ${props => props.theme.calendarBackground};
    border-radius: 8px;
    padding: 14px;
    position: absolute;
    top: 26px;
    left: 50%;
    transform: translateX(-50%);
    min-width: 115px;
`;

export const Options = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 14px;
`;

export const Option = styled.li`
    color: ${props => props.theme.calendarTextColor};
font-size: 12px;
font-weight: 500;
line-height: 1.16;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
`;


const styledIcon = ({ theme }) => css`
transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
cursor: pointer;
stroke: ${theme.mainFont};
width: 16px;
height: 16px;
&:hover, &:focus, &:active {
    stroke: ${theme.btnBackgroundColor};
}
`

export const TrashIcon = styled(Trash)`
    ${styledIcon}
`;

export const PencilIcon = styled(Pencil)`
    ${styledIcon}
`;

export const ArrowIcon = styled(Arrow)`
    ${styledIcon}
`;