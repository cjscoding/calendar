import { DateType } from "../interfaces";

const monthNames = [
  "January",
  "Febrary",
  "March",
  "April",
  "May",
  "Jun",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const days = ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"];

export const calcCurrentWeek = ({ date, year, month, day }: DateType) => {
  const currentDay = date.toString().split(" ")[0];
  const currentDayIdx = days.indexOf(currentDay);

  // sun ~ sat
  const currentWeek = [];
  for (
    let i = Number(day) - currentDayIdx;
    i < Number(day) - currentDayIdx + 7;
    i++
  ) {
    let newDate = new Date(Number(year), Number(month), i);
    let newDateLocale = newDate.toLocaleDateString().split(".");
    let newDateString = newDate.toString().split(" ")[0];

    let dateObj = {
      date: `${newDateLocale[0]}-${
        Number(newDateLocale[1].trim()) < 10
          ? "0" + newDateLocale[1].trim()
          : newDateLocale[1].trim()
      }-${
        Number(newDateLocale[2].trim()) < 10
          ? "0" + newDateLocale[2].trim()
          : newDateLocale[2].trim()
      }`,
      year: newDateLocale[0],
      month: newDateLocale[1].trim(),
      monthName: monthNames[Number(newDateLocale[1].trim()) - 1],
      day: newDateLocale[2].trim(),
      dayName: newDateString,
    };
    currentWeek.push(dateObj);
  }
  return currentWeek;
};

export const calcPrevWeek = (currentWeek: DateType[]) => {
  const prevWeek = [];
  for (let i = 0; i < 7; i++) {
    let curWeekDay = currentWeek[i];

    let newDate = new Date(
      Number(curWeekDay.year),
      Number(curWeekDay.month) - 1,
      Number(curWeekDay.day) - 7
    );
    let newDateLocale = newDate.toLocaleDateString().split(".");
    let newDateString = newDate.toString().split(" ")[0];

    let dateObj = {
      date: newDate.toLocaleDateString(),
      year: newDateLocale[0],
      month: newDateLocale[1].trim(),
      monthName: monthNames[Number(newDateLocale[1].trim()) - 1],
      day: newDateLocale[2].trim(),
      dayName: newDateString,
    };
    prevWeek.push(dateObj);
  }

  return prevWeek;
};

export const calcNextWeek = (currentWeek: DateType[]) => {
  const nextWeek = [];
  for (let i = 0; i < 7; i++) {
    let curWeekDay = currentWeek[i];

    let newDate = new Date(
      Number(curWeekDay.year),
      Number(curWeekDay.month) - 1,
      Number(curWeekDay.day) + 7
    );
    let newDateLocale = newDate.toLocaleDateString().split(".");
    let newDateString = newDate.toString().split(" ")[0];

    let dateObj = {
      date: newDate.toLocaleDateString(),
      year: newDateLocale[0],
      month: newDateLocale[1].trim(),
      monthName: monthNames[Number(newDateLocale[1].trim()) - 1],
      day: newDateLocale[2].trim(),
      dayName: newDateString,
    };
    nextWeek.push(dateObj);
  }
  return nextWeek;
};
