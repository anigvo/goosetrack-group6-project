import { Task, TaskFeatures, TaskOwner, TaskPriority, TaskSettings, TaskTitle } from "./TaskColumnCard.styled";
import logo from '../../assets/images/logo.png';
import { TaskToolbar } from "components/TaskToolbar/TaskToolbar";

export const TaskColumnCard = ({id, text, priority, currentGroup}) => {
    return (
        <Task>
            <TaskTitle>{text}</TaskTitle>
            <TaskFeatures>
                <TaskSettings>
                    <TaskOwner src={logo}/>
                    <TaskPriority priority={priority}>{priority}</TaskPriority>
                </TaskSettings>
                <TaskToolbar currentGroup={currentGroup} id={id}/>
            </TaskFeatures>
        </Task>
    )
};
