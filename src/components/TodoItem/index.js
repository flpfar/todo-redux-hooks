import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from '../../actions/todos';

function TodoItem({id, task, done}) {
  const dispatch = useDispatch();
  function handleDelete() {
    dispatch(deleteTodo({ id }));
  }

  function handleToggleTodo() {
    dispatch(toggleTodo({ id }));
  }

  return (
    <div className="TodoItem">
      <span>{task}</span>
      <input type="checkbox" onChange={handleToggleTodo} name="done" id="done" defaultChecked={done}/>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default TodoItem;