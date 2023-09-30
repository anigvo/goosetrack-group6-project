import React, { useEffect, useState } from "react";
import CustomModal from "../Modal/Modal";
import FeedbackForm from "../FeedbackForm/FeedbackForm";

const AddFeedbackModal = ({ isOpen, onClose }) => {
  const [modalStyles, setModalStyles] = useState({
    maxWidth: "335px",
    maxHeight: "331px",
    minWidth: "335px",
    minHeight: "331px",
    padding: "28px 20px 28px 20px",
  });

  useEffect(() => {
    const handleResize = () => {
      const isLargeScreen = window.innerWidth > 767;
      if (isLargeScreen) {
        setModalStyles({
          maxWidth: "468px",
          maxHeight: "349px",
          minWidth: "468px",
          minHeight: "349px",
          padding: "30px",
        });
      } else {
        setModalStyles({
          maxWidth: "335px",
          maxHeight: "331px",
          minWidth: "335px",
          minHeight: "331px",
          padding: "28px 20px 28px 20px",
        });
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); 
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <CustomModal customStyles={modalStyles} isOpen={isOpen} onClose={onClose}>
      <FeedbackForm onCancel={onClose} />
    </CustomModal>
  );
};

export default AddFeedbackModal; 
