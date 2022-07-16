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
  },
});

export const { setSelectedDateInfo, addSchedule } = scheduleSlice.actions;
export default scheduleSlice.reducer;
