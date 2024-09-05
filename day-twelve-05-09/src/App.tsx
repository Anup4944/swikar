import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./components/Users.tsx";
import Layout from "./components/Layout.tsx";
import Events from "./components/Events.tsx";
import Profile from "./components/Profile.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/users" element={<Users />} />
          <Route path="/users/:username" element={<Profile />} />
          <Route path="/events" element={<Events />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
