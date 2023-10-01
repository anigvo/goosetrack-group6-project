import React, { useEffect, useState } from "react";
import CustomModal from "../Modal/Modal";
import TaskForm from "../TaskForm/TaskForm";

const TaskModal = ({ isOpen, onClose }) => {
  const [modalStyles, setModalStyles] = useState({
    maxWidth: "303px",
    maxHeight: "336px",
    minWidth: "303px",
    minHeight: "336px",
    padding: "28px 15px 28px 15px",
  });

  useEffect(() => {
    const handleResize = () => {
      const isLargeScreen = window.innerWidth > 767;
      if (isLargeScreen) {
        setModalStyles({
          maxWidth: "396px",
          maxHeight: "360px",
          minWidth: "396px",
          minHeight: "360px",
          padding: "40px 25px",
        });
      } else {
        setModalStyles({
          maxWidth: "303px",
          maxHeight: "336px", 
          minWidth: "303px",
          minHeight: "336px",
          padding: "28px 15px 28px 15px",
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
        
          <TaskForm onCancel={onClose} />
        
      </CustomModal>
    );
  };
  

export default TaskModal;
