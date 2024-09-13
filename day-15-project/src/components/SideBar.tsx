import { cn } from "@/lib/utils";
import { Link, Outlet, useLocation } from "react-router-dom";

export default function SideBar() {
  const { pathname } = useLocation();
  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h2 className="text-2xl font-semibold text-gray-800">Report</h2>
        </div>
        <nav className="mt-6">
          <Link
            to="/"
            className={cn([
              `block py-2 px-4 `,
              { "bg-primary text-primary-foreground": pathname === "/" },
            ])}
          >
            Dashboard
          </Link>
          <Link
            to="/users"
            className={cn([
              `block py-2 px-4 `,
              { "bg-primary text-primary-foreground": pathname === "/users" },
            ])}
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
