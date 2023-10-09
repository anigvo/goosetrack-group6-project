import { TaskColumnCard } from "components/TaskColumnCard/TaskColumnCard";
import { TasksList } from "./ColumnTasksList.styled";
import { AnimatePresence } from "framer-motion";

const toolVar = {
  initial: { opacity: 0 },
  isOn: { opacity: 1, transition: { type: 'spring', stiffness: 100, staggerChildren: 0.4 } },
  exit: { opacity: 0 },
};


export const ColumnTasksList = ({tasks, groupName}) => {
    return (
      <TasksList tasksLength={tasks.length}
      initial={'initial'}
      animate={'isOn'}
      exit={'exit'}
      variants={toolVar}>
        {tasks.map(task => (
          <TaskColumnCard
            key={task._id}
            id={task._id}
            currentGroup={groupName}
            priority={task.priority}
            text={task.title}
          />
        ))}
      </TasksList>
    );
};
