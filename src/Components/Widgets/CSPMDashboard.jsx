import { useContext, useState } from "react";
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";
import { RxCross2 } from "react-icons/rx";
import WidgetDataContext from "../../Data-Context/WidgetData";
import AddNewWidget from "../AddNewWidget";
import NotificationBox from "../NotificationBox";

const CSPMDashboard = ({ searchTerm }) => {
  const {
    newDatas,
    category,
    dispatchData,
    newWidgetTemplate,
    setNewWidgetTemplate,
    setMsg,
  } = useContext(WidgetDataContext);
  const { widgets } = newDatas.CSPM;
  const [onHover, setOnHover] = useState(null);
  const [title, setTitle] = useState("");
  const [fields, setFields] = useState([
    { name: "", value: "", color: "black" },
  ]);

  const addNewWidgets = (event) => {
    event.preventDefault();
    if (!title && !fields[0].name && !fields[0].value) {
      return setMsg("Fill all the input fields");
    }
    const addNewCSPM = {
      type: "ADD_CSPM",
      payload: {
        id: Math.floor(Math.random() * 1000),
        title: title,
        chartType: category,
        data: fields,
      },
    };
    dispatchData(addNewCSPM);
    setTitle("");
    setFields([{ name: "", value: "", color: "black" }]);
    setNewWidgetTemplate(false);
  };

  const deleteCSPMWidget = (event, id) => {
    event.preventDefault();
    const deleteCSPMWidget = {
      type: "DEL_CSPM",
      payload: id,
    };
    dispatchData(deleteCSPMWidget);
  };
  // Custom legend component
  const renderLegend = (props) => {
    const { payload } = props;
    return (
      <ul className="list-none m-0 p-0">
        {payload.map((entry, index) => (
          <li key={`item-${index}`} className="flex items-center gap-2 mb-1">
            <span
              className="inline-block w-3 h-3 rounded-sm"
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-black text-sm">
              {entry?.payload?.name + " "}({entry?.payload?.value})
            </span>
          </li>
        ))}
      </ul>
    );
  };

  const filteredWidgets = widgets.filter(
    (w) =>
      !searchTerm || w.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="relative grid grid-cols-3 gap-6">
      <NotificationBox />
      {/* AddNewWidgetTemplate */}
      {category === "CSPM" && (
        <div
          className={`w-1/2 h-auto fixed top-[8%] left-1/2 -translate-x-1/2 bg-white z-[500] shadow-2xl rounded-xl flex flex-col items-center p-10 ${
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
                onChange={(event) => setTitle(event.target.value)}
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
            </div>
            {category == "CSPM" &&
              fields.map((f, i) => {
                return (
                  <>
                    <div className="flex items-center gap-4">
                      <input
                        type="text"
                        placeholder="Ex: Cold"
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
                      <select
                        value={f.color}
                        className="border border-gray-300 rounded-md px-3 py-2 text-sm"
                        onChange={(e) => {
                          const newFields = [...fields];
                          newFields[i].color = e.target.value;
                          setFields(newFields);
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
                    </div>
                  </>
                );
              })}
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
              onClick={(e) => {
                addNewWidgets(e);
              }}
            >
              Save Widget
            </button>
          </div>
        </div>
      )}
      {filteredWidgets.map((item, index) => {
        let total = item?.data.reduce(
          (sum, item) => sum + Number(item.value),
          0
        );
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
              onClick={(e) => deleteCSPMWidget(e, item.id)}
            >
              <RxCross2 />
            </span>

            <h2 className="font-semibold mb-2">{item?.title}</h2>
            <div className="relative w-full felx items-center justify-start">
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={item?.data}
                    dataKey="value"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={0}
                    cx="42%"
                    cy="50%"
                  >
                    {item?.data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Legend
                    content={renderLegend}
                    layout="vertical"
                    align="right"
                    verticalAlign="middle"
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute top-[40%] md:left-[24%] 2xl:left-[31%] flex items-center justify-center pointer-events-none">
                <div className="text-center">
                  <div className="text-lg font-bold text-black">{total}</div>
                  <div className="text-sm text-gray-500">Total</div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <AddNewWidget category="CSPM" />
    </section>
  );
};

export default CSPMDashboard;
