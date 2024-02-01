import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = () => {
  const [enabled, setEnabled] = useLocalStorage("dark-theme", "false");
  useEffect(() => {
    const isEnabled = Boolean(enabled);
    const className = "dark";
    const bodyClass = window.document.body.classList;
    if (isEnabled) {
      bodyClass.add(className);
    } else {
      bodyClass.remove(className);
    }
  });
  return [enabled, setEnabled];
};
export default useDarkMode;
