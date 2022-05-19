import React, { useContext } from "react";
import { ThemeContext } from "../../context/Theme/ThemeProvider";

function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const themeIcon = theme === "light" ? "🌙" : "🌞";

  return <button onClick={toggleTheme}>{themeIcon}</button>;
}

export default ThemeButton;
