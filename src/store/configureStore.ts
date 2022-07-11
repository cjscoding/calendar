import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { persistedReducer } from "./rootReducer";
import { persistStore } from "redux-persist";

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== "development",
});

export const persistor = persistStore(store);
export default store;
