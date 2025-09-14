import { useContext, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import WidgetDataContext from "../../Data-Context/WidgetData";
import AddNewWidget from "../AddNewWidget";
import NotificationBox from "../NotificationBox";

const CWPPDashboard = ({ searchTerm }) => {
  const {
    newDatas,
    category,
    setCategory,
    newWidgetTemplate,
    dispatchData,
    setNewWidgetTemplate,
    setMsg,
  } = useContext(WidgetDataContext);
  const { widgets } = newDatas.CWPP;
  const [onHover, setOnHover] = useState(null);
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("Black");
  const [fields, setFields] = useState([{ name: "", value: "" }]);

  const addNewWidgets = (event) => {
    event.preventDefault();
    if (!title && !fields[0].name && !fields[0].value) {
      return setMsg("Fill all the input fields");
    }
    const addNewCWPP = {
      type: "ADD_CWPP",
      payload: {
        id: Math.floor(Math.random() * 1000),
        title: title,
        color: color,
        data: fields,
      },
    };
    dispatchData(addNewCWPP);
    setTitle("");
    setFields([{ name: "", value: "" }]);
    setNewWidgetTemplate(false);
  };

  const deleteCWPPWidget = (event, id) => {
    event.preventDefault();
    const deleteCWPPWidget = {
      type: "DEL_CWPP",
      payload: id,
    };
    dispatchData(deleteCWPPWidget);
  };

  const filteredWidgets = widgets.filter(
    (w) =>
      !searchTerm || w.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <section className="grid grid-cols-3 gap-6">
      {/* AddNewWidgetTemplate */}
      <NotificationBox />
      {category === "CWPP" && (
        <div
          className={`w-1/2 h-auto fixed top-[8%] left-1/2 -translate-x-1/2 bg-white z-[1000] shadow-2xl rounded-xl flex flex-col items-center p-10 ${
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
            {category === "CWPP" && (
              <>
                <div className="flex justify-between">
                  <h2 className="text-xl font-medium text-gray-700 mt-4">
                    Data
                  </h2>
                  <button
                    type="button"
                    className="text-lg font-medium text-gray-700 mt-4 px-3 py-1 border border-gray-400 rounded-md"
                    onClick={() => {
                      setFields([
                        ...fields,
                        { name: "", value: "", color: "black" },
                      ]);
                    }}
                  >
                    Add Fields
                  </button>
                </div>{" "}
                <select
                  value={color}
                  className="border border-gray-300 rounded-md px-3 py-2 text-sm"
                  onChange={(e) => {
                    setColor(e.target.value);
                  }}
                >
                  <option value="">Select Color</option>
                  <option value="green">Green</option>
                  <option value="red">Red</option>
                  <option value="black">Black</option>
                  <option value="yellow">Yellow</option>
                  <option value="orange">Orange</option>
                  <option value="blue">Blue</option>
                </select>
                {fields.map((f, i) => {
                  return (
                    <>
                      <div className="flex items-center gap-4">
                        <input
                          type="text"
                          placeholder="Ex: Temperature"
                          value={f.name}
                          className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm"
                          onChange={(e) => {
                            const newFields = [...fields];
                            newFields[i].name = e.target.value;
                            setFields(newFields);
                          }}
                        />
                        <input
                          type="number"
                          placeholder="Value"
                          value={f.value}
                          className="w-24 border border-gray-300 rounded-md px-3 py-2 text-sm"
                          onChange={(e) => {
                            const newFields = [...fields];
                            newFields[i].value = Number(e.target.value);
                            setFields(newFields);
                          }}
                        />
                      </div>
                    </>
                  );
                })}
              </>
            )}
          </div>

          {/* Action Buttons */}
          <div className="mt-10 flex gap-4">
            <button
              className="px-5 py-2 text-sm rounded-md bg-gray-100 text-gray-600 border border-gray-300 hover:bg-gray-200"
              onClick={() => setNewWidgetTemplate(false)}
            >
              Cancel
            </button>
            <button
              className="px-5 py-2 text-sm rounded-md bg-gray-700 text-white hover:bg-gray-800"
              onClick={(event) => {
                addNewWidgets(event);
              }}
            >
              Save Widget
            </button>
          </div>
        </div>
      )}
      {/* Line Chart 1 */}
      {filteredWidgets?.map((item, index) => {
        return (
          <div
            key={index}
            className={`relative w-full h-[300px] rounded-2xl flex flex-col gap-2 shadow p-4 bg-white hover:shadow-lg transition-all duration-180 ease-in-out ${
              item?.hidden ? "hidden" : "block"
            }`}
            onMouseEnter={() => setOnHover(index)}
            onMouseLeave={() => setOnHover(null)}
          >
            <span
              className={`absolute text-3xl right-1 top-1 text-red-500 p-2 z-10 hover:rotate-[90deg] transition-all duration-200 ${
                onHover === index ? "block" : "hidden"
              }`}
              onClick={(e) => deleteCWPPWidget(e, item.id)}
            >
              <RxCross2 />
            </span>

            <h2 className="font-semibold mb-2">{item?.title}</h2>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={item?.data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke={item?.color}
                  strokeWidth={2}
                  dot={{ r: 3 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        );
      })}
      <AddNewWidget category="CWPP" />
    </section>
  );
};

export default CWPPDashboard;
