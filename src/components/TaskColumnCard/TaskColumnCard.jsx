import { Task, TaskFeatures, TaskOwner, TaskPriority, TaskSettings, TaskTitle } from "./TaskColumnCard.styled";
import { TaskToolbar } from "components/TaskToolbar/TaskToolbar";
import { useSelector } from "react-redux";
import { selectAvatar } from "redux/selectors";

const toolVar = {
  initial: { opacity: 0 },
  isOn: { opacity: 1, transition: { type: 'spring', stiffness: 100 } },
  exit: { opacity: 0 },
};


export const TaskColumnCard = ({id, text, priority, currentGroup}) => {
    const avatar = useSelector(selectAvatar);
    return (
      <Task
      initial={'initial'}
      animate={'isOn'}
      exit={'exit'}
      variants={toolVar}>
        <TaskTitle>{text}</TaskTitle>
        <TaskFeatures>
          <TaskSettings>
            <TaskOwner src={avatar} />
            <TaskPriority priority={priority}>{priority}</TaskPriority>
          </TaskSettings>
          <TaskToolbar currentGroup={currentGroup} id={id} />
        </TaskFeatures>
      </Task>
    );
};
