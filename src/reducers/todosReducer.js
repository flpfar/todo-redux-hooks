const initialState = []

const todosReducer = (state = initialState, action) => {
  const { type, preload } = action;
  switch(type){
    case 'ADD_TODO':
      return [...state, {id: Math.floor(Math.random() * 2000), task: preload.task, done: false}];
    case 'DELETE_TODO':
      const copyState = [...state];
      const index = state.findIndex(item => item.id === preload.id)
      copyState.splice(index, 1)
      return copyState;
    case 'TOGGLE_TODO':
      const newState = state.map(item => item.id === preload.id ? {...item, done: !item.done} : item);
      return newState;
    default:
      return state;
  }
}

export default todosReducer;