import { useState } from "react";

const MainComponent = () => {
  const week = ["SUN", "MON", "TUE", "WED", "THR", "FRI", "SAT"];
  const hours = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const [days, setDays] = useState([1, 2, 3, 4, 5, 6, 7]);

  const onClickBox = (e: any) => {
    console.dir(e.target);
    console.log(e.target.key);
    console.log(e.target.value);
  };

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
          {days.map((d) => (
            <h2 key={d} className="text-2xl font-semibold">
              <div className="pt-3">{d}</div>
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
              className="grid grid-rows-[15px_repeat(24, minmax(0, 1fr))] border-l-[1px]"
            >
              <div></div>
              {hours.map((h) => (
                <div
                  key={h}
                  className="border-t-[1px] text-white"
                  onClick={onClickBox}
                >.</div>
              ))}
              {hours.map((h) => (
                <div key={h + 12} className="border-t-[1px] text-white">.</div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default MainComponent;

// {/* <div className="grid grid-flow-row grid-rows-">
//           <div className=""></div>
//           <div className="text-[10px] font-light">
//             {hours.map((h) => (
//               <div key={h} className="flex border-t-[1px]">
//                 <span>{h} AM</span>
//                 {/* <div className="border-t-[1px] w-5"></div> */}
//               </div>
//             ))}
//             {hours.map((h) => (
//               <div key={h} className="flex border-t-[1px]">
//                 <span>{h} PM</span>
//                 {/* <div className="border-t-[1px] w-5"></div> */}
//               </div>
//             ))}
//           </div>
//         </div> */}
