import { RootState } from "../store/rootReducer";
import { useSelector, useDispatch } from "react-redux";
import { fetchDate, toggleSideBar, fetchWeek } from "../store/modules/calendar";
import { useEffect } from "react";

const HeaderComponent = () => {
  const dispatch = useDispatch();

  const { year, monthName, currentWeek } = useSelector(
    (state: RootState) => state.calendarReducer
  );

  interface dateType {
    date: string;
    year: number;
    month: number;
    day: number;
  }
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"];

  const getNextWeek = () => {
    const nextWeek = [];
    for (let i = 0; i < 7; i++) {
      let curWeekDay = currentWeek[i];

      let newDate = new Date(
        Number(curWeekDay.year),
        Number(curWeekDay.month) - 1,
        Number(curWeekDay.day) + 7
      )
        .toLocaleDateString()
        .split(".");
      let dateObj = {
        year: newDate[0],
        month: newDate[1].trim(),
        monthName: monthNames[Number(newDate[1].trim()) - 1],
        day: newDate[2].trim(),
        dayName: dayNames[i],
      };
      nextWeek.push(dateObj);
    }
    dispatch(fetchWeek(nextWeek));
  };

  const getPrevWeek = () => {
    const prevWeek = [];
    for (let i = 0; i < 7; i++) {
      let curWeekDay = currentWeek[i];

      let newDate = new Date(
        Number(curWeekDay.year),
        Number(curWeekDay.month) - 1,
        Number(curWeekDay.day) - 7
      )
        .toLocaleDateString()
        .split(".");
      let dateObj = {
        year: newDate[0],
        month: newDate[1].trim(),
        monthName: monthNames[Number(newDate[1].trim()) - 1],
        day: newDate[2].trim(),
        dayName: dayNames[i],
      };
      prevWeek.push(dateObj);
    }
    dispatch(fetchWeek(prevWeek));
  };

  const getCurrentWeek = ({ date, year, month, day }: dateType) => {
    const currentDay = date.split(" ")[0];
    const currentDayIdx = dayNames.indexOf(currentDay);

    // sun ~ sat
    const currentWeek = [];
    for (let i = 0; i < 7; i++) {
      let newDate = new Date(year, month, day - currentDayIdx + i)
        .toLocaleDateString()
        .split(".");
      let dateObj = {
        year: newDate[0],
        month: newDate[1].trim(),
        monthName: monthNames[Number(newDate[1].trim()) - 1],
        day: newDate[2].trim(),
        dayName: dayNames[i],
      };
      currentWeek.push(dateObj);
    }
    dispatch(fetchWeek(currentWeek));
  };

  const getToday = () => {
    const today = new Date();
    const dayData: dateType = {
      date: today.toString(),
      year: today.getFullYear(),
      month: today.getMonth(),
      day: today.getDate(),
    };
    dispatch(fetchDate(dayData));

    getCurrentWeek(dayData);
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
        <button className="mx-3" onClick={getPrevWeek}>
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
        <button onClick={getNextWeek}>
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
          {currentWeek[0].year !== currentWeek[6].year ? (
            <div>
              {currentWeek[0].monthName} {currentWeek[0].year} -{" "}
              {currentWeek[6].monthName} {currentWeek[6].year}
            </div>
          ) : currentWeek[0].month !== currentWeek[6].month ? (
            <div>
              {currentWeek[0].monthName} - {currentWeek[6].monthName}{" "}
              {currentWeek[6].year}
            </div>
          ) : (
            <div>
              {currentWeek[6].monthName} {currentWeek[6].year}
            </div>
          )}
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
