import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todos: [],
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload)
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      const { id, title, task } = action.payload;
      const todoToEdit = state.todos.find(todo => todo.id === id);
      if (todoToEdit) {
        todoToEdit.title = title;
        todoToEdit.task = task;
      }
    },
    toggleDone: (state, action) => {
      const { id } = action.payload;
      const todoToToggle = state.todos.find(todo => todo.id === id);
      if (todoToToggle) {
        todoToToggle.done = true; 
      }
    }
    
  },
})

export const { addTodo, deleteTodo, editTodo, toggleDone } = todosSlice.actions

export default todosSlice.reducer
