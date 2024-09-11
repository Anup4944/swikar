import { Link, Outlet } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h2 className="text-2xl font-semibold text-gray-800">Dashboard</h2>
        </div>
        <nav className="mt-6">
          <Link
            to="/"
            className="block py-2 px-4 text-gray-700 hover:bg-gray-200"
          >
            Overview
          </Link>
          <Link
            to="/users"
            className="block py-2 px-4 text-gray-700 hover:bg-gray-200"
          >
            Users
          </Link>
          <a
            href="#"
            className="block py-2 px-4 text-gray-700 hover:bg-gray-200"
          >
            Clients
          </a>
          <a
            href="#"
            className="block py-2 px-4 text-gray-700 hover:bg-gray-200"
          >
            Reports
          </a>
        </nav>
      </aside>
      <Outlet />
    </div>
  );
}

//
