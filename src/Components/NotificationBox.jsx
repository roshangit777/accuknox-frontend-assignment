import { useContext, useEffect } from "react";
import WidgetDataContext from "../Data-Context/WidgetData";

const NotificationBox = () => {
  const { msg, setMsg } = useContext(WidgetDataContext);

  useEffect(() => {
    if (msg) {
      const timer = setTimeout(() => setMsg(false), 2500);
      return () => clearTimeout(timer);
    }
  }, [msg, setMsg]);

  return (
    <div
      className={`fixed top-6 left-1/2 -translate-x-1/2 w-[220px] h-[50px] z-[1000] bg-white text-red-400 text-lg font-semibold flex items-center justify-center rounded-md shadow-lg transform transition-all duration-700 ease-in-out
        ${msg ? "translate-y-0 opacity-100" : "-translate-y-[200%] opacity-0"}`}
    >
      {msg}
    </div>
  );
};

export default NotificationBox;
