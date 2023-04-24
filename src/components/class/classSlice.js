import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  barbarian: {
    label: "barbarian",
    match: false,
    attributes: {
      strength: 14,
      dexterity: 9,
      constitution: 9,
      intelligence: 9,
      wisdom: 9,
      charisma: 9,
    },
  },
  wizard: {
    label: "wizard",
    match: false,
    attributes: {
      strength: 9,
      dexterity: 9,
      constitution: 9,
      intelligence: 14,
      wisdom: 9,
      charisma: 9,
    },
  },
  bard: {
    label: "bard",
    match: false,
    attributes: {
      strength: 9,
      dexterity: 9,
      constitution: 9,
      intelligence: 9,
      wisdom: 9,
      charisma: 14,
    },
  },
};

export const classSlice = createSlice({
  name: "clazz",
  initialState,
  reducers: {
    checkForMatch: (state, action) => {
      const attributes  = action.payload;
      const clazzez = current(state);
      for (let [clazz, value] of Object.entries(clazzez)) {
        let match = true;
        for (let [attr, req] of Object.entries(value.attributes)) {
          if (attributes[attr] < req) {
            match = false;
            break;
          }
        }
        state[clazz].match = match;
      }
    },
  },
});

export const { checkForMatch } = classSlice.actions;

export default classSlice.reducer;
