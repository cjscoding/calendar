import { RootState } from "../store/rootReducer";
import { useSelector, useDispatch } from "react-redux";
import { fetchDate, toggleSideBar } from "../store/modules/calendar";
import { useEffect } from "react";

const HeaderComponent = () => {
  const { year, month } = useSelector(
    (state: RootState) => state.calendarReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    let today = new Date();
    let dayData = {
      year: today.getFullYear(),
      month: today.getMonth(),
    };
    dispatch(fetchDate(dayData));
  }, []);

  return (
    <header className="p-3 border-b-[1px] border-slate-300 flex justify-between items-center">
      <div className="hidden sm:hidden md:flex">
        <button className="mr-5" onClick={() => dispatch(toggleSideBar())}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="ml-3 text-2xl font-semibold">Calendar</span>
        </div>
      </div>
      <div className="flex items-center">
        <button className="px-3 py-1.5 border-[1px] border-slate-300 rounded-md">
          Today
        </button>
        <button className="mx-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
        <span className="ml-3 font-semibold text-xl">
          {month} {year}
        </span>
      </div>
      <div className="flex items-center">
        <select
          name="options"
          className="px-3 py-1.5 border-[1px] border-slate-300 rounded-md outline-none hover:cursor-pointer"
        >
          <option value="week">Week</option>
          <option value="month">Month</option>
        </select>
        <div className="h-12 w-12 rounded-full overflow-hidden flex items-center ml-3">
          <img src="https://file.newswire.co.kr/data/datafile2/thumb_640/2020/07/3554238800_20200702112005_3344612467.jpg" />
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
