import { TasksColumn } from "components/TasksColumn/TasksColumn";
import { ColumnList } from "./TasksColumnsList.styled";
import { useSelector } from "react-redux";
import { selectCategoryTasks, selectIsLoadingTasks } from "redux/selectors";
import { Loader } from "components/Loader/Loader";

export const TasksColumnsList = ({ today }) => {
          
    const {todo, inProgress, done} = useSelector(selectCategoryTasks);
    const isLoading = useSelector(selectIsLoadingTasks);
    return (
        <>{isLoading ? <Loader type={'suspense'}/> : <ColumnList>
            <TasksColumn today={today} tasks={todo} groupName={'To do'} category={'to-do'} key={'to do'}/>
            <TasksColumn today={today} tasks={inProgress} groupName={'In progress'} category={'in-progress'} key={'in progress'}/>
            <TasksColumn today={today} tasks={done} groupName={'Done'} category={'done'} key={'done'}/>
        </ColumnList>}</>
    )
};
