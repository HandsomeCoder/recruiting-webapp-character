import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  strength: {
    label: "Strength",
    value: 0,
  },
  dexterity: {
    label: "dexterity",
    value: 0,
  },
  constitution: {
    label: "constitution",
    value: 0,
  },
  intelligence: {
    label: "intelligence",
    value: 0,
  },
  wisdom: {
    label: "wisdom",
    value: 0,
  },
  charisma: {
    label: "charisma",
    value: 0,
  },
};

export const attributeSlice = createSlice({
  name: "attributes",
  initialState,
  reducers: {
    incrementAttribute: (state, action) => {
      const { key } = action.payload;

      if (!state[key]) {
        return;
      }

      state[key].value = current(state)[key].value + 1;
    },
    decrementAttribute: (state, action) => {
      const { key } = action.payload;

      if (!state[key]) {
        return;
      }

      state[key].value = current(state)[key].value - 1;
    },
  },
});

export const { incrementAttribute, decrementAttribute } = attributeSlice.actions;

export default attributeSlice.reducer;
