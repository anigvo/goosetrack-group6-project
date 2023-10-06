import { TaskColumnCard } from "components/TaskColumnCard/TaskColumnCard";
import { TasksList } from "./ColumnTasksList.styled";

export const ColumnTasksList = ({tasks, groupName}) => {
    return (<TasksList tasksLength={tasks.length}>
        {tasks.map(task => 
        <TaskColumnCard 
        key={task._id} 
        id={task._id} 
        currentGroup={groupName} 
        priority={task.priority} 
        text={task.title}/>)}
    </TasksList>)
};
