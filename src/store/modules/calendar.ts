import { createSlice } from "@reduxjs/toolkit";

export type CalendarState = {
  //   showDate: {
  year: number;
  month: string;
  day: number;
  //   };
  showSideBar: boolean;
};

export const initialState: CalendarState = {
  //   showDate: {
  year: 2022,
  month: "July",
  day: 12,
  //   },
  showSideBar: true,
};
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    fetchDate(state: CalendarState, { payload }) {
      state.year = payload.year;
      state.month = monthNames[payload.month];
    },
    toggleSideBar(state: CalendarState) {
      state.showSideBar = !state.showSideBar;
    },
  },
});

export const { fetchDate, toggleSideBar } = calendarSlice.actions;
export default calendarSlice.reducer;
