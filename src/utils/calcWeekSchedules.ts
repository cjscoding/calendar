export const calcWeekSchedules = ({
  newWeek,
  schedules,
}: {
  newWeek: any;
  schedules: any;
}) => {
  let currentWeekSchedulesArray = new Array(7).fill([]);
  for (let i = 0; i < 7; i++) {
    let y = newWeek[i].year;
    let m =
      newWeek[i].month.length == 1
        ? "0" + newWeek[i].month.toString()
        : newWeek[i].month;
    let d =
      newWeek[i].day.length == 1
        ? "0" + newWeek[i].day.toString()
        : newWeek[i].day;
    let key = `${y}-${m}-${d}`;
    if (schedules[key]) {
      currentWeekSchedulesArray[i] = schedules[key];
    }
  }
  return currentWeekSchedulesArray;
};
