import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';

import TodoItem from '../TodoItem';

const TodoList = () => {
  const state = useSelector(state => state.todos);
  const [todos, setTodos] = useState([state]);

  useEffect(() => {
    setTodos(state);
  }, [state]);

  return (
    <div className="TodoList">
      {todos.length === 0 ? 'No tasks yet.' : ''}
      {todos.map(todo => (
        <TodoItem key={todo.id} item={todo} />
      ))}
    </div>
  )
}

export default TodoList;