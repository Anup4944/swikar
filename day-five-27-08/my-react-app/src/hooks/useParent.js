import { useEffect, useState } from "react";

export default function useParent(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  console.log(debouncedValue, "Debounced hune wala value");

  useEffect(() => {
    console.log("useEffect run bhayo");
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup timeout if value or delay changes
    return () => {
      clearTimeout(handler);
      console.log("useEffect clean up");
    };
  }, [value, delay]);

  return debouncedValue;
}
