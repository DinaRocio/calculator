import React, { useState } from "react";
import { CalculatorContent } from "../../styles/AppStyles";
import {
  ActionContainer,
  Button,
  InputBox,
  KeyboardContent,
  NumberBox,
} from "./styles";

interface Calculation {
  sign: string;
  num: number;
  res: number;
}

const btnValues = [
  7,
  8,
  9,
  "DEL",
  4,
  5,
  6,
  "+",
  1,
  2,
  3,
  "-",
  ".",
  0,
  "/",
  "x",
];

function Calculator() {
  const [cal, setCal] = useState<Calculation>({
    sign: "",
    num: 0,
    res: 0,
  });

  const defaultVal = cal.num ? cal.num : cal.res;

  const numClickHandler = (e: any) => {
    console.log(e.target.innerHTML);

    const value = e.target.innerHTML;

    setCal({
      ...cal,
      num: cal.num === 0 && value === 0 ? "0" : cal.num + value,
      res: !cal.sign ? 0 : cal.res,
    });
  };

  const onClickKey = (e: any, btn: string | number) => {
    const signButton = btn === "+" || btn === "-" || btn === "x" || btn === "/";

    if (btn === "RESET") {
      setCal({
        ...cal,
        num: 0,
        res: 0,
      });
      return;
    }
    if (signButton) {
      console.log("signButton2");
      return;
    }
    if (btn === "DEL") {
      console.log("del");
      return;
    }
    if (btn === "=") {
      console.log("=");
      return;
    }
    numClickHandler(e);
  };

  console.log(defaultVal);

  return (
    <CalculatorContent>
      <InputBox>
        <input type="number" value={defaultVal} />
      </InputBox>
      <KeyboardContent>
        {btnValues.map((keyItem) => (
          <NumberBox
            key={keyItem}
            active={keyItem === "DEL"}
            value={keyItem}
            onClick={(e) => onClickKey(e, keyItem)}
          >
            {keyItem}
          </NumberBox>
        ))}
        <ActionContainer>
          <Button onClick={(e) => onClickKey(e, "RESET")} variant="reset">
            RESET
          </Button>
          <Button onClick={(e) => onClickKey(e, "result")} variant="result">
            =
          </Button>
        </ActionContainer>
      </KeyboardContent>
    </CalculatorContent>
  );
}

export default Calculator;
