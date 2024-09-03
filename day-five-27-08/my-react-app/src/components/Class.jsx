import { useState } from "react";
import useDebounce from "../hooks/useDebound";

const Class = () => {
  const [value, setValue] = useState("");

  const deBounce = useDebounce(value, 2000);
  return (
    <div>
      value = {value} <br /> debounce = {deBounce}
      <br />
      <input
        className="input"
        placeholder="Search...."
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
};

export default Class;
