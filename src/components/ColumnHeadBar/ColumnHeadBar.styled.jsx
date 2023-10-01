import styled from '@emotion/styled';
import { ReactComponent as Circle } from '../../assets/icons/add.svg';
import { media } from 'utils/queries';

export const IconTaskAdd = styled.button`
    background-color: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
`

export const CircleIcon = styled(Circle)`
    stroke: ${props => props.theme.mainFont};
    width: 22px;
    height: 22px;
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover, &:focus {
            stroke: ${props => props.theme.btnHoverBackground};
    }
    ${media('tablet', '')`
        width: 24px;
        height: 24px;
    `}
`

export const GroupName = styled.p`
    font-size: 18px;
    font-weight: 700;
    line-height: 1.11; 
    ${media('tablet', '')`
        font-size: 20px;
        line-height: 1.2;
    `}
`

export const ColumnHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 24px;
    ${media('tablet', '')`
        margin-bottom: 28px;
    `}
`;

