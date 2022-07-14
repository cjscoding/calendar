import Header from "../components/header";
import Aside from "../components/aside";
import Main from "../components/main";
import { RootState } from "../store/rootReducer";
import { useSelector } from "react-redux";
import EventModal from "../components/eventModal";
import { useState } from "react";

const HomePage = () => {
  const { showSideBar } = useSelector(
    (state: RootState) => state.calendarReducer
  );
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <div>
      <Header />
      <div className="flex relative">
        {showSideBar ? (
          <button
            className="absolute top-3 left-3 flex items-center p-4 md:px-5 md:py-2.5 border-[1px] border-slate-300 rounded-full md:rounded-3xl"
            onClick={() => setShowModal(!showModal)}
          >
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
                d="M12 4v16m8-8H4"
              />
            </svg>
            <span className="ml-3 hidden md:block font-medium text-md">
              Create
            </span>
          </button>
        ) : (
          <button
            className="absolute top-3 left-3 flex items-center p-4 border-[1px] border-slate-300 rounded-full"
            onClick={() => setShowModal(!showModal)}
          >
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
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
        )}
        <EventModal showModal={showModal} setShowModal={setShowModal} />
        <div className="hidden md:block pt-12">
          <Aside />
        </div>
        <Main />
      </div>
    </div>
  );
};

export default HomePage;
