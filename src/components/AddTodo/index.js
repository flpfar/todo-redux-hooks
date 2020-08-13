import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../actions/todos';

function AddTodo() {
  const dispatch = useDispatch();
  const [data, setData] = useState({ task: '' })

  function handleAddTodo(e) {
    e.preventDefault();
    dispatch(addTodo(data));
    e.target.reset();
  }

  function handleTaskInputChange(e) {
    setData({...data, [e.target.name]: e.target.value})
  }

  return(
    <div className="AddTodo">
      <form onSubmit={handleAddTodo}>
        <input onChange={handleTaskInputChange} type="text" name="task" id="task"/>
        <button type="submit">Add ToDo</button>
      </form>
    </div>
  )
}

export default AddTodo;