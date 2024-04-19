import { configureStore, createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',

  // Les données
  initialState: [
        { id: 1, name: 'Fiorella'},
        { id: 2, name: 'Toto'},
        { id: 3, name: 'Titi'}
    ],

  // Les actions sur ces données
  reducers: {
    removeName: (state, action) => {
        return state.filter((user) => user.id !== action.payload)
    }
  },
});

export const { removeName } = userSlice.actions

// On va créer le store global
export const store = configureStore({
  reducer: {
    user: userSlice.reducer
  },
});