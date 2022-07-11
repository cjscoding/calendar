import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CalendarState = {
  value: number;
};

const initialState: CalendarState = {
  value: 0,
};

const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    increment(state: CalendarState) {
      state.value += 1;
    },
    decrement(state: CalendarState) {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = calendarSlice.actions;
export default calendarSlice.reducer;
