import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleModal } from "../store/modules/calendar";
import { RootState } from "../store/rootReducer";
import { setSelectedDateInfo, deleteSchedule } from "../store/modules/schedule";
import DaySchedule from "./daySchedule";

interface TimeType {
  startHour: number;
  startMinute: number;
  endHour: number;
  endMinute: number;
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

const MainComponent = () => {
  const dispatch = useDispatch();
  const { currentWeek } = useSelector(
    (state: RootState) => state.calendarReducer
  );
  const { currentWeekSchedules } = useSelector(
    (state: RootState) => state.scheduleReducer
  );

  const week = ["SUN", "MON", "TUE", "WED", "THR", "FRI", "SAT"];
  const hours = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23,
  ];
  const [update, setUpdate] = useState(false);
  //   const [showDeleteForm, setShowDeleteForm] = useState<boolean>(false);

  //   const onDeleteSchedule = ({ date, idx }: { date: any; idx: number }) => {
  //     let scheduleData = {
  //       date,
  //       idx,
  //     };
  //     dispatch(deleteSchedule(scheduleData));
  //   };

  const onClickTable = ({ date, idx }: { date: any; idx: number }) => {
    // console.log(date, idx);
    dispatch(setSelectedDateInfo({ date, hour: idx }));
    dispatch(toggleModal(true));
  };

  const calcScheduleBoxPosition = ({
    title,
    time,
  }: {
    title: string;
    time: TimeType;
  }) => {
    const calcStartPosition =
      ((time.startHour * 4 + time.startMinute / 15) / 96) * 100;
    const calcTimeGap =
      (time.endHour - 1 - time.startHour) * 4 +
      (time.endMinute + 60 - time.startMinute) / 15;
    const calcHeight = (calcTimeGap / 96) * 100;
    const top = `top-[${calcStartPosition}%]`;
    const height = `h-[${calcHeight}%]`;
    console.log(top, height);
    return (
      <div
        key={time.startHour}
        className={`absolute bg-indigo-300 p-1 rounded w-5/6`}
        style={{ top: top, height: height }}
      >
        <span className="text-base font-semibold">{title}</span>
      </div>
    );
  };

  useEffect(() => {
    setUpdate(!update);
  }, [currentWeekSchedules]);

  return (
    <main className="w-full p-3 flex flex-col">
      {/* main topbar */}
      <div className="flex mb-3">
        <div className="flex justify-end items-end text-[10px] font-light w-16"></div>
        <div className="w-full grid grid-cols-7 text-center">
          {week.map((w) => (
            <span key={w} className="text-xs font-light">
              {w}
            </span>
          ))}
          {currentWeek.map((date) => (
            <h2 key={date.day} className="text-2xl font-semibold">
              <div className="pt-3">{date.day}</div>
            </h2>
          ))}
        </div>
      </div>
      {/* main table */}
      <div className="flex h-screen text-[10px] font-light">
        <div className="w-16">
          <div className="h-screen grid grid-rows-24">
            {hours.map((h) => (
              <div key={h} className="border-t-[1px]">
                <span className="">
                  {h == 0 ? 12 : h > 12 ? h - 12 : h} {h >= 12 ? "PM" : "AM"}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full grid grid-flow-col">
          {currentWeek.map((date, idx) => (
            <div
              key={date.day}
              className="grid grid-rows-24 border-l-[1px] relative"
            >
              {hours.map((h, idx) => (
                <div
                  key={idx}
                  className="border-t-[1px] text-white"
                  onClick={() => onClickTable({ date, idx })}
                ></div>
              ))}
              {currentWeekSchedules[idx].map((schedule, idx) => {
                const startPosition =
                  ((Number(schedule.time.startHour) * 4 +
                    Number(schedule.time.startMinute) / 15) /
                    96) *
                  100;
                const timeGap =
                  (((Number(schedule.time.endHour) -
                    1 -
                    Number(schedule.time.startHour)) *
                    4 +
                    (Number(schedule.time.endMinute) +
                      60 -
                      Number(schedule.time.startMinute)) /
                      15) /
                    96) *
                  100;

                const top = `${startPosition}%`;
                const height = `${timeGap}%`;

                return (
                  <DaySchedule
                    key={idx}
                    top={top}
                    height={height}
                    date={date.date}
                    title={schedule.title}
                    time={schedule.time}
                    idx={idx}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default MainComponent;
