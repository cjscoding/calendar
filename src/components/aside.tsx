import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/rootReducer";
import { fetchDate } from "../store/modules/calendar";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const AsideComponent = () => {
  const dispatch = useDispatch();

  const { showSideBar } = useSelector(
    (state: RootState) => state.calendarReducer
  );
  const [selected, setSelected] = useState<Date>();

  const fetchCurrentDate = (day: Date) => {
    const dayData = {
      year: day.getFullYear(),
      month: day.getMonth(),
      day: day.getDate(),
    };
    dispatch(fetchDate(dayData));
  };

  return (
    <aside className={`${showSideBar ? "block" : "hidden"}`}>
      <DayPicker
        mode="single"
        selected={selected}
        onSelect={setSelected}
        onDayClick={fetchCurrentDate}
      />
    </aside>
  );
};

export default AsideComponent;
