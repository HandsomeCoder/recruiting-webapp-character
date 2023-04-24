import { createSlice, current } from "@reduxjs/toolkit";

import { SKILL_LIST } from "./../../consts.js";
import { toast } from 'react-toastify';

const initialState = SKILL_LIST.reduce((obj, skill) => {
  if (!obj[skill.attributeModifier]) {
    obj[skill.attributeModifier] = {};
  }

  obj[skill.attributeModifier][skill.name] = 0;

  return obj;
}, {});

export const skillsSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {
    incrementSkill: (state, action) => {
      const { attrKey, attrValueModifier, skill } = action.payload;

      const total = Object.entries(state[attrKey]).reduce(
        (pv, cr) => pv + cr[1],
        0
      );

      const maxPoints = 10 + (attrValueModifier * 4);
      if (total === maxPoints) {
        toast.error(`Increase ${attrKey} to increase ${skill} skill`)
        return;
      }

      state[attrKey][skill] = current(state)[attrKey][skill] + 1;
    },
    decrementSkill: (state, action) => {
      const { attrKey, skill } = action.payload;
      const value = current(state)[attrKey][skill];
      state[attrKey][skill] = value === 0 ? 0 : value - 1;
    },
  },
});

export const { incrementSkill, decrementSkill } = skillsSlice.actions;

export default skillsSlice.reducer;
