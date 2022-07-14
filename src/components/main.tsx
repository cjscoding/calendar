import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/rootReducer";

const MainComponent = () => {
  const { currentWeek } = useSelector(
    (state: RootState) => state.calendarReducer
  );

  const week = ["SUN", "MON", "TUE", "WED", "THR", "FRI", "SAT"];
  const hours = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const [days, setDays] = useState([1, 2, 3, 4, 5, 6, 7]);

  const onClickBox = (e: any) => {
    console.dir(e.target);
    console.log(e.target.key);
    console.log(e.target.value);
  };

  useEffect(() => {}, []);

  return (
    <main className="w-full p-3 flex flex-col">
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

      <div className="flex h-screen text-[10px] font-light">
        <div className="w-16">
          <div className="h-screen grid grid-rows-[15px_repeat(24, minmax(0, 1fr))]">
            <div></div>
            {hours.map((h) => (
              <div key={h} className="border-t-[1px]" onClick={onClickBox}>
                {/* <div className="relative"> */}
                <span className="">{h} AM</span>
                {/* </div> */}
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
          {days.map((d) => (
            <div
              key={d}
              className="grid grid-rows-[15px_repeat(24, minmax(0, 1fr))] border-l-[1px] relative"
            >
              <div></div>
              {hours.map((h) => (
                <div key={h} className="border-t-[1px] text-white">
                  .
                  {d == 1 && h == 12 ? (
                    <div className="absolute top-10 left-0 w-5/6 h-3/4 rounded-sm text-black bg-indigo-500">
                      sdsdsjfks
                    </div>
                  ) : null}
                </div>
              ))}
              {hours.map((h) => (
                <div key={h + 12} className="border-t-[1px] text-white">
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
