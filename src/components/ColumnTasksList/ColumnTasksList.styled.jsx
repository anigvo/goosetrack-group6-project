import styled from '@emotion/styled';

export const TasksList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 14px;
  overflow-y: ${props => props.tasksLength > 2 && 'auto'};

  height: ${props =>
    props.tasksLength > 2
      ? window.innerWidth > 767
        ? '40vh'
        : '30vh'
      : 'fit-content'};
  margin-bottom: 10px;
  padding-right: 6px;

  &::-webkit-scrollbar {
    background-color: ${props => props.theme.taskScrollBarBackground};
    border-radius: 12px;
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.taskScrollbarColor};
    width: 6px;
    border-radius: 12px;
  }
`;
