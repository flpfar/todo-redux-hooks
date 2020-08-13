import React from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

function App() {
  return (
    <div className="App">
      <h1>ToDo</h1>
      <TodoList />
      <AddTodo />
    </div>
  );
}

export default App;
