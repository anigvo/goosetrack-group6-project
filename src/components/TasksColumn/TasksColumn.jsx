import { AddTaskButton } from 'buttons/AddTaskBtn/AddTaskBtn';
import { ColumnHeadBar } from 'components/ColumnHeadBar/ColumnHeadBar';
import { ColumnTasksList } from 'components/ColumnTasksList/ColumnTasksList';
import { Column } from './TasksColumn.styled';
import { useDispatch } from 'react-redux';
import { updateUserTask } from 'redux/tasks/operations';

export const TasksColumn = ({ groupName, tasks, category, currentBoard, setCurrentBoard, allTasks, setCurrentItem, board, setTasks, currentItem}) => {
  const dispatch = useDispatch();

  const dragOverHandler = (e) => {
    e.preventDefault();
  }

  const updateTaskCategory = (board, id) => {
    const task = {
      category: board,
    };
    dispatch(updateUserTask({ task, id }));
  };

  const dropCard = (e, board) => {
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
    <Column
    onDragOver={(e) => dragOverHandler(e)}
    onDrop={(e) => dropCard(e, board)}
    >
      <ColumnHeadBar groupName={groupName} category={category} />
      {tasks.length > 0 && (
        <ColumnTasksList 
        setCurrentItem={setCurrentItem} 
        currentItem={currentItem} 
        tasks={tasks} 
        groupName={groupName} 
        currentBoard={currentBoard} 
        setCurrentBoard={setCurrentBoard}
        setTasks={setTasks}
        board={board}
        allTasks={allTasks}/>
      )}
      <AddTaskButton category={category} />
    </Column>
  );
};
