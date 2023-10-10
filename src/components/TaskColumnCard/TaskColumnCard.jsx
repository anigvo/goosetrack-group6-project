import { Task, TaskFeatures, TaskOwner, TaskPriority, TaskSettings, TaskTitle } from "./TaskColumnCard.styled";
import { TaskToolbar } from "components/TaskToolbar/TaskToolbar";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAvatar } from "redux/selectors";
import { updateUserTask } from "redux/tasks/operations";

// const toolVar = {
//   initial: { opacity: 0 },
//   isOn: { opacity: 1, transition: { type: 'spring', stiffness: 100, duration: 0.8 } },
//   exit: { opacity: 0 },
// };


export const TaskColumnCard = ({ id, text, board, priority, currentGroup, currentBoard, setCurrentBoard, setTasks, allTasks, item, setCurrentItem, currentItem }) => {
  const avatar = useSelector(selectAvatar);
  const cardRef = useRef(null);
  const dispatch = useDispatch();

  const dragOverHandler = (e) => {
    e.preventDefault();
    if (e.target === cardRef.current) {
      e.target.style.transform = 'scale(0.9)'
    }
  }

  const dragLeaveHandler = (e, board, item) => {
    e.target.style.transform = 'scale(1)'
  }

  const dragStartHandler = (e, board, item) => {
    setCurrentBoard(board);
    setCurrentItem(item);
  }

  const dragEndHandler = (e) => {
    e.target.style.transform = 'scale(1)'
  }

  const updateTaskCategory = (board, id) => {
    const task = {
      category: board,
    };
    dispatch(updateUserTask({ task, id }));
  };

  const dropHandler = (e, board, item) => {
    e.preventDefault();
    // const currentIndex = currentBoard.tasks.indexOf(currentItem);
    // currentBoard.tasks.splice(currentIndex, 1);
    // const dropIndex = board.tasks.indexOf(item);
    // board.tasks.splice(dropIndex, 0, currentItem);
    updateTaskCategory(board.category, currentItem._id);
    setTasks(allTasks.map(b => {
      if (b.id === board.id) {
        return board;
      }
      if (b.id === currentBoard.id) {
        return currentBoard;
      }
      return b;
    }))
    e.target.style.transform = 'scale(1)'
  }

  return (
    <Task
      // variants={toolVar}
      draggable={true}
      onDragOver={(e) => dragOverHandler(e)}
      onDragEnd={(e) => dragEndHandler(e)}
      onDragLeave={(e) => dragLeaveHandler(e)}
      onDragStart={(e) => dragStartHandler(e, board, item)}
      onDrop={(e) => dropHandler(e, board, item)}
      ref={cardRef}>
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
