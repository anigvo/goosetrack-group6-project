import { CircleIcon, ColumnHeader, GroupName, IconTaskAdd } from "./ColumnHeadBar.styled";

export const ColumnHeadBar = ({ groupName }) => {
    return (<ColumnHeader>
        <GroupName>{groupName}</GroupName>
        <IconTaskAdd>
            <CircleIcon />
        </IconTaskAdd>
    </ColumnHeader>)
};
