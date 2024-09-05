import { useNavigate } from "react-router-dom";

export default function Events() {
  const navigate = useNavigate();

  function handleEvents() {
    navigate({ pathname: "/users", search: "?id=10" });
  }
  return (
    <div>
      Events
      <button style={{ margin: "20px" }} onClick={handleEvents}>
        Go to Users
      </button>
    </div>
  );
}
