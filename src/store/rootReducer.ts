import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import calendarReducer from "./modules/calendar";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["calendarReducer"],
};

const rootReducer = combineReducers({ calendarReducer });

export const persistedReducer = persistReducer(persistConfig, rootReducer);
export type RootState = ReturnType<typeof rootReducer>;
