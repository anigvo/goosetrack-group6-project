import { TasksColumnsList } from "components/TasksColumnsList/TasksColumnsList";
import { useParams } from "react-router-dom";

const ChoosedDay = () => {
    const { currentDay } = useParams();
    console.log(currentDay);
    return (
        <>
            <TasksColumnsList/>
        </>
    )
}

export default ChoosedDay;