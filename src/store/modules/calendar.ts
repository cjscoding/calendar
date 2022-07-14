import { createSlice } from "@reduxjs/toolkit";

interface dateType {
  year: number;
  month: number;
  monthName: string;
  day: number;
  dayname: string;
}

export type CalendarState = {
  date: string;
  year: number;
  month: number;
  monthName: string;
  day: number;
  showSideBar: boolean;
  currentWeek: dateType[];
};

export const initialState: CalendarState = {
  date: "",
  year: 0,
  month: 0,
  day: 0,
  monthName: "",
  showSideBar: true,
  currentWeek: [],
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
    fetchWeek(state: CalendarState, { payload }) {
      state.currentWeek = payload;
    },
  },
});

export const { fetchDate, toggleSideBar, fetchWeek } = calendarSlice.actions;
export default calendarSlice.reducer;
