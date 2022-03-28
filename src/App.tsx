import React from "react";
import "./App.css";
import Input from "./components/Input";
import Keyboard from "./components/Keyboard";
import { CalculatorContent, H1 } from "./styles/AppStyles";

function App() {
  return (
    <CalculatorContent>
      <H1>calc</H1>
      <Input />
      <Keyboard />
    </CalculatorContent>
  );
}

export default App;
