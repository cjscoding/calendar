import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/rootReducer";
import { fetchDate, fetchWeek } from "../store/modules/calendar";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const AsideComponent = () => {
  const dispatch = useDispatch();

  const { showSideBar, date } = useSelector(
    (state: RootState) => state.calendarReducer
  );
  const [selected, setSelected] = useState<Date>();
  const [currentDate, setCurrentDate] = useState<Date>(new Date(date));

  interface dateType {
    date: string;
    year: number;
    month: number;
    day: number;
  }
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"];

  const getCurrentWeek = ({ date, year, month, day }: dateType) => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"];
    const currentDay = date.split(" ")[0];
    const currentDayIdx = days.indexOf(currentDay);

    // sun ~ sat
    const currentWeek = [];
    for (let i = day - currentDayIdx; i < day - currentDayIdx + 7; i++) {
      let newDate = new Date(year, month, i).toLocaleDateString().split(".");
      let dateObj = {
        year: newDate[0],
        month: newDate[1].trim(),
        monthName: monthNames[Number(newDate[1].trim()) - 1],
        day: newDate[2].trim(),
        dayName: dayNames[i],
      };
      currentWeek.push(dateObj);
    }
    dispatch(fetchWeek(currentWeek));
  };

  const fetchCurrentDate = (day: Date) => {
    const dayData = {
      date: day.toString(),
      year: day.getFullYear(),
      month: day.getMonth(),
      day: day.getDate(),
    };
    dispatch(fetchDate(dayData));
  };

  useEffect(() => {
    const selectedDate = new Date(date);
    setCurrentDate(selectedDate);

    const selectedDateObj = {
      date: selectedDate.toString(),
      year: selectedDate.getFullYear(),
      month: selectedDate.getMonth(),
      day: selectedDate.getDate(),
    };
    getCurrentWeek(selectedDateObj);
  }, [date]);

  return (
    <aside className={`${showSideBar ? "block" : "hidden"}`}>
      <DayPicker
        mode="single"
        month={currentDate}
        onMonthChange={setCurrentDate}
        selected={selected}
        onSelect={setSelected}
        onDayClick={fetchCurrentDate}
      />
    </aside>
  );
};

export default AsideComponent;
