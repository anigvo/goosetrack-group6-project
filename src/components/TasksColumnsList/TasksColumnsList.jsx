import { TasksColumn } from "components/TasksColumn/TasksColumn";
import { ColumnList } from "./TasksColumnsList.styled";
import { exampleTasks } from "./temp_example";

export const TasksColumnsList = () => {
    const {todo, inprogress, done} = exampleTasks;
    return (
        <ColumnList>
            <TasksColumn tasks={todo} groupName={'To do'} key={'to do'}/>
            <TasksColumn tasks={inprogress} groupName={'In progress'} key={'in progress'}/>
            <TasksColumn tasks={done} groupName={'Done'} key={'done'}/>
        </ColumnList>
    )
};
