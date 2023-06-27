import { useState } from "react"
import { addNewTodo } from "../redux/actions";
import { useDispatch } from "react-redux";

export default function ToDoForm() {
    const [task, setTask] = useState("");

    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();
        dispatch(addNewTodo(task));
        setTask("");
    }

    const changeTask = (e) => {
        setTask(e.target.value)
    }
    // console.log(tile, detail);
    return (
        <div className="taskForm">
        <form  onSubmit={onFormSubmit}>
            <input value={task} id="taskInput" placeholder="Add Task" type="text" onChange={changeTask}/>
        </form>
        </div> 
  )
}
