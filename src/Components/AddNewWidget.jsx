import { useContext } from "react";
import WidgetDataContext from "../Data-Context/WidgetData";

const AddNewWidget = ({ category }) => {
  const { setNewWidgetTemplate, setCategory } = useContext(WidgetDataContext);
  return (
    <div className="w-full h-[300px] rounded-2xl flex flex-col gap-2 shadow p-4 bg-white">
      <div className="w-full h-full flex items-center justify-center">
        <button
          className="text-sm text-gray-400 font-semibold px-4 py-1 border-2 border-gray-400 rounded-md hover:border-black"
          onClick={() => {
            setCategory(category);
            setNewWidgetTemplate(true);
          }}
        >
          + Add Widget
        </button>
      </div>
    </div>
  );
};

export default AddNewWidget;
