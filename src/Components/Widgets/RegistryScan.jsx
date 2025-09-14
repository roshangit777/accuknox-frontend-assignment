import { useContext, useState } from "react";
import WidgetDataContext from "../../Data-Context/WidgetData";
import { RxCross2 } from "react-icons/rx";
import AddNewWidget from "../AddNewWidget";
import NotificationBox from "../NotificationBox";

const RegistryScan = ({ searchTerm }) => {
  const {
    newDatas,
    newWidgetTemplate,
    setNewWidgetTemplate,
    setMsg,
    category,
    dispatchData,
  } = useContext(WidgetDataContext);
  const { widgets } = newDatas.Image;
  const [onHover, setOnHover] = useState(null);
  const [title, setTitle] = useState("");
  const [fields, setFields] = useState({
    critical: "",
    high: "",
    medium: "",
    low: "",
  });
  const addNewImageWidget = (event) => {
    event.preventDefault();
    if (
      !title &&
      !fields.critical &&
      !fields.high &&
      !fields.medium &&
      !fields.low
    ) {
      return setMsg("Fill all the input fields");
    }
    const addNewImage = {
      type: "ADD_IMAGE",
      payload: {
        id: Math.floor(Math.random() * 1000),
        title: title,
        color: {
          critical: "darkred",
          high: "red",
          medium: "orange",
          low: "yellow",
        },
        data: fields,
      },
    };
    dispatchData(addNewImage);
    setTitle("");
    setFields({ critical: "", high: "", medium: "", low: "" });
    setNewWidgetTemplate(false);
  };

  const deleteImageWidget = (event, id) => {
    event.preventDefault();
    const deleteImageWidget = {
      type: "DEL_IMAGE",
      payload: id,
    };
    dispatchData(deleteImageWidget);
  };

  const filteredWidgets = widgets.filter(
    (w) =>
      !searchTerm || w.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <section className="grid grid-cols-3 gap-6">
      <NotificationBox />
      {/* AddNewWidgetTemplate */}
      {category === "Image" && (
        <div
          className={`w-1/2 h-[600px] fixed top-[8%] left-1/2 -translate-x-1/2 bg-white z-[1000] shadow-2xl rounded-xl flex flex-col items-center p-10 ${
            newWidgetTemplate ? "block" : "hidden"
          }`}
        >
          <h1 className="text-2xl font-semibold text-gray-700 mb-6">
            Enter the Details
          </h1>

          <div className="w-full flex flex-col gap-4">
            {/* Title Input */}
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">Title</label>
              <input
                type="text"
                value={title}
                placeholder="Enter a title of the chart"
                className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                onChange={() => setTitle(event.target.value)}
              />
            </div>

            {/* Category (static for now) */}
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">Category</label>
              <input
                type="text"
                value={category}
                disabled
                className="border border-gray-200 rounded-md px-3 py-2 text-sm bg-gray-100 text-gray-500"
              />
            </div>

            {/* Data Section */}
            <div className="flex justify-between">
              <h2 className="text-xl font-medium text-gray-700 mt-4">Data</h2>
            </div>
            <div className="flex items-center gap-4">
              <>
                <label>
                  Critical Data:{" "}
                  <input
                    type="text"
                    placeholder="Ex: 40"
                    value={fields?.critical}
                    className="w-[150px] flex-1 border border-gray-300 rounded-md px-2 py-2 text-sm"
                    onChange={(e) => {
                      setFields({
                        ...fields,
                        critical: Number(e.target.value),
                      });
                    }}
                  />
                </label>
                <label>
                  High Data:{" "}
                  <input
                    type="text"
                    placeholder="Ex: 30"
                    value={fields?.high}
                    className="w-[150px] flex-1 border border-gray-300 rounded-md px-2 py-2 text-sm"
                    onChange={(e) => {
                      setFields({ ...fields, high: Number(e.target.value) });
                    }}
                  />
                </label>
                <label>
                  Medium Data:{" "}
                  <input
                    type="text"
                    placeholder="Ex: 20"
                    value={fields?.medium}
                    className="w-[150px] flex-1 border border-gray-300 rounded-md px-2 py-2 text-sm"
                    onChange={(e) => {
                      setFields({ ...fields, medium: Number(e.target.value) });
                    }}
                  />
                </label>
                <label>
                  Low Data:{" "}
                  <input
                    type="text"
                    placeholder="Ex: 10"
                    value={fields?.low}
                    className="w-[150px] flex-1 border border-gray-300 rounded-md px-2 py-2 text-sm"
                    onChange={(e) => {
                      setFields({ ...fields, low: Number(e.target.value) });
                    }}
                  />
                </label>
              </>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-auto flex gap-4">
            <button
              className="px-5 py-2 text-sm rounded-md bg-gray-100 text-gray-600 border border-gray-300 hover:bg-gray-200"
              onClick={() => setNewWidgetTemplate(false)}
            >
              Cancel
            </button>
            <button
              className="px-5 py-2 text-sm rounded-md bg-gray-700 text-white hover:bg-gray-800"
              onClick={(event) => {
                addNewImageWidget(event);
              }}
            >
              Save Widget
            </button>
          </div>
        </div>
      )}
      {/* Image Risk Assessment */}
      {filteredWidgets?.map((item, index) => {
        const total = Object.values(item?.data).reduce(
          (sum, val) => sum + Number(val),
          0
        );
        return (
          <div
            key={index}
            className={`relative w-full h-[300px] flex flex-col gap-3 bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-all duration-180 ease-in-out ${
              item?.hidden ? "hidden" : "block"
            }`}
            onMouseEnter={() => setOnHover(index)}
            onMouseLeave={() => setOnHover(null)}
          >
            <span
              className={`absolute text-3xl right-1 top-1 text-red-500 p-2 z-10 hover:rotate-[90deg] transition-all duration-200 ${
                onHover === index ? "block" : "hidden"
              }`}
              onClick={(e) => deleteImageWidget(e, item.id)}
            >
              <RxCross2 />
            </span>

            <h3 className="font-semibold mb-3">{item?.title}</h3>
            <div className="text-sm mb-4">
              <span className="font-semibold text-lg">{total} </span>
              Total Vulnerabilities
            </div>
            {/* Progress bar with segments */}
            <div className="flex h-4 rounded-full overflow-hidden bg-gray-200 mb-3">
              <div
                style={{
                  width: `${Number(item?.data?.critical / total) * 100}%`,
                  backgroundColor: `${item?.color?.critical}`,
                }}
                title="Critical (9)"
              ></div>
              <div
                style={{
                  width: `${Number(item?.data?.high / total) * 100}%`,
                  backgroundColor: `${item?.color?.high}`,
                }}
                title="High (150)"
              ></div>
              <div
                style={{
                  width: `${Number(item?.data?.medium / total) * 100}%`,
                  backgroundColor: `${item?.color?.medium}`,
                }}
                title="Medium (262)"
              ></div>
              <div
                style={{
                  width: `${Number(item?.data?.low / total) * 100}%`,
                  backgroundColor: `${item?.color?.low}`,
                }}
                title="Low (1049)"
              ></div>
            </div>
            <div className="grid grid-cols-2 text-xs space-y-1">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-red-800 inline-block"></span>
                <span>Critical ({Number(item?.data?.critical)})</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-red-600 inline-block"></span>
                <span>High ({Number(item?.data?.high)})</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-orange-400 inline-block"></span>
                <span>Medium ({Number(item?.data?.medium)})</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-yellow-300 inline-block"></span>
                <span>Low ({Number(item?.data?.low)})</span>
              </div>
            </div>
          </div>
        );
      })}
      <AddNewWidget category="Image" />
    </section>
  );
};

export default RegistryScan;
