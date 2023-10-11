import { TaskColumnCard } from "components/TaskColumnCard/TaskColumnCard";
import { TasksList } from "./ColumnTasksList.styled";


export const ColumnTasksList = ({tasks, groupName, currentBoard, setCurrentBoard, board, allTasks, setCurrentItem, currentItem, setTasks}) => {
    return (
      <TasksList tasksLength={tasks.length}>
        {tasks.map(task => (
          <TaskColumnCard
            currentBoard={currentBoard} setCurrentBoard={setCurrentBoard} tasks={tasks} item={task}
            setCurrentItem={setCurrentItem} currentItem={currentItem}
            key={task._id}
            id={task._id}
            currentGroup={groupName}
            priority={task.priority}
            text={task.title}
            setTasks={setTasks}
            board={board}
            allTasks={allTasks}
          />
        ))}
      </TasksList>
    );
};
