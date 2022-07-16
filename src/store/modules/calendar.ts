import { createSlice } from "@reduxjs/toolkit";

interface DateType {
  year: number;
  month: number;
  monthName: string;
  day: number;
  dayname: string;
  date: string;
}

export type CalendarState = {
  date: string;
  year: number;
  month: number;
  monthName: string;
  day: number;
  showSideBar: boolean;
  showModal: boolean;
  currentWeek: DateType[];
};

export const initialState: CalendarState = {
  date: "",
  year: 0,
  month: 0,
  day: 0,
  monthName: "",
  showSideBar: true,
  showModal: false,
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
    fetchWeek(state: CalendarState, { payload }) {
      state.currentWeek = payload;
    },
    toggleSideBar(state: CalendarState) {
      state.showSideBar = !state.showSideBar;
    },
    toggleModal(state: CalendarState, { payload }) {
      state.showModal = payload;
    },
  },
});

export const { fetchDate, toggleSideBar, fetchWeek, toggleModal } =
  calendarSlice.actions;
export default calendarSlice.reducer;
