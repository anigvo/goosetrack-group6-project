import { AvatarSample, MiniAvatar, Task, TaskFeatures, TaskOwner, TaskPriority, TaskSettings, TaskTitle } from "./TaskColumnCard.styled";
import { TaskToolbar } from "components/TaskToolbar/TaskToolbar";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAvatar, selectUser } from "redux/selectors";
import { updateUserTask } from "redux/tasks/operations";

export const TaskColumnCard = ({ id, text, board, priority, currentGroup, currentBoard, setCurrentBoard, setTasks, allTasks, item, setCurrentItem, currentItem }) => {
  const avatar = useSelector(selectAvatar);
  const {name} = useSelector(selectUser);
  const cardRef = useRef(null);
  const dispatch = useDispatch();

  const dragOverHandler = (e) => {
    e.preventDefault();
    if (e.target === cardRef.current) {
      e.target.style.transform = 'scale(0.9)';
    }
  }

  const dragLeaveHandler = (e) => {
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
          <TaskOwner>
            {avatar ? <MiniAvatar src={avatar} width={32} height={32} />
            : <AvatarSample>{name[0]}</AvatarSample>}
          </TaskOwner>
          <TaskPriority priority={priority}>{priority}</TaskPriority>
        </TaskSettings>
        <TaskToolbar currentGroup={currentGroup} id={id} />
      </TaskFeatures>
    </Task>
  );
};
