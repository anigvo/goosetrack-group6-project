import { AddTaskButton } from 'buttons/AddTaskBtn/AddTaskBtn';
import { ColumnHeadBar } from 'components/ColumnHeadBar/ColumnHeadBar';
import { ColumnTasksList } from 'components/ColumnTasksList/ColumnTasksList';
import { Column } from './TasksColumn.styled';

export const TasksColumn = ({ groupName, tasks, category, today }) => {
  return (
    <Column>
      <ColumnHeadBar today={today} groupName={groupName} category={category} />
      {tasks.length > 0 && (
        <ColumnTasksList today={today} tasks={tasks} groupName={groupName} />
      )}
      <AddTaskButton today={today} category={category} />
    </Column>
  );
};
