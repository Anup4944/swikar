import useParent from "../hooks/useParent";

export const NewForm = ({ number, setNumber }) => {
  const newNum = useParent(number, 2000);
  console.log("Debounce bhayeko value", newNum);

  return (
    <div>
      <button
        style={{ marginTop: "50px" }}
        onClick={() => setNumber(number + 1)}
      >
        Click me - Child component
      </button>
      <p>{newNum}</p>
      {/* <input placeholder="Password" /> */}
    </div>
  );
};
