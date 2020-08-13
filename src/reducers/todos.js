import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "../actions/todos";
import { v4 as uuid } from 'uuid';

const initialState = [];

function createTodo(task) {
  const id = uuid();
  return {id, task, done: false}
}

const todosReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch(type) {
    case ADD_TODO:
      const newTodo = createTodo(payload.task);
      return [...state, newTodo];
    case DELETE_TODO:
      const index = state.findIndex(item => item.id === payload.id);
      const copyState = [...state]
      copyState.splice(index, 1);
      return copyState;
    case TOGGLE_TODO:
      const newState = state.map(item => item.id === payload.id ? {...item, done: !item.done} : item );
      return newState;
    default:
      return state;
  }
}

export default todosReducer;