import React, {useState, useEffect} from 'react';
import TodoItem from '../TodoItem';
import {useSelector} from 'react-redux';

function TodoList() {
  const [todoList, setTodoList] = useState([]);
  const state = useSelector(state => state.todos);

  useEffect(() => {
    setTodoList(state)
  }, [state])

  return (
    <div className="TodoList">
      <h3>My ToDos:</h3>
      { todoList.length === 0 ? 'No items' : '' }
      {
        todoList.map(todo => (
          <TodoItem key={todo.id} id={todo.id} task={todo.task} done={todo.done} />
        ))
      }
      
    </div>
  );
}

export default TodoList;