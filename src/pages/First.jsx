import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/SideBar";

function First() {
  return (
    <div className="flex min-h-screen bg-yellow-100">
        <Sidebar />
      <main className="flex-1">
        <Navbar/>
        <div className="pl-8 pt-8 pr-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default First;
