import { FormEvent, useEffect } from "react";

interface TimeType {
  startHour: number;
  startMinute: number;
  endHour: number;
  endMinute: number;
}

const TimeSelectBox = ({
  setStartTime,
  setEndTime,
  isStartTime,
  time,
}: {
  setStartTime?: any;
  setEndTime?: any;
  isStartTime: boolean;
  time: TimeType;
}) => {
  const hours = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23,
  ];
  const minutes = [0, 15, 30, 45];

  const onChangeTime = (e: FormEvent<HTMLSelectElement>) => {
    if (isStartTime) setStartTime(e.currentTarget.value);
    else setEndTime(e.currentTarget.value);
  };

  useEffect(() => {
    console.log(time);
  }, [time]);

  return (
    <div className="overflow-y-scroll">
      <select
        onChange={onChangeTime}
        className="outline-none"
        value={
          isStartTime
            ? `${time.startHour}:${time.startMinute}`
            : `${time.endHour}:${time.endMinute}`
        }
      >
        {hours.map((h) =>
          minutes.map((m) =>
            !isStartTime &&
            (time.startHour > h ||
              (time.startHour == h && time.startMinute >= m)) ? null : (
              <option key={`${h}:${m}`} value={`${h}:${m}`}>
                {h == 0 || h == 12 ? 12 : h < 12 ? h : h - 12}:
                {m == 0 ? "00" : m}
                {h < 12 ? "am" : "pm"}
              </option>
            )
          )
        )}
      </select>
    </div>
  );
};
export default TimeSelectBox;
