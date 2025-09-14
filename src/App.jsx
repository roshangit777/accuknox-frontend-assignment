import "./App.css";
import AddWidgets from "./Components/AddWidgets";
import Dashboard from "./Components/Dashboard";
import { WidgetData } from "./Data-Context/WidgetData";

function App() {
  return (
    <WidgetData>
      <section className="relative w-full">
        <AddWidgets />
        <Dashboard />
      </section>
    </WidgetData>
  );
}

export default App;
