export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

export const addTodo = (data) => ({
  type: ADD_TODO,
  payload: { task: data.task }
});

export const deleteTodo = (data) => ({
  type: DELETE_TODO,
  payload: { id: data.id }
})

export const toggleTodo = (data) => ({
  type: TOGGLE_TODO,
  payload: { id: data.id }
})