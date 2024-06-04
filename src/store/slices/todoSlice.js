import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.users.push({
        id: action.payload.userId,
        username: action.payload.username,
        password: action.payload.password,
        email: action.payload.email,
        todos: [],
      });
    },
    addTodo: (state, action) => {
      const { userId, todo } = action.payload;
      const user = state.users.find((user) => user.id === userId);
      if (user) {
        user.todos.push(todo);
      }
    },
    deleteTodo: (state, action) => {
      const { userId, todoId } = action.payload;
      const user = state.users.find((user) => user.id === userId);
      if (user) {
        user.todos = user.todos.filter((todo) => todo.id !== todoId);
      }
    },
    editTodo: (state, action) => {
      const { userId, id, title, task } = action.payload;
      const user = state.users.find((user) => user.id === userId);
      if (user) {
        const todo = user.todos.find((todo) => todo.id === id);
        if (todo) {
          todo.title = title;
          todo.task = task;
        }
      }
    },
    toggleDone: (state, action) => {
      const { userId, id } = action.payload;
      const user = state.users.find((user) => user.id === userId);
      if (user) {
        const todo = user.todos.find((todo) => todo.id === id);
        if (todo) {
          todo.done = !todo.done;
        }
      }
    },
  },
});

export const { setUser, addTodo, deleteTodo, editTodo, toggleDone } =
  todosSlice.actions;

export default todosSlice.reducer;
