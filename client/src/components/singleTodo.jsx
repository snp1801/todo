import { toggleTodo, updateTodo, deleteTodo } from '../redux/actions'
import { useDispatch } from 'react-redux';
import { useState } from 'react';

export default function SingleTodo({todo}) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo.task);

  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();

    setEditing(prevState => !prevState);

    dispatch(updateTodo(todo._id, text))
}

  return (
    <div>
        <li 
          className='task'
          onClick={() => dispatch(toggleTodo(todo._id))}
          style={{
            textDecoration: todo.done? 'line-through': "",
            color: todo.done? 'black': "white"
          }
          }
        >
            
            <span style={{ display: editing ? 'none' : '' }}>{todo.task}</span>

            <form
                style={{ display: editing ? 'inline' : 'none' }}
                onSubmit={onFormSubmit}
            >
                <input
                    type="text"
                    value={text}
                    className="edit-todo"
                    onChange={(e) => setText(e.target.value)}
                />
            </form>


            <span className='icons' onClick={() => dispatch(deleteTodo(todo._id))}>
                <button>Delete</button>
            </span>
            <span style={{ display: editing ? 'none' : '' }} className='icons' onClick={() => setEditing(prevState => !prevState)}>
                <button>Edit</button>
            </span>
        </li>
    </div>
  )
}
