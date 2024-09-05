import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  const links = [
    { path: "/users", textContent: "Take me to users" },
    { path: "/events", textContent: "Take me to events" },
    { path: "/users/swikar", textContent: "Take me to profile" },
  ];
  return (
    <div>
      <h2> React router example</h2> <Outlet />
      {links.map((item) => {
        return (
          <Link to={item.path} key={item.path}>
            {item.textContent}
          </Link>
        );
      })}
    </div>
  );
}
