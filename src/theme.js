// theme.js

import { useState, useEffect } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState("light");
  console.log(theme)
  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
      setTheme(currentTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light mode" ? "dark mode" : "light mode";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("light");
    document.documentElement.classList.toggle("dark");
  };

  return [theme, toggleTheme];
};

export default useTheme;
