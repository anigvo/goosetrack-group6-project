import { useState } from "react";
import { ArrowIcon, Option, Options, OtherOptions, PencilIcon, Tool, ToolList, TrashIcon } from "./TaskToolbar.styled";
import { nanoid } from "@reduxjs/toolkit";


export const TaskToolbar = ({ currentGroup }) => {
    const allGroups = ['to do', 'in progress', 'done'];
    const [isOpenOptions, setIsOpenOptions] = useState(false);
    const indexOfCurrentGroup = allGroups.indexOf(currentGroup.toString().toLowerCase())
    allGroups.splice(indexOfCurrentGroup, 1);
    const toggleOptions = () => setIsOpenOptions(prevState => !prevState);

    return (<ToolList>
        <Tool key={'change priority'} onClick={toggleOptions}>
            <ArrowIcon />
            {isOpenOptions &&
                <OtherOptions>
                    <Options>
                        {allGroups.map(group => <Option key={nanoid()}>{group}<ArrowIcon /></Option>)}
                    </Options>
                </OtherOptions>}
        </Tool>
        <Tool key={'edit'}>
            <PencilIcon />
        </Tool>
        <Tool key={'delete'}>
            <TrashIcon />
        </Tool>
    </ToolList>)
};
