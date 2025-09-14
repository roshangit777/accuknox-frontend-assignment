import { RiArrowDropDownLine } from "react-icons/ri";
import { FaClock } from "react-icons/fa6";
import { MdLoop } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useContext, useState } from "react";
import WidgetDataContext from "../Data-Context/WidgetData";
const Menu = () => {
  const [countdown, setCountdown] = useState("Last 1 day");
  const [open, setOpen] = useState(false);
  const { setWidgetTemplate } = useContext(WidgetDataContext);
  return (
    <>
      <div className="w-full flex items-center justify-between mb-2">
        <h1 className="text-2xl font-bold my-4">CNAPP Dashboard</h1>
        <div className="flex items-center gap-2">
          <button
            className="px-3 py-[5px] bg-white border border-gray-300 rounded-md text-[15px] hover:border-black"
            onClick={() => setWidgetTemplate(true)}
          >
            Add Widget +
          </button>
          <button className="p-2 bg-white border border-gray-300 rounded-md text-shadow-md">
            <MdLoop />
          </button>
          <button className="p-2 bg-white border border-gray-300 rounded-md text-shadow-md">
            <BsThreeDotsVertical />
          </button>
          <div className="inline-block">
            <button
              className="flex items-center gap-2 border border-[#14147d] text-[#14147d] font-medium rounded-md px-3 py-1 bg-white hover:bg-blue-50"
              onClick={() => setOpen(!open)}
            >
              <span className="flex items-center gap-1">
                <FaClock className="text-xl text-[#14147d]" />{" "}
                <strong className="w-[2px] h-[20px] bg-[#14147d]"></strong>
              </span>
              <span className=" text-md w-[90px]">{countdown}</span>
              <RiArrowDropDownLine className="text-2xl" />
            </button>
            {open && (
              <ul className="absolute z-10 mt-1 w-[170px] bg-white border border-gray-200 rounded-md shadow-md">
                <li
                  className="px-3 py-2 hover:bg-blue-50 cursor-pointer"
                  onClick={() => {
                    setCountdown("Last 1 day"), setOpen(false);
                  }}
                >
                  Last 1 day
                </li>
                <li
                  className="px-3 py-2 hover:bg-blue-50 cursor-pointer"
                  onClick={() => {
                    setCountdown("Last 2 days"), setOpen(false);
                  }}
                >
                  Last 2 days
                </li>
                <li
                  className="px-3 py-2 hover:bg-blue-50 cursor-pointer"
                  onClick={() => {
                    setCountdown("Last 3 days"), setOpen(false);
                  }}
                >
                  Last 3 days
                </li>
                <li
                  className="px-3 py-2 hover:bg-blue-50 cursor-pointer"
                  onClick={() => {
                    setCountdown("Last 4 days"), setOpen(false);
                  }}
                >
                  Last 4 days
                </li>
                <li
                  className="px-3 py-2 hover:bg-blue-50 cursor-pointer"
                  onClick={() => {
                    setCountdown("Last 5 days"), setOpen(false);
                  }}
                >
                  Last 5 days
                </li>
                <li
                  className="px-3 py-2 hover:bg-blue-50 cursor-pointer"
                  onClick={() => {
                    setCountdown("Last 6 days"), setOpen(false);
                  }}
                >
                  Last 6 days
                </li>
                <li
                  className="px-3 py-2 hover:bg-blue-50 cursor-pointer"
                  onClick={() => {
                    setCountdown("Last 7 days"), setOpen(false);
                  }}
                >
                  Last 7 days
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
