import React, { useEffect, useState, useCallback } from "react";
import CustomModal from "../Modal/Modal";
import FeedbackForm from "../FeedbackForm/FeedbackForm";
import ReactDOM from "react-dom";

const AddFeedbackModal = ({ isOpen, onClose }) => {
  const [modalStyles, setModalStyles] = useState({
    maxWidth: "335px",
    maxHeight: "331px",
    minWidth: "335px",
    minHeight: "331px",
    padding: "28px 20px 28px 20px",
    
  });

  const [userHasReview, setUserHasReview] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdateStyles = useCallback((editing) => {
    setModalStyles((prevStyles) => {
      if (editing) {
        return {
          ...prevStyles,
          maxHeight: "350px",
          minHeight: "350px",
         
        };
      } else {
        return {
          ...prevStyles,
          maxWidth: "335px",
          maxHeight: userHasReview ? "294px" : "331px",
          minWidth: "335px",
          minHeight: userHasReview ? "294px" : "331px",
          padding: "28px 20px 28px 20px",
         
        };
      }
    });
  }, [userHasReview]);

  useEffect(() => {
    const handleResize = () => {
      const isLargeScreen = window.innerWidth > 767;
      if (isLargeScreen) {
        const newModalStyles = {
          maxWidth: "468px",
          minWidth: "468px",
          maxHeight: isEditing ? "350px" : (userHasReview ? "294px" : "340px"),
          minHeight: isEditing ? "350px" : (userHasReview ? "294px" : "340px"),
          padding: "30px",
          
        };
        setModalStyles(newModalStyles);
      } else {
        const newModalStyles = {
          maxWidth: "335px",
          minWidth: "335px",
          maxHeight: isEditing ? "350px" : (userHasReview ? "294px" : "340px"),
          minHeight: isEditing ? "350px" : (userHasReview ? "294px" : "340px"),
          padding: "28px 20px 28px 20px",
         
        };
        setModalStyles(newModalStyles);
      }
    };
  
    window.addEventListener("resize", handleResize);
    handleResize();
  
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [userHasReview, isEditing, handleUpdateStyles]);

  const handleUserReviewStatus = (hasReview) => {
    setUserHasReview(hasReview);
  };

  return isOpen && ReactDOM.createPortal(
    <CustomModal customStyles={modalStyles} isOpen={isOpen} onClose={onClose}>
      <FeedbackForm
        onCancel={onClose}
        onReviewStatusChange={handleUserReviewStatus}
        onUpdateStyles={handleUpdateStyles}
        onEditStatusChange={(editing) => setIsEditing(editing)}
      />
    </CustomModal>,
    document.getElementById('modal-root')
  );
};

export default AddFeedbackModal;
