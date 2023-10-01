import { useState } from "react";
import { ArrowIcon, Option, Options, OtherOptions, PencilIcon, Tool, ToolList, TrashIcon } from "./TaskToolbar.styled";
import { nanoid } from "@reduxjs/toolkit";
import { AnimatePresence } from "framer-motion";

const toolVar = {
    initial: { opacity: 0 },
    isOn: { opacity: 1, transition: { type: "spring", stiffness: 100 } },
    exit: { opacity: 0 }
}

export const TaskToolbar = ({ currentGroup }) => {
    const [isOpenOptions, setIsOpenOptions] = useState(false);

    const allGroups = ['To do', 'In progress', 'Done'];
    const indexOfCurrentGroup = allGroups.indexOf(currentGroup)
    allGroups.splice(indexOfCurrentGroup, 1);

    const toggleOptions = () => setIsOpenOptions(prevState => !prevState);

    return (<ToolList>
        <Tool key={'change priority'} onClick={toggleOptions}>
            <ArrowIcon />
            <AnimatePresence>
                {isOpenOptions &&
                    <OtherOptions
                        initial={"initial"}
                        animate={"isOn"}
                        exit={"exit"}
                        variants={toolVar}>
                        <Options>
                            {allGroups.map(group =>
                                <Option key={nanoid()}>{group}<ArrowIcon /></Option>)}
                        </Options>
                    </OtherOptions>}
            </AnimatePresence>
        </Tool>
        <Tool key={'edit'}>
            <PencilIcon />
        </Tool>
        <Tool key={'delete'}>
            <TrashIcon />
        </Tool>
    </ToolList>)
};
