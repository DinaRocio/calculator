import React from "react";
import NumberButton from "../NumberButton";
import { ActionContainer, Button, KeyboardContent } from "./styles";

// const keys = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9, 9, 9];
const keys = [7, 8, 9, "DEL", 4, 5, 6, "+", 1, 2, 3, "-", ".", 0, "/", "x"];

function Keyboard() {
  return (
    <KeyboardContent>
      {keys.map((keyItem) => (
        <NumberButton key={Math.random()} keyItem={keyItem} />
      ))}
      <ActionContainer>
        <Button variant="reset">RESET</Button>
        <Button variant="result">=</Button>
      </ActionContainer>
    </KeyboardContent>
  );
}

export default Keyboard;
