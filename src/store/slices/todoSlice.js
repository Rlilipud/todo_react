import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  auth: {
    isAuthenticated: false,
    userId: null, // Initialize userId to null
  },
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setUser: (state, action) => {
      return {
        ...state,
        users: [
          ...state.users,
          {
            id: action.payload.userId,
            username: action.payload.username,
            password: action.payload.password,
            email: action.payload.email,
            todos: []
          }
        ],
        auth: {
          ...state.auth,
          userId: action.payload.userId, // Update userId when setting user
        }
      };
    },
    addTodo: (state, action) => {
      const { userId, todo } = action.payload;
      console.log("Payload:", action.payload);
      console.log("Current state:", state);
    
      // Check if state.data exists
      if (!state.data) {
        console.error("State data is undefined");
        return state;
      }
    
      // Verify user ID and find the user in the state
      const userIndex = state.data.findIndex(user => user.id === userId);
      if (userIndex !== -1) {
        const updatedData = state.data.map((user, index) => {
          if (index === userIndex) {
            return {
              ...user,
              todos: [...user.todos, todo]
            };
          }
          return user;
        });
    
        console.log("Updated data:", updatedData);
    
        return {
          ...state,
          data: updatedData
        };
      } else {
        console.error("User not found with ID:", userId);
        return state;
      }
    },
    
    
    deleteTodo: (state, action) => {
      const { userId, todoId } = action.payload;
      return {
        ...state,
        users: state.users.map(user =>
          user.id === userId
            ? { ...user, todos: user.todos.filter(todo => todo.id !== todoId) }
            : user
        )
      };
    },
    editTodo: (state, action) => {
      const { userId, id, title, task } = action.payload;
      return {
        ...state,
        users: state.users.map(user =>
          console.log(user,'user')
          // user.id === userId
          //   ? {
          //       ...user,
          //       todos: user.todos.map(todo =>
          //         todo.id === id ? { ...todo, title, task } : todo
          //       )
          //     }
          //   : user
        )
      };
    },
    toggleDone: (state, action) => {
      const { userId, id } = action.payload;
      return {
        ...state,
        users: state.users.map(user =>
          user.id === userId
            ? {
                ...user,
                todos: user.todos.map(todo =>
                  todo.id === id ? { ...todo, done: !todo.done } : todo
                )
              }
            : user
        )
      };
    },
    setAuthenticated: (state, action) => {
      state.auth.isAuthenticated = action.payload;
    },
    clearAuthentication: (state) => {
      state.auth.isAuthenticated = false;
      state.auth.userId = null; // Clear userId when clearing authentication
    },
  },
});

export const { setUser, addTodo, deleteTodo, editTodo, toggleDone, setAuthenticated, clearAuthentication } = todosSlice.actions;

export default todosSlice.reducer;
