import { createSlice } from "@reduxjs/toolkit";

export type CalendarState = {
  //   showDate: {
  date: string;
  year: number;
  month: number;
  monthName: string;
  day: number;
  //   };
  showSideBar: boolean;
};

export const initialState: CalendarState = {
  //   showDate: {
  date: "",
  year: 0,
  month: 0,
  day: 0,
  monthName: "",
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
      state.date = payload.date;
      state.year = payload.year;
      state.month = payload.month + 1;
      state.day = payload.day;
      state.monthName = monthNames[payload.month];
    },
    toggleSideBar(state: CalendarState) {
      state.showSideBar = !state.showSideBar;
    },
  },
});

export const { fetchDate, toggleSideBar } = calendarSlice.actions;
export default calendarSlice.reducer;
