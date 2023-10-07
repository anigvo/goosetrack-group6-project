import { AddTaskButton } from "buttons/AddTaskBtn/AddTaskBtn";
import { ColumnHeadBar } from "components/ColumnHeadBar/ColumnHeadBar";
import { ColumnTasksList } from "components/ColumnTasksList/ColumnTasksList";
import { Column } from "./TasksColumn.styled";

export const TasksColumn = ({groupName, tasks, category }) => {
    return (<Column>
    <ColumnHeadBar groupName={groupName} category={category}/>
    {tasks.length > 0 && <ColumnTasksList tasks={tasks} groupName={groupName}/>}
    <AddTaskButton category={category}/>
    </Column>)
};
