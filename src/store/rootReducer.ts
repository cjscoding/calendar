import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import calendarReducer from "./modules/calendar";
import eventReducer from "./modules/event";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["calendarReducer", "eventReducer"],
};

const rootReducer = combineReducers({ calendarReducer, eventReducer });

export const persistedReducer = persistReducer(persistConfig, rootReducer);
export type RootState = ReturnType<typeof rootReducer>;
