// import Sidebar from "./SideBar";
const Navbar = () => {
    return (
      <div className="flex justify-between items-center p-4 bg-yellow-300">
        <p className="text-4xl font-semibold">Dashboard</p>
        <input
          type="text"
          placeholder="Search Inventory"
          className="p-2 w-1/3 rounded bg-orange-200"
        />
        <div className="flex space-x-4">
          <button className="p-2 bg-yellow-500 rounded-full">🔔</button>
          <button className="p-2 bg-yellow-500 rounded-full">👤</button>
        </div>
      </div>



    );
  };
  
  export default Navbar;
  