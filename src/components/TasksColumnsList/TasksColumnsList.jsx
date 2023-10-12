import { TasksColumn } from "components/TasksColumn/TasksColumn";
import { ColumnList } from "./TasksColumnsList.styled";
import { useSelector } from "react-redux";
import { selectCategoryTasks, selectIsLoadingTasks } from "redux/selectors";
import { Loader } from "components/Loader/Loader";
import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";

export const TasksColumnsList = () => {
    const { todo, inProgress, done } = useSelector(selectCategoryTasks);
    const [boards, setBoards] = useState([
        { id: nanoid(), groupName: 'To do', category: 'to-do' },
        { id: nanoid(), groupName: 'In progress', category: 'in-progress' },
        { id: nanoid(), groupName: 'Done', category: 'done' }
    ]);
    const [currentBoard, setCurrentBoard] = useState(null);
    const [currentItem, setCurrentItem] = useState(null);
    const isLoading = useSelector(selectIsLoadingTasks);

    return (
        <>{isLoading ? <Loader type={'suspense'} /> : <ColumnList>
            <TasksColumn
                setTasks={setBoards}
                allTasks={boards}
                setCurrentItem={setCurrentItem}
                currentItem={currentItem}
                currentBoard={currentBoard}
                tasks={todo}
                setCurrentBoard={setCurrentBoard}
                groupName={boards[0].groupName}
                category={boards[0].category}
                key={boards[0].id}
                board={boards[0]}
            />
            <TasksColumn
                setTasks={setBoards}
                allTasks={boards}
                setCurrentItem={setCurrentItem}
                currentItem={currentItem}
                currentBoard={currentBoard}
                tasks={inProgress}
                setCurrentBoard={setCurrentBoard}
                groupName={boards[1].groupName}
                category={boards[1].category}
                key={boards[1].id}
                board={boards[1]}
            />
            <TasksColumn
                setTasks={setBoards}
                allTasks={boards}
                setCurrentItem={setCurrentItem}
                currentItem={currentItem}
                currentBoard={currentBoard}
                tasks={done}
                setCurrentBoard={setCurrentBoard}
                groupName={boards[2].groupName}
                category={boards[2].category}
                key={boards[2].id}
                board={boards[2]}
            />
        </ColumnList>}</>
    )
};
