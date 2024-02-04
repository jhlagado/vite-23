import "./App.css";
import MainPanel from "./components/MainPanel";
import SideBar from "./components/SideBar";

export default function App() {
  return (
    <div className="flex">
      <SideBar />
      <MainPanel />
    </div>
  );
}
