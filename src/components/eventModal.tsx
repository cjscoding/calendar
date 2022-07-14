import { SetStateAction, useEffect, Dispatch } from "react";

const EventModalComponent = ({
  showModal,
  setShowModal,
}: {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}) => {
  useEffect(() => {
    console.log(showModal);
  }, [showModal]);

  return (
    <div
      className={`${showModal ? "block" : "hidden"}`}
      onClick={() => setShowModal(false)}
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
                onClick={() => setShowModal(false)}
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
                className="outline-none mb-3"
              />
              <div className="flex text-[13px]">
                  <span className="mr-5">Friday, December 31, 2022</span>
                  <div>
                      <span>3:30 AM</span>
                      <span className="mx-3">-</span>
                      <span>4:30 AM</span>
                  </div>
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-4 border-t border-solid border-slate-200 rounded-b">
              <button
                className="bg-indigo-500 text-white active:bg-indigo-300 font-bold text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
  );
};

export default EventModalComponent;
