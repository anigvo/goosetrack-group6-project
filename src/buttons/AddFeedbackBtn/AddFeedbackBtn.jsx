import React, { useState } from "react";
import { FeedbackBtn } from "./AddFeedbackBtn.styled";
import AddFeedbackModal from "../../modals/AddFeedbackModal/AddFeedbackModal";

export const AddFeedbackBtn = () => {
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
      <FeedbackBtn aria-label="manage feedback" onClick={openModal}>Feedback</FeedbackBtn>
      {isModalOpen && (
        <AddFeedbackModal isOpen={isModalOpen} onClose={closeModal} />
      )}
    </>
  );
};