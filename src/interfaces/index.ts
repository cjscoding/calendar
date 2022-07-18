export interface DateType {
  year: string | number;
  month: string | number;
  monthName: string | number;
  day: string | number;
  dayName: string | number;
  date: string | number;
}

export interface TimeType {
  startHour: number;
  startMinute: number;
  endHour: number;
  endMinute: number;
}

export interface ScheduleType {
  title: string;
  time: {
    startHour: number;
    startMinute: number;
    endHour: number;
    endMinute: number;
  };
}
