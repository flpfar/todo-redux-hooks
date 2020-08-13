import React from 'react';
import AddTodo from './components/AddTodo';
import './App.css';
import TodoList from './components/TodoList';

function App() {

  return (
    <div className="App">
      <h1>To Do App</h1>
      <TodoList />
      <AddTodo />
    </div>
  );
}

export default App;
