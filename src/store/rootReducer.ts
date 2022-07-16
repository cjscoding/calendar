import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import calendarReducer from "./modules/calendar";
import scheduleReducer from "./modules/schedule";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["calendarReducer", "scheduleReducer"],
};

const rootReducer = combineReducers({ calendarReducer, scheduleReducer });

export const persistedReducer = persistReducer(persistConfig, rootReducer);
export type RootState = ReturnType<typeof rootReducer>;
