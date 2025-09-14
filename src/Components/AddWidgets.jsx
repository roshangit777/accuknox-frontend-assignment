import { useContext, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import WidgetDataContext from "../Data-Context/WidgetData";
const AddWidgets = () => {
  const { widgetTemplate, setWidgetTemplate, newDatas, dispatchData } =
    useContext(WidgetDataContext);
  const [selected, setSelected] = useState(0);
  return (
    <section
      className={`w-1/2 h-screen fixed z-[1000] right-0 top-0 bg-white flex flex-col ${
        widgetTemplate ? "right-0" : "hidden"
      }`}
    >
      <div className="w-full flex items-center justify-between p-5 bg-[#14147d]">
        <h2 className="text-white text-md">Add Widget</h2>
        <span
          className="text-white text-2xl"
          onClick={() => setWidgetTemplate(false)}
        >
          <RxCross2 />
        </span>
      </div>
      <h3 className="text-gray-500 text-sm p-5 font-semibold">
        Personalise your dashboard by adding the following widget
      </h3>
      <div className="flex ml-5">
        {Object.keys(newDatas).map((item, index) => {
          return (
            <button
              className={`text-sm font-semibold border-b-3 hover:text-black hover:border-black pl-4 pb-3 pr-4 ${
                selected === index
                  ? "text-black border-black"
                  : "text-gray-400 border-gray-300"
              }`}
              onClick={() => setSelected(index)}
            >
              {item}
            </button>
          );
        })}
      </div>
      {/* CSPW */}
      {selected === 0 && (
        <div className="flex flex-col gap-2 p-10 pt-5 pr-5">
          {newDatas?.CSPM?.widgets.map((item, index) => {
            return (
              <label
                key={index}
                class="flex items-center gap-2 p-2 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50"
              >
                <input
                  type="checkbox"
                  class="peer hidden"
                  checked={!item?.hidden}
                  onChange={() =>
                    dispatchData({
                      type: "TOGGLE_CSPM_WIDGET_VISIBILITY",
                      payload: item.id,
                    })
                  }
                />

                <span class="w-5 h-5 flex items-center justify-center border-2 rounded-sm border-gray-400 peer-checked:bg-[#0b1c49]">
                  <svg
                    class="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span class="text-gray-800 font-medium">{item?.title}</span>
              </label>
            );
          })}
        </div>
      )}
      {/* CWPP */}
      {selected === 1 && (
        <div className="flex flex-col gap-2 p-10 pt-5 pr-5">
          {newDatas?.CWPP?.widgets.map((item, index) => {
            return (
              <label
                key={index}
                class="flex items-center gap-2 p-2 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50"
              >
                <input
                  type="checkbox"
                  class="peer hidden"
                  checked={!item?.hidden}
                  onChange={() =>
                    dispatchData({
                      type: "TOGGLE_CWPP_WIDGET_VISIBILITY",
                      payload: item.id,
                    })
                  }
                />

                <span class="w-5 h-5 flex items-center justify-center border-2 rounded-sm border-gray-400 peer-checked:bg-[#0b1c49]">
                  <svg
                    class="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span class="text-gray-800 font-medium">{item?.title}</span>
              </label>
            );
          })}
        </div>
      )}
      {/* Image */}
      {selected === 2 && (
        <div className="flex flex-col gap-2 p-10 pt-5 pr-5">
          {newDatas?.Image?.widgets.map((item, index) => {
            return (
              <label
                key={index}
                class="flex items-center gap-2 p-2 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50"
              >
                <input
                  type="checkbox"
                  class="peer hidden"
                  checked={!item?.hidden}
                  onChange={() =>
                    dispatchData({
                      type: "TOGGLE_IMAGE_WIDGET_VISIBILITY",
                      payload: item.id,
                    })
                  }
                />

                <span class="w-5 h-5 flex items-center justify-center border-2 rounded-sm border-gray-400 peer-checked:bg-[#0b1c49]">
                  <svg
                    class="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span class="text-gray-800 font-medium">{item?.title}</span>
              </label>
            );
          })}
        </div>
      )}
      {/* Ticket */}
      {selected === 3 && (
        <div className="flex flex-col gap-2 p-10 pt-5 pr-5">
          {newDatas?.Ticket?.widgets.map((item, index) => {
            return (
              <label
                key={index}
                class="flex items-center gap-2 p-2 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50"
              >
                <input
                  type="checkbox"
                  class="peer hidden"
                  checked={!item?.hidden}
                  onChange={() =>
                    dispatchData({
                      type: "TOGGLE_TICKET_WIDGET_VISIBILITY",
                      payload: item.id,
                    })
                  }
                />

                <span class="w-5 h-5 flex items-center justify-center border-2 rounded-sm border-gray-400 peer-checked:bg-[#0b1c49]">
                  <svg
                    class="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span class="text-gray-800 font-medium">{item?.title}</span>
              </label>
            );
          })}
        </div>
      )}
      <div className="absolute flex gap-2 self-end mr-5 bottom-10">
        <button
          className="border-1 border-black px-7 py-2 rounded-md text-sm font-bold text-gray-500 cursor-pointer"
          onClick={() => setWidgetTemplate(false)}
        >
          Cancel
        </button>
        <button
          className="border-1 border-black px-7 py-2 rounded-md text-sm font-bold text-white bg-black cursor-pointer"
          onClick={() => setWidgetTemplate(false)}
        >
          Confirm
        </button>
      </div>
    </section>
  );
};

export default AddWidgets;
