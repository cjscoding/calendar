import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleModal } from "../store/modules/calendar";
import { RootState } from "../store/rootReducer";
import { setSelectedDateInfo } from "../store/modules/schedule";

const MainComponent = () => {
  const dispatch = useDispatch();
  const { currentWeek } = useSelector(
    (state: RootState) => state.calendarReducer
  );

  const week = ["SUN", "MON", "TUE", "WED", "THR", "FRI", "SAT"];
  const hours = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  const onClickTable = ({ date, idx }: { date: any; idx: number }) => {
    console.log(date, idx);
    dispatch(setSelectedDateInfo({ date, hour: idx }));
    dispatch(toggleModal(true));
  };

  useEffect(() => {}, []);

  return (
    <main className="w-full p-3 flex flex-col">
      {/* main topbar */}
      <div className="flex">
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
          <div className="h-screen grid grid-rows-[15px_repeat(24, minmax(0, 1fr))]">
            <div></div>
            {hours.map((h) => (
              <div key={h} className="border-t-[1px]">
                <span className="">{h} AM</span>
              </div>
            ))}
            {hours.map((h) => (
              <div key={h + 12} className="border-t-[1px]">
                <span>{h} PM</span>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full grid grid-flow-col">
          {currentWeek.map((date) => (
            <div
              key={date.day}
              className="grid grid-rows-[15px_repeat(24, minmax(0, 1fr))] border-l-[1px] relative"
            >
              <div></div>
              {hours.map((h, idx) => (
                <div
                  key={idx}
                  className="border-t-[1px] text-white"
                  onClick={() => onClickTable({ date, idx })}
                >
                  .
                  {date.day == 1 && h == 12 ? (
                    <div className="absolute top-10 left-0 w-5/6 h-3/4 rounded-sm text-black bg-indigo-500">
                      sdsdsjfks
                    </div>
                  ) : null}
                </div>
              ))}
              {hours.map((h, idx) => (
                <div
                  key={idx + 12}
                  className="border-t-[1px] text-white"
                  onClick={() => onClickTable({ date, idx: idx + 12 })}
                >
                  .
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default MainComponent;
