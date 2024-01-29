import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="flex flex-col">
      <div>
        <Header />
      </div>
      <div className="flex-grow mt-10">
        <Outlet />
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
