import React from "react";
import { NumberBox } from "./style";

interface NumberProps {
  number: number;
}

function NumberButton({ number }: NumberProps) {
  return (
    <NumberBox>
      <p>{number}</p>
    </NumberBox>
  );
}

export default NumberButton;
