import { createSlice } from "@reduxjs/toolkit";
import { DateType, ScheduleType } from "../../interfaces";

export type ScheduleState = {
  selectedDate: DateType;
  selectedHour: number;
  schedules: {
    [key: string]: ScheduleType[];
  };
  currentWeekSchedules: ScheduleType[][];
};

export const initialState: ScheduleState = {
  selectedDate: {
    year: 0,
    month: 0,
    monthName: "",
    day: 0,
    dayName: "",
    date: "",
  },
  selectedHour: 0,
  schedules: {},
  currentWeekSchedules: [],
};

const scheduleSlice = createSlice({
  name: "schedule",
  initialState,
  reducers: {
    setSelectedDateInfo(state: ScheduleState, { payload }) {
      state.selectedDate = payload.date;
      state.selectedHour = payload.hour;
    },
    addSchedule(state: ScheduleState, { payload }) {
      if (!state.schedules[payload.date]) state.schedules[payload.date] = [];
      state.schedules[payload.date].push(payload.info);
    },
    setCurrentWeekSchedules(state: ScheduleState, { payload }) {
      state.currentWeekSchedules = payload;
    },
    deleteSchedule(state: ScheduleState, { payload }) {
      state.schedules[payload.date].splice(payload.idx, 1);
    },
  },
});

export const {
  setSelectedDateInfo,
  addSchedule,
  setCurrentWeekSchedules,
  deleteSchedule,
} = scheduleSlice.actions;
export default scheduleSlice.reducer;
