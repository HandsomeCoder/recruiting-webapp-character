import { createSlice, current } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  metadata: {
    total: 60,
    summary: {},
  },
  data: {
    strength: {
      label: "Strength",
      value: 10,
      valueModifier: 0,
    },
    dexterity: {
      label: "dexterity",
      value: 10,
      valueModifier: 0,
    },
    constitution: {
      label: "constitution",
      value: 10,
      valueModifier: 0,
    },
    intelligence: {
      label: "intelligence",
      value: 10,
      valueModifier: 0,
    },
    wisdom: {
      label: "wisdom",
      value: 10,
      valueModifier: 0,
    },
    charisma: {
      label: "charisma",
      value: 10,
      valueModifier: 0,
    },
  },
};

export const attributeSlice = createSlice({
  name: "attributes",
  initialState,
  reducers: {
    incrementAttribute: (state, action) => {
      const key = action.payload;

      const currentState = current(state);
      if (currentState.metadata.total === 70) {
        toast.error(`Attribute maximum limit reach of 70`);
        return;
      }

      const newValue = currentState.data[key].value + 1;

      state.data[key].value = newValue;
      state.data[key].valueModifier = Math.floor((newValue - 10) / 2);
      state.metadata.total = currentState.metadata.total + 1;

      state.metadata.summary = Object.entries(state.data).reduce(
        (obj, [key, value]) => ({
          ...obj,
          [key]: value.value,
        }),
        {}
      );
    },
    decrementAttribute: (state, action) => {
      const key = action.payload;

      const currentState = current(state);
      const newValue = currentState.data[key].value - 1;

      state.data[key].value = newValue;
      state.data[key].valueModifier = Math.floor((newValue - 10) / 2);
      state.metadata.total = currentState.metadata.total - 1;

      state.metadata.summary = Object.entries(state.data).reduce(
        (obj, [key, value]) => ({
          ...obj,
          [key]: value.value,
        }),
        {}
      );
    },
  },
});

export const { incrementAttribute, decrementAttribute } =
  attributeSlice.actions;

export default attributeSlice.reducer;
