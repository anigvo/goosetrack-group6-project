import React from "react";
import Modal from "react-modal";
import { useSelector } from 'react-redux'; 
import { selectTheme } from 'redux/selectors';

Modal.setAppElement('#modal-root');

function SVGIcon({ currentTheme }) {
  const strokeColor = currentTheme === 'light' ? '#111111' : '#FFFFFF';

  return (
    <svg fill="none" viewBox="0 0 24 24" width="24" height="24" stroke={strokeColor}>
      <g strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <path d="M18 6 6 18M6 6l12 12" />
      </g>
    </svg>
  );
}

const CustomModal = ({ isOpen, onClose, children, customStyles }) => {
  const currentTheme = useSelector((state) => selectTheme(state));

  const backgroundColor = currentTheme === 'light' ? '#FFFFFF' : '#171820';

  const defaultStyles = {
    content: {
      border: `1px solid #DCE3E5CC`,
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor,
      overflow: 'hidden',
      transition: '0.4s',
    }, 
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0)',
    },
  };

  const modalStyles = {
    ...defaultStyles,
    content: {
      ...defaultStyles.content,
      ...customStyles,
    },
  };

  const closeButtonStyles = {
    position: 'absolute',
    top: '14px',
    right: '14px',
    cursor: 'pointer',
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Modal" style={modalStyles}>
      <div style={closeButtonStyles} onClick={onClose}>
        <SVGIcon currentTheme={currentTheme} />
      </div>

      {children}
    </Modal>
  );
};

export default CustomModal;

