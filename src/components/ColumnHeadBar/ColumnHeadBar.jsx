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
  const closeModal = () => setIsModalOpen(false);

  return (
    <ColumnHeader>
      <GroupName>{groupName}</GroupName>
      <IconTaskAdd onClick={openModal}>
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
