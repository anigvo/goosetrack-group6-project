import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ReactComponent as Trash } from '../../assets/icons/trash.svg';
import { ReactComponent as Pencil } from '../../assets/icons/pencil.svg';
import { ReactComponent as Arrow } from '../../assets/icons/arrow.svg';
import { motion } from 'framer-motion';
import { media } from 'utils/queries';


export const Wrapper = styled.div`
    position: relative;
`
export const ToolList = styled.ul`
display: flex;
flex-direction: row;
align-items: end;
gap: 10px;
position: relative;
`;

export const OtherOptions = styled(motion.div)`
    background-color: ${props => props.theme.taskBackground};
    border-radius: 8px;
    padding: 14px;
    position: absolute;
    top: 26px;
    left: 50%;
    z-index: 99;
    transform: translateX(-70%);
    min-width: 115px;
    box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.10);
    border: 1px solid ${props => props.theme.toolBorder};
    ${media('tablet', '')`
        padding: 20px 24px;
        min-width: 147px;
    `}
`;

export const Options = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 14px;
`;

export const OptionButton = styled.button`
    background-color: transparent;
    border: none;
    padding: 0;
`

export const Option = styled.li`
    color: ${props => props.theme.calendarTextColor};
font-size: 12px;
font-weight: 500;
line-height: 1.16;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
cursor: pointer;
transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
&:hover, &:focus, &:active {
    color: ${props => props.theme.btnBackgroundColor};
    & > svg {
        stroke: ${props => props.theme.btnBackgroundColor};
    }
}
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