import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialNamesState = {
  items: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

const namesSlice = createSlice({
  name: 'names',
  initialState: initialNamesState,
  reducers: {
    addName: {
      reducer(state, action) {
        if (
          state.items.some(
            contact =>
              contact.name.toLowerCase() === action.payload.name.toLowerCase()
          )
        ) {
          return alert(`${action.payload.name} is already in contacts.`);
        }
        state.items.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteName(state, action) {
      return {
        ...state,
        items: state.items.filter(name => name.id !== action.payload),
      };
    },
  },
});

export const { addName, deleteName } = namesSlice.actions;
export const namesReducers = namesSlice.reducer;
