import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/rootReducer";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const AsideComponent = () => {
  const { showSideBar } = useSelector(
    (state: RootState) => state.calendarReducer
  );
  const [selected, setSelected] = useState<Date>();
  return (
    <aside className={`hidden md:${showSideBar ? "block" : "hidden"}`}>
      <DayPicker mode="single" selected={selected} onSelect={setSelected} />
    </aside>
  );
};

export default AsideComponent;
