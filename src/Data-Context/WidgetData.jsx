import { createContext, useReducer, useState } from "react";
import { Datas } from "./Data";
import { reducerData } from "./WidgetReducer";

const WidgetDataContext = createContext([]);

export const WidgetData = ({ children }) => {
  const [newDatas, dispatchData] = useReducer(reducerData, Datas);
  const [widgetTemplate, setWidgetTemplate] = useState(false);
  const [category, setCategory] = useState("");
  const [newWidgetTemplate, setNewWidgetTemplate] = useState(false);
  const [msg, setMsg] = useState("");

  return (
    <WidgetDataContext.Provider
      value={{
        newDatas,
        dispatchData,
        widgetTemplate,
        setWidgetTemplate,
        category,
        setCategory,
        newWidgetTemplate,
        setNewWidgetTemplate,
        msg,
        setMsg,
      }}
    >
      {children}
    </WidgetDataContext.Provider>
  );
};
export default WidgetDataContext;
