import { useEffect, useState } from "react";

export default function useLocalStorage(key, defaultValue = "") {
  const [value, setValue] = useState(() => {
    return window.localStorage.getItem(key) || defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);
  
  return [value, setValue];
}
