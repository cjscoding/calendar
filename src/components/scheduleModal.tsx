import { useEffect, useState, MouseEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleModal } from "../store/modules/calendar";
import { RootState } from "../store/rootReducer";
import { addSchedule } from "../store/modules/schedule";
import { TimeType } from "../interfaces";
import TimeSelectBox from "./timeSelectBox";

const EventModalComponent = () => {
  const dispatch = useDispatch();
  const { showModal } = useSelector(
    (state: RootState) => state.calendarReducer
  );
  const { selectedDate, selectedHour } = useSelector(
    (state: RootState) => state.scheduleReducer
  );

  const [title, setTitle] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<TimeType>({
    startHour: 0,
    startMinute: 0,
    endHour: 0,
    endMinute: 0,
  });

  const setStartTime = (startTime: string) => {
    let selectedStartTime = startTime.split(":");
    let newTime = {
      ...time,
      startHour: Number(selectedStartTime[0]),
      startMinute: Number(selectedStartTime[1]),
    };
    setTime(newTime);
  };

  const setEndTime = (endTime: string) => {
    let selectedEndTime = endTime.split(":");
    let newTime = {
      ...time,
      endHour: Number(selectedEndTime[0]),
      endMinute: Number(selectedEndTime[1]),
    };
    setTime(newTime);
  };

  const addNewSchedule = (e: MouseEvent<HTMLButtonElement>) => {
    if (!title) {
      alert("Title is required");
      return;
    }
    const info = { title, time };
    dispatch(addSchedule({ date, info }));
    dispatch(toggleModal(false));
    setTitle("");
  };

  useEffect(() => {
    if (!selectedDate) return;
    let month =
      selectedDate.month < 10
        ? "0" + selectedDate.month.toString()
        : selectedDate.month;
    let day =
      selectedDate.day < 10
        ? "0" + selectedDate.day.toString()
        : selectedDate.day;
    setDate(`${selectedDate.year}-${month}-${day}`);
  }, [selectedDate]);

  useEffect(() => {
    if (selectedHour >= 0) {
      let newTime = {
        startHour: selectedHour,
        startMinute: 0,
        endHour: selectedHour === 23 ? 23 : selectedHour + 1,
        endMinute: selectedHour === 23 ? 15 : 0,
      };
      setTime(newTime);
    }
  }, [selectedHour]);

  return (
    <div
      className={`${showModal ? "block" : "hidden"}`}
      onClick={() => dispatch(toggleModal(false))}
    >
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div
            className="border-0 rounded-lg shadow-lg relative flex flex-col w-96 bg-white outline-none focus:outline-none"
            onClick={(e) => e.stopPropagation()}
          >
            {/*header*/}
            <div className="bg-indigo-100 flex items-start justify-between p-1 border-b border-solid border-slate-200 rounded-t">
              <button
                className="p-1 ml-auto bg-transparent border-0 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => dispatch(toggleModal(false))}
              >
                <span className="text-2xl text-indigo-500 mr-3 block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <input
                type="text"
                placeholder="Add title"
                autoFocus
                className="outline-none mb-3 text-xl"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              <div className="flex items-center text-[13px]">
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                <div className="flex items-center">
                  <TimeSelectBox
                    setStartTime={setStartTime}
                    setEndTime={setEndTime}
                    isStartTime={true}
                    time={time}
                  />
                  <span className="mx-3">-</span>
                  <TimeSelectBox
                    setStartTime={setStartTime}
                    setEndTime={setEndTime}
                    isStartTime={false}
                    time={time}
                  />
                </div>
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-4 border-t border-solid border-slate-200 rounded-b">
              <button
                className="bg-indigo-500 text-white active:bg-indigo-300 font-bold text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={addNewSchedule}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40"></div>
    </div>
  );
};

export default EventModalComponent;
