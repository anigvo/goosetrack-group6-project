import { TasksColumn } from "components/TasksColumn/TasksColumn";
import { ColumnList } from "./TasksColumnsList.styled";
import { useSelector } from "react-redux";
import { selectCategoryTasks, selectIsLoadingTasks } from "redux/selectors";
import { Loader } from "components/Loader/Loader";

export const TasksColumnsList = () => {
    const {todo, inProgress, done} = useSelector(selectCategoryTasks);
    const isLoading = useSelector(selectIsLoadingTasks);
    return (
        <>{isLoading ? <Loader type={'suspense'}/> : <ColumnList>
            <TasksColumn tasks={todo} groupName={'To do'} category={'to-do'} key={'to do'}/>
            <TasksColumn tasks={inProgress} groupName={'In progress'} category={'in-progress'} key={'in progress'}/>
            <TasksColumn tasks={done} groupName={'Done'} category={'done'} key={'done'}/>
        </ColumnList>}</>
    )
};
