import { configureStore } from "@reduxjs/toolkit";

import logger from "redux-logger";
import attributeReducer from "../components/attributes/attributesSlice";
import classReducer from "../components/class/classSlice";

export const store = configureStore({
  reducer: {
    attributes: attributeReducer,
    clazzez: classReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
