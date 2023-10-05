import { CalendarCheck, Menu, MenuTitle, PageLink, StatisticIcon, UserCheck } from "./UserNav.styled";

export const UserNav = () => {

    return (
        <div>
        <MenuTitle>User Panel</MenuTitle>
        <Menu>
            <PageLink to="/account"><UserCheck/>My account</PageLink>
            <PageLink to="/calendar"><CalendarCheck/>Calendar</PageLink>
            <PageLink to="/statistics"><StatisticIcon/>Statistics</PageLink>
        </Menu>
        </div>
    )
};
