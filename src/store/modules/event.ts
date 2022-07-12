import { createSlice } from "@reduxjs/toolkit";

export type EventState = {};

export const initialState: EventState = {};

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {},
});

export const {} = eventSlice.actions;
export default eventSlice.reducer;
