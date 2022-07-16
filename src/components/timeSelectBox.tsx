import { FormEvent, useState, useEffect } from "react";

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
  const [currentTime, setCurrentTime] = useState<TimeType>({
    startHour: 0,
    startMinute: 0,
    endHour: 0,
    endMinute: 0,
  });

  const onChangeTime = (e: FormEvent<HTMLSelectElement>) => {
    if (isStartTime) setStartTime(e.currentTarget.value);
    else setEndTime(e.currentTarget.value);
  };

  useEffect(() => {
    if (!time) return;
    setCurrentTime(time);
  }, [time]);

  return (
    <div className="overflow-y-scroll">
      <select
        onChange={onChangeTime}
        className="outline-none"
        value={
          isStartTime
            ? `${currentTime.startHour}:${currentTime.startMinute}`
            : `${currentTime.endHour}:${currentTime.endMinute}`
        }
      >
        {hours.map((h) =>
          minutes.map((m) =>
            !isStartTime &&
            (currentTime.startHour > h ||
              (currentTime.startHour == h &&
                currentTime.startMinute >= m)) ? null : (
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
