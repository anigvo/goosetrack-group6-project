import { Task, TaskFeatures, TaskOwner, TaskPriority, TaskSettings, TaskTitle } from "./TaskColumnCard.styled";
import { TaskToolbar } from "components/TaskToolbar/TaskToolbar";
import { useSelector } from "react-redux";
import { selectAvatar } from "redux/selectors";

export const TaskColumnCard = ({id, text, priority, currentGroup, today}) => {
    const avatar = useSelector(selectAvatar);
    return (
      <Task>
        <TaskTitle>{text}</TaskTitle>
        <TaskFeatures>
          <TaskSettings>
            <TaskOwner src={avatar} />
            <TaskPriority priority={priority}>{priority}</TaskPriority>
          </TaskSettings>
          <TaskToolbar today={today} currentGroup={currentGroup} id={id} />
        </TaskFeatures>
      </Task>
    );
};
