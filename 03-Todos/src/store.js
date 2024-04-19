import { configureStore, createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',

  // Les données
  initialState: {
    items: [
      { id: 1, name: 'Faire les courses', done: false },
      { id: 2, name: 'Travailler', done: true },
      { id: 3, name: 'Surveiller Fiorella', done: true }
    ],
    nextId: 4
  },

  // Les actions sur ces données
  reducers: {
    addTodo: (state, action) => {
      return {
        ...state,
        nextId: state.nextId + 1,
        items: [
          ...state.items, {
          ...action.payload,
          id: state.nextId
        }]
      }
    },
    editTodo: (state, action) => {
      const { id, name } = action.payload;
      return {
        ...state,
        items: state.items.map((todo) => todo.id === id ? {...todo, name} : todo)
      }
    },
    deleteTodo: (state, action) => {
      return {
        ...state,
        items: state.items.filter((todo) => todo.id !== action.payload)
      }
    },
    toggle: (state, action) => {
      return {
        ...state,
        items: state.items.map(todo => todo.id === action.payload ? {...todo, done: !todo.done} : todo)
      }
    }
  },
  selectors: {
    allTodos: (state) => state.items,
    countTodo: (state) => state.items.length,
    completedTodos: (state) => state.items.filter(todo => todo.done).length
  }
});

export const { addTodo, editTodo, deleteTodo, toggle } = todosSlice.actions
export const { allTodos, countTodo, completedTodos } = todosSlice.selectors

// On va créer le store global
export const store = configureStore({
  reducer: {
    todos: todosSlice.reducer
  },
});