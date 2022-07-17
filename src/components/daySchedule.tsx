import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteSchedule } from "../store/modules/schedule";
interface TimeType {
  startHour: number;
  startMinute: number;
  endHour: number;
  endMinute: number;
}
const DaySchedule = ({
  title,
  time,
  top,
  height,
  idx,
  date,
}: {
  title: string;
  time: TimeType;
  top?: string;
  height?: string;
  idx: number;
  date: string;
}) => {
  const dispatch = useDispatch();
  const [showDeleteForm, setShowDeleteForm] = useState<boolean>(false);
  //   const [top, setTop] = useState<string>("");
  //   const [height, setHeight] = useState<string>("");

  const onDeleteSchedule = () => {
    let scheduleData = {
      date,
      idx,
    };
    dispatch(deleteSchedule(scheduleData));
  };

  useEffect(() => {
    // const startPosition =
    //   ((Number(time.startHour) * 4 + Number(time.startMinute) / 15) / 96) * 100;
    // const timeGap =
    //   (((Number(time.endHour) - 1 - Number(time.startHour)) * 4 +
    //     (Number(time.endMinute) + 60 - Number(time.startMinute)) / 15) /
    //     96) *
    //   100;
    // setTop(`${startPosition}%`);
    // setHeight(`${timeGap}%`);
  }, []);

  return (
    <div
      className="absolute rounded w-5/6 p-2 text-white bg-indigo-600"
      style={{ top, height }}
      key={idx}
      onClick={() => setShowDeleteForm(!showDeleteForm)}
    >
      <span className="text-sm font-normal relative">{title}</span>
      <div
        className={`absolute w-fit h-fit right-full mr-1 top-1/3 z-20 font-medium bg-indigo-400 rounded p-2 cursor-pointer ${
          showDeleteForm ? "block" : "hidden"
        }`}
      >
        <div className="h-full w-full flex flex-col font-normal text-sm">
          <span>{title}</span>
          <div className="flex my-2">
            <span>
              {time.startHour == 0 || time.startHour == 12
                ? 12
                : time.startHour < 12
                ? time.startHour
                : time.startHour - 12}
              :{time.startMinute == 0 ? "00" : time.startMinute}
              {time.startHour < 12 ? "AM" : "PM"}
            </span>
            <span className="mx-1">-</span>
            <span>
              {time.endHour == 0 || time.endHour == 12
                ? 12
                : time.endHour < 12
                ? time.endHour
                : time.endHour - 12}
              :{time.endMinute == 0 ? "00" : time.endMinute}
              {time.endHour < 12 ? "AM" : "PM"}
            </span>
          </div>
          <button
            className="bg-indigo-600 rounded w-fit px-1 py-[1px]"
            onClick={onDeleteSchedule}
          >
            delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DaySchedule;