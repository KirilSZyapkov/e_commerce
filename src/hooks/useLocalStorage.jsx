import { useState, useEffect } from "react";

function useLocalStorage(key, initialValue) {
  console.log(initialValue);

  const [value, setValue] = useState(() => {
    const jsonValue = sessionStorage.getItem(key);

    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof initialValue === "function") {
      return initialValue();
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    console.log(value);
    sessionStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;
