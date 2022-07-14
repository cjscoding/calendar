import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/rootReducer";
import { fetchDate, fetchWeek } from "../store/modules/calendar";
import { calcCurrentWeek } from "../utils/calcWeek";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const AsideComponent = () => {
  const dispatch = useDispatch();

  const { showSideBar, date } = useSelector(
    (state: RootState) => state.calendarReducer
  );
  const [selected, setSelected] = useState<Date>();
  const [currentDate, setCurrentDate] = useState<Date>(new Date(date));

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
    let newWeek = calcCurrentWeek(selectedDateObj);
    dispatch(fetchWeek(newWeek));
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
