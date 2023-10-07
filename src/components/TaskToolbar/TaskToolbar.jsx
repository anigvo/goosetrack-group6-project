import { useState } from "react";
import { ArrowIcon, ToolList, ClosableBcg, Option, Options, OtherOptions, PencilIcon, TrashIcon, Wrapper } from "./TaskToolbar.styled";
import { nanoid } from "@reduxjs/toolkit";
import { AnimatePresence } from "framer-motion";
import TaskModal from "modals/TaskModal/TaskModal";
import { useDispatch } from "react-redux";
import { deleteUserTask, updateUserTask } from "redux/tasks/operations";

const toolVar = {
    initial: { opacity: 0 },
    isOn: { opacity: 1, transition: { type: "spring", stiffness: 100 } },
    exit: { opacity: 0 }
}

export const TaskToolbar = ({ currentGroup, id }) => {
    const dispatch = useDispatch();
    const [isOpenOptions, setIsOpenOptions] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const allGroups = ['To do', 'In progress', 'Done'];
    const indexOfCurrentGroup = allGroups.indexOf(currentGroup)
    allGroups.splice(indexOfCurrentGroup, 1);

    const toggleOptions = () => setIsOpenOptions(prevState => !prevState);

    const closeOptions = e => {
        if (e.target === e.currentTarget) setIsOpenOptions(false);
    }

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    
    const deleteTask = () => {
        dispatch(deleteUserTask(id));
    };

    const updateTaskCategory = group => {
        const category = group.split(" ").join("-").toLowerCase();
        const task = {
            category: category
        }
        dispatch(updateUserTask({ task, id }));
    }

    return (<Wrapper><ToolList>
        <li key={'change priority'} onClick={toggleOptions}>
            <ArrowIcon />
        </li>
        <li key={'edit'} onClick={openModal}>
            <PencilIcon />
        </li>
        <li key={'delete'} onClick={deleteTask}>
            <TrashIcon />
        </li>
        {/* додала в пропси айді щоб можна було усередині робити фетч */}
        {isModalOpen && <TaskModal isOpen={isModalOpen} onClose={closeModal} id={id} />}
    </ToolList>
        <AnimatePresence>
            {isOpenOptions &&
                <><ClosableBcg onClick={closeOptions} />
                    <OtherOptions
                        initial={"initial"}
                        animate={"isOn"}
                        exit={"exit"}
                        variants={toolVar}>
                        <Options>
                            {allGroups.map(group =>
                                <Option key={nanoid()} onClick={() => updateTaskCategory(group)}>{group}<ArrowIcon /></Option>)}
                        </Options>
                    </OtherOptions></>}
        </AnimatePresence>
    </Wrapper>)
};
