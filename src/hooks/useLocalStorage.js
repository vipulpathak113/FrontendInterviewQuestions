import { useEffect, useState } from "react";

export default function useLocalStorage(key, defaultValue = "") {
  const [value, setValue] = useState(() => {
    if (window.localStorage.getItem(key)) {
      try {
        return JSON.parse(window.localStorage.getItem(key));
      } catch (e) {
        return defaultValue;
      }
    } else {
      return defaultValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
