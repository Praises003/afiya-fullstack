import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import LogBatch from "./pages/LogBatch";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <LogBatch />
      </div>
    </div>
  );
}

export default App;
