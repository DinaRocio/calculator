import React from "react";
import NumberButton from "../NumberButton";
import { ActionContainer, Button, KeyboardContent } from "./styles";

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9, 9, 9];

function Keyboard() {
  return (
    <KeyboardContent>
      {numbers.map((number) => (
        <NumberButton number={number} />
      ))}
      <ActionContainer>
        <Button type="reset">Reset</Button>
        <Button type="reset">=</Button>
      </ActionContainer>
    </KeyboardContent>
  );
}

export default Keyboard;
