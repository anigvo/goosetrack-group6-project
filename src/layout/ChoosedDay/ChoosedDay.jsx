import { TasksColumnsList } from "components/TasksColumnsList/TasksColumnsList";
import { useParams } from "react-router-dom";
import { exampleTasks } from "./temp_example";

const ChoosedDay = () => {
    const { currentDay } = useParams();
    console.log(currentDay);
    return (
        <>
            <TasksColumnsList tasks={exampleTasks}/>
        </>
    )
}

export default ChoosedDay;