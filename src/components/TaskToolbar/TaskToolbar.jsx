import { useEffect, useRef, useState } from 'react';
import {
  ArrowIcon,
  ToolList,
  Option,
  Options,
  OtherOptions,
  PencilIcon,
  TrashIcon,
  Wrapper,
  OptionButton,
} from './TaskToolbar.styled';
import { nanoid } from '@reduxjs/toolkit';
import { AnimatePresence } from 'framer-motion';
import TaskModal from 'modals/TaskModal/TaskModal';
import { useDispatch } from 'react-redux';
import { deleteUserTask, updateUserTask } from 'redux/tasks/operations';

const toolVar = {
  initial: { opacity: 0 },
  isOn: { opacity: 1, transition: { type: 'spring', stiffness: 100 } },
  exit: { opacity: 0 },
};

export const TaskToolbar = ({ currentGroup, id }) => {
  const dispatch = useDispatch();
  const [isOpenOptions, setIsOpenOptions] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const optionsRef = useRef(null);
  const openOptionsRef = useRef(null);

  const allGroups = ['To do', 'In progress', 'Done'];
  const indexOfCurrentGroup = allGroups.indexOf(currentGroup);
  allGroups.splice(indexOfCurrentGroup, 1);

  const toggleOptions = () => setIsOpenOptions(prevState => !prevState);

  const openEditModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    document.querySelector(".ReactModal__Overlay").classList.add("ReactModal__Overlay--before-close");
    setTimeout(() => {
      setIsModalOpen(false);
    }, 400);
  };


  const deleteTask = () => {
    dispatch(deleteUserTask(id));
  };

  const updateTaskCategory = group => {
    const category = group.split(' ').join('-').toLowerCase();
    const task = {
      category: category,
    };
    dispatch(updateUserTask({ task, id }));
  };

  useEffect(() => {
    const closeOutside = (event) => {
      if (optionsRef.current && !optionsRef.current.contains(event.target) && !openOptionsRef.current.contains(event.target)) setIsOpenOptions(false);
    };
    if (isOpenOptions) {
      window.addEventListener("click", closeOutside);
      return () => window.removeEventListener("click", closeOutside)
    }
  }, [optionsRef, isOpenOptions]);

  return (
    <Wrapper>
      <ToolList>
        <li key={'change priority'} onClick={toggleOptions} ref={openOptionsRef}>
          <OptionButton aria-label='change priority'><ArrowIcon /></OptionButton>
        </li>
        <li key={'edit'} onClick={openEditModal}>
          <OptionButton aria-label='edit task'><PencilIcon /></OptionButton>
        </li>
        <li key={'delete'} onClick={deleteTask}>
          <OptionButton aria-label='delete task'><TrashIcon /></OptionButton>
        </li>
        {isModalOpen && (
          <TaskModal
            isOpen={isModalOpen}
            onClose={closeModal}
            id={id}
          />
        )}
      </ToolList>
      <AnimatePresence>
        {isOpenOptions && (
          <OtherOptions
            initial={'initial'}
            animate={'isOn'}
            exit={'exit'}
            variants={toolVar}
            ref={optionsRef}
          >
            <Options>
              {allGroups.map(group => (
                <Option
                  key={nanoid()}
                  onClick={() => updateTaskCategory(group)}
                >
                  {group}
                  <ArrowIcon />
                </Option>
              ))}
            </Options>
          </OtherOptions>
        )}
      </AnimatePresence>
    </Wrapper>
  );
};
