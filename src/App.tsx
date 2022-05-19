import React from "react";
import "./App.css";
import Calculator from "./components/Calculator";
import { ThemeProvider } from "./context/Theme/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <Calculator />
    </ThemeProvider>
  );
}

export default App;
