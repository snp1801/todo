import { useEffect } from "react"
import { getAllTodos } from "../redux/actions"
import {useDispatch, useSelector} from "react-redux";
import SingleTodo from "./singleTodo";

export default function DisplayTodos() {
  const dispatch = useDispatch();

  const todos = useSelector(state => state.todos);
  // console.log(data);

  useEffect(() => {
    dispatch(getAllTodos());
  }, []);

  return (
    <div>
      <ul>
        {todos.map((todo) => (
            <SingleTodo key={todo._id} todo={todo}/>
        ))}
      </ul>
    </div>
  )
}
