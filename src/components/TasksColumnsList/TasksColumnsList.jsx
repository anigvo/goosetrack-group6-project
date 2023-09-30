import { TasksColumn } from "components/TasksColumn/TasksColumn";
import { ColumnList } from "./TasksColumnsList.styled";

export const TasksColumnsList = ({tasks}) => {
    const {todo, inprogress, done} = tasks;
    return (
        <ColumnList>
            <TasksColumn tasks={todo} groupName={'To do'} key={'to do'}/>
            <TasksColumn tasks={inprogress} groupName={'In progress'} key={'in progress'}/>
            <TasksColumn tasks={done} groupName={'Done'} key={'done'}/>
        </ColumnList>
    )
};
