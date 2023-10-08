import React, { useState } from "react";
import { AddIcon, Button } from "./AddTaskBtn.styled"
import TaskModal from "../../modals/TaskModal/TaskModal";

export const AddTaskButton = ({ category}) => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button onClick={openModal}>
        <AddIcon />
        Add task
      </Button>
      {isModalOpen && (
        <TaskModal
          isOpen={isModalOpen}
          onClose={closeModal}
          category={category}
        />
      )}
    </>
  );
};