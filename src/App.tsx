import React from "react";
import "./App.css";
import Input from "./components/Input";
import Keyboard from "./components/Keyboard";
import { CalculatorContent } from "./styles/AppStyles";

function App() {
  return (
    <CalculatorContent>
      <Input />
      <Keyboard />
    </CalculatorContent>
  );
}

export default App;
