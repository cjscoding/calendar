import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DateType {
  year: number;
  month: number;
  monthName: string;
  day: number;
  dayname: undefined;
}

interface ScheduleType {
  title: string;
  time: {
    startHour: number;
    startMinute: number;
    endHour: number;
    endMinute: number;
  };
}

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
    dayname: undefined,
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
  },
});

export const { setSelectedDateInfo, addSchedule, setCurrentWeekSchedules } = scheduleSlice.actions;
export default scheduleSlice.reducer;
