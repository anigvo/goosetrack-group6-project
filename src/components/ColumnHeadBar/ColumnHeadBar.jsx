import React, { useState } from 'react';
import {
  CircleIcon,
  ColumnHeader,
  GroupName,
  IconTaskAdd,
} from './ColumnHeadBar.styled';
import TaskModal from '../../modals/TaskModal/TaskModal';

export const ColumnHeadBar = ({ groupName, category}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  
  const closeModal = () => {
    document.querySelector(".ReactModal__Overlay").classList.add("ReactModal__Overlay--before-close");
      setTimeout(() => {
      setIsModalOpen(false);
    }, 400); 
  };

  return (
    <ColumnHeader>
      <GroupName>{groupName}</GroupName>
      <IconTaskAdd onClick={openModal} aria-label="add new task">
        <CircleIcon />
      </IconTaskAdd>
      {isModalOpen && (
        <TaskModal
          isOpen={isModalOpen}
          onClose={closeModal}
          category={category}
        />
      )}
    </ColumnHeader>
  );
};
