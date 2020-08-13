import React from 'react';
import {useDispatch} from 'react-redux';

const TodoItem = (props) => {
  const {item} = props;
  const dispatch = useDispatch();

  function handleDeleteTodo() {
    dispatch({
      type: 'DELETE_TODO',
      preload: { id: item.id }
    })
  }

  function handleToggleTodo() {
    dispatch({
      type: 'TOGGLE_TODO',
      preload: { id: item.id }
    })
  }

  return (
    <div className="TodoItem">
      <span>{item.task}</span>
      <input type="checkbox" onChange={handleToggleTodo} defaultChecked={item.done} />
      <button onClick={handleDeleteTodo}>Delete</button>
    </div>
  )
}

export default TodoItem;