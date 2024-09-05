import { useNavigate, useSearchParams } from "react-router-dom";

export default function Users() {
  const navigate = useNavigate();

  const [searchPam, setSearchPam] = useSearchParams();

  console.log(searchPam.get("id"));

  function handleEvents() {
    navigate({ pathname: "/events" });
  }
  return (
    <div>
      Users with id {searchPam.get("id")}
      <button style={{ margin: "20px" }} onClick={handleEvents}>
        Go to events
      </button>
      <button
        style={{ margin: "20px" }}
        onClick={() => setSearchPam({ id: "12" })}
      >
        change search params
      </button>
    </div>
  );
}
