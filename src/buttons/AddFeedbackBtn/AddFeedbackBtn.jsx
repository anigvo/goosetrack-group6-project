import React, { useState } from "react";
import { FeedbackBtn } from "./AddFeedbackBtn.styled";
import AddFeedbackModal from "../../modals/AddFeedbackModal/AddFeedbackModal";
// import TaskModal from "../../modals/TaskModal/TaskModal";


export const AddFeedbackBtn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <FeedbackBtn onClick={openModal}>Feedback</FeedbackBtn>
      <AddFeedbackModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};
