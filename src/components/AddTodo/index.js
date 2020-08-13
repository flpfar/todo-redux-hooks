import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

const AddTodo = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  function handleAddTodo() {
    dispatch({
      type: 'ADD_TODO',
      preload: { task }
    })
    setTask('');
  }

  function handleInputTask(e) {
    setTask(e.target.value);
  }

  return (
    <div className="AddTodo">
      <input onChange={handleInputTask} value={task} type="text" name="task" id="task"/>
      <button onClick={handleAddTodo}>Create ToDo</button>
    </div>
  )
}

export default AddTodo;