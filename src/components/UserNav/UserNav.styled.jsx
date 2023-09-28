import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as UserIcon } from '../../assets/icons/user-check.svg';
import { ReactComponent as CalendarIcon } from '../../assets/icons/calendar-check.svg';
import { ReactComponent as Statistic } from '../../assets/icons/chart.svg';
import { media } from 'utils/queries';

export const Menu = styled.nav`
display: flex;
flex-direction: column;
gap: 18px;
${media('tablet', '')`
    gap: 16px;
`}
`;

export const MenuTitle = styled.p`
font-size: 12px;
margin-bottom: 24px;
font-weight: 600;
${media('tablet', '')`
font-size: 14px;
margin-bottom: 32px;
`}
`;

export const PageLink = styled(NavLink)`
color: ${props => props.theme.sidebarText};
font-size: 14px;
font-weight: 600;
border-radius: 8px;
padding: 10px 14px;
display: flex;
align-items: center;
gap: 8px;
${media('tablet', '')`
font-size: 16px;
gap: 10px;
padding: 16px 20px;
`}
    & > svg {
        stroke:  ${props => props.theme.sidebarText};
    }
    &:last-child > svg {
            stroke: none;
            fill: ${props => props.theme.sidebarText};;
        }
    &.active {
        color: ${props => props.theme.sidebarTextOutline};
        background-color: ${props => props.theme.sidebarTextBackgroundOutline};
        & > svg {
            stroke:  ${props => props.theme.sidebarTextOutline};
        }
        &:last-child > svg {
            stroke: none;
            fill: ${props => props.theme.sidebarTextOutline};
        }
}
`;

const styledIcon = css`
    width: 20px;
    height: 20px;
    ${media('desktop', '')`
    width: 24px;
    height: 24px;
    `}
`

export const UserCheck = styled(UserIcon)`
    ${styledIcon}
`;

export const CalendarCheck = styled(CalendarIcon)`
    ${styledIcon}
`;

export const StatisticIcon = styled(Statistic)`
    ${styledIcon}
`;



