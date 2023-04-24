import { configureStore } from "@reduxjs/toolkit";

import logger from "redux-logger";
import attributeReducer from "../components/attributes/attributesSlice";

export const store = configureStore({
  reducer: {
    attributes: attributeReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
