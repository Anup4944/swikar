import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { changeTheme } from "./features/theme/themeSlice";
import { RootState } from "./app/store";
import { updateItems } from "./features/theme/cartSlice";
import { useGetPokemonByNameQuery } from "./query/pokemon";

function App() {
  const dispatch = useDispatch();
  const { theme } = useSelector((state: RootState) => state.theme);
  const { numItm } = useSelector((state) => state.cart);
  const { data, error, isLoading } = useGetPokemonByNameQuery("pikachu");

  console.log(data);
  function handleTheme() {
    if (theme === "dark") {
      dispatch(changeTheme("light"));
    } else {
      dispatch(changeTheme("dark"));
    }
  }

  function handleCountChange() {
    dispatch(updateItems());
  }
  return (
    <div className={`theme-${theme}`}>
      Theme change using redux
      <button onClick={handleTheme}>Change theme</button> <br />
      {numItm}
      <button onClick={handleCountChange}>Increase count</button>
      {data?.abilities.map((item) => {
        return <div key={item.ability.name}>{item.ability.name}</div>;
      })}
    </div>
  );
}

export default App;
