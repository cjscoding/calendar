import { RootState } from "../store/rootReducer";
import { useSelector, useDispatch } from "react-redux";
import { fetchDate, toggleSideBar } from "../store/modules/calendar";
import { useEffect } from "react";

const HeaderComponent = () => {
  const dispatch = useDispatch();

  const { year, monthName } = useSelector(
    (state: RootState) => state.calendarReducer
  );

  const getToday = () => {
    const today = new Date();
    const dayData = {
      date: today,
      year: today.getFullYear(),
      month: today.getMonth(),
      day: today.getDate(),
    };
    dispatch(fetchDate(dayData));
  };

  const fetchToday = () => {
    getToday();
  };

  useEffect(() => {
    getToday();
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
        <button
          className="px-3 py-1.5 border-[1px] border-slate-300 rounded-md"
          onClick={fetchToday}
        >
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
          {monthName} {year}
        </span>
      </div>
      <div className="flex items-center">
        <div className="px-2 py-1.5 border-[1px] border-slate-300 rounded-md">
          <select
            name="options"
            className="outline-none hover:cursor-pointer w-max h-max"
          >
            <option value="week">Week</option>
            <option value="month">Month</option>
          </select>
        </div>
        <div className="h-12 w-12 rounded-full overflow-hidden flex items-center ml-3">
          <img src="https://file.newswire.co.kr/data/datafile2/thumb_640/2020/07/3554238800_20200702112005_3344612467.jpg" />
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
