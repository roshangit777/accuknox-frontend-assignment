import CSPMDashboard from "./Widgets/CSPMDashboard";
import CWPPDashboard from "./Widgets/CWPPDashboard";
import Menu from "./Menu";
import RegistryScan from "./Widgets/RegistryScan";
import SearchBar from "./SearchBar";
import Tickets from "./Widgets/Tickets";
import { useContext, useState } from "react";
import WidgetDataContext from "../Data-Context/WidgetData";

const Dashboard = () => {
  const { newDatas, widgetTemplate } = useContext(WidgetDataContext);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <section className={`relative ${widgetTemplate ? "blur-xs" : ""}`}>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />{" "}
      {/* pass setter */}
      <div className="w-full min-h-screen bg-[#f2f5fa] p-6 font-sans text-gray-800">
        <Menu />

        {/* CSPM */}
        {(!searchTerm ||
          newDatas.CSPM.widgets.some((w) =>
            w.title.toLowerCase().includes(searchTerm.toLowerCase())
          )) && (
          <section className="mb-2 p-4 pt-0">
            <h2 className="text-lg font-bold mb-1">CSPM Executive Dashboard</h2>
            <CSPMDashboard searchTerm={searchTerm} />
          </section>
        )}

        {/* CWPP */}
        {(!searchTerm ||
          newDatas.CWPP.widgets.some((w) =>
            w.title.toLowerCase().includes(searchTerm.toLowerCase())
          )) && (
          <section className="mb-2 p-4 pt-0">
            <h2 className="text-lg font-bold mb-1">CWPP Dashboard</h2>
            <CWPPDashboard searchTerm={searchTerm} />
          </section>
        )}

        {/* Registry */}
        {(!searchTerm ||
          newDatas.Image.widgets.some((w) =>
            w.title.toLowerCase().includes(searchTerm.toLowerCase())
          )) && (
          <section className="mb-2 p-4 pt-0">
            <h2 className="text-lg font-bold mb-1">Registry Scan</h2>
            <RegistryScan searchTerm={searchTerm} />
          </section>
        )}

        {/* Tickets */}
        {(!searchTerm ||
          newDatas.Ticket.widgets.some((w) =>
            w.title.toLowerCase().includes(searchTerm.toLowerCase())
          )) && (
          <section className="mb-2 p-4 pt-0">
            <h2 className="text-lg font-bold mb-1">Ticket XYZ</h2>
            <Tickets searchTerm={searchTerm} />
          </section>
        )}
      </div>
    </section>
  );
};

export default Dashboard;
