import React, { useState } from "react";
import { AddIcon, Button } from "./AddTaskBtn.styled"
import TaskModal from "../../modals/TaskModal/TaskModal";

export const AddTaskButton = ({ category}) => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    document.querySelector(".ReactModal__Overlay").classList.add("ReactModal__Overlay--before-close");
      setTimeout(() => {
      setIsModalOpen(false);
    }, 400); 
  };

  return (
    <>
      <Button onClick={openModal} aria-label="add task">
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