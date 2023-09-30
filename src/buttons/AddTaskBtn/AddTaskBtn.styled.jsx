import styled from '@emotion/styled';
import { ReactComponent as Plus } from '../../assets/icons/plus.svg';

export const Button = styled.button`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-top: 16px;
    padding-bottom: 16px;
    gap: 8px;
    color: ${props => props.theme.mainFont};
    background-color: ${props => props.theme.addTaskBtnBackground};
    border: 1px dashed ${props => props.theme.addTaskBtnBorder};
    border-radius: 8px;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.28;
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover, &:focus {
        background-color: ${props => props.theme.addTaskBtnHover};
    }
`

export const AddIcon = styled(Plus)`
stroke: ${props => props.theme.mainFont};
width: 24px;
height: 24px;
`