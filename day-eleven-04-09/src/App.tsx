import { createContext, useContext, useState } from "react";
import "./App.css";
import axios from "axios";

type TUser = {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  email: string;
};

async function getUser() {
  const res = await axios.get("https://dummyjson.com/users");

  return res.data as TUser[];
}

const ThemeContext = createContext<"light" | "dark">("light");

function App() {
  const [users, setUsers] = useState<TUser[] | undefined>();
  const [theme, setTheme] = useState<"dark" | "light">("light");

  async function handleFetchedUser() {
    const data = await getUser();

    setUsers(data.users);
  }

  return (
    <ThemeContext.Provider value={theme}>
      <div
        style={{
          backgroundColor: theme === "dark" ? "black" : "white",
          color: theme === "dark" ? "white " : "black",
        }}
      >
        <div>
          <label>
            <input
              type="checkbox"
              checked={theme === "dark"}
              onChange={(e) => {
                if (e.target.checked) {
                  setTheme("dark");
                } else {
                  setTheme("light");
                }
              }}
            />
          </label>
        </div>
        DAY ELEVEN <br />
        <button onClick={handleFetchedUser}> Get users</button> <br />
        <UserList users={users} />
      </div>
    </ThemeContext.Provider>
  );
}

type TUserListProps = { users: TUser[] | undefined };
function UserList({ users }: TUserListProps) {
  const theme = useContext(ThemeContext);
  return (
    <div>
      {users?.map((user) => {
        return <h3 key={user.email}>{user.email}</h3>;
      })}
    </div>
  );
}

export default App;
