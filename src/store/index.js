import { configureStore } from "@reduxjs/toolkit";

import logger from "redux-logger";
import attributeReducer from "../components/attributes/attributesSlice";
import classReducer from "../components/class/classSlice";
import skillsReducer from "../components/skills/skillSlice";

export const store = configureStore({
  reducer: {
    attributes: attributeReducer,
    clazzez: classReducer,
    skills: skillsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
