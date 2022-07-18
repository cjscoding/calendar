import { configureStore } from "@reduxjs/toolkit";
import { persistedReducer } from "./rootReducer";
import { persistStore } from "redux-persist";
import logger from "redux-logger";

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
  devTools: process.env.NODE_ENV !== "development",
});

export const persistor = persistStore(store);
export default store;
