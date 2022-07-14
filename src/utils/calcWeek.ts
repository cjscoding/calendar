interface dateType {
  date: string;
  year: number;
  month: number;
  monthName?: string;
  day: number;
  dayname?: string;
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
const days = ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"];

export const calcCurrentWeek = ({ date, year, month, day }: dateType) => {
  const currentDay = date.split(" ")[0];
  const currentDayIdx = days.indexOf(currentDay);

  // sun ~ sat
  const currentWeek = [];
  for (let i = day - currentDayIdx; i < day - currentDayIdx + 7; i++) {
    let newDate = new Date(year, month, i).toLocaleDateString().split(".");
    let dateObj = {
      year: newDate[0],
      month: newDate[1].trim(),
      monthName: monthNames[Number(newDate[1].trim()) - 1],
      day: newDate[2].trim(),
      dayName: days[i],
    };
    currentWeek.push(dateObj);
  }
  return currentWeek;
};

export const calcPrevWeek = (currentWeek: dateType[]) => {
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
      dayName: days[i],
    };
    prevWeek.push(dateObj);
  }

  return prevWeek;
};

export const calcNextWeek = (currentWeek: dateType[]) => {
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
      dayName: days[i],
    };
    nextWeek.push(dateObj);
  }
  return nextWeek;
};
