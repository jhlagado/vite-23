import { useState } from "react";

const useLocalStorage = (key: string, defaultValue: string) => {
  const [localStorageValue, setLocalStorageValue] = useState(() => {
    const value = localStorage.getItem(key);
    if (value) {
      return value;
    }
    localStorage.setItem(key, defaultValue);
    return defaultValue;
  });
  const setLocalStorageStateValue = (value: string) => {
    localStorage.setItem(key, value);
    setLocalStorageValue(value);
  };
  return [localStorageValue, setLocalStorageStateValue];
};

export default useLocalStorage;
