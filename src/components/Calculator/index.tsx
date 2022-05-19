import React, { useContext, useState } from "react";
import { ThemeContext } from "../../context/Theme/ThemeProvider";
import { CalculatorContent, H1 } from "../../styles/AppStyles";
import ThemeButton from "../ThemeButton";
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
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [cal, setCal] = useState<Calculation>({
    sign: "",
    num: 0,
    res: 0,
  });

  const defaultVal = cal.num ? cal.num : cal.res;

  const numClickHandler = (e: any) => {
    const value = e.target.innerHTML;

    setCal({
      ...cal,
      // to do: check
      num: cal.num === 0 && value === 0 ? "0" : cal.num + value,
      res: !cal.sign ? 0 : cal.res,
    });
  };

  const signClickHandler = (e: any) => {
    console.log(e.target.value, " signClickHandler");

    setCal({
      ...cal,
      sign: e.target.value,
      res: !cal.res && cal.num ? cal.num : cal.res,
      num: 0,
    });
    return;
  };

  const equalsClickHandler = () => {
    if (cal.sign && cal.num) {
      const math = (a: number, b: number, sign: string) =>
        sign === "+"
          ? a + b
          : sign === "-"
          ? a - b
          : sign === "x"
          ? a * b
          : a / b;
    }
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

    if (btn === "DEL") {
      console.log("del");
      return;
    }
    if (btn === "=") {
      console.log("=");
      return;
    }
    if (signButton) {
      // console.log("sign buttonwas pressed");
      signClickHandler(e);
      return;
    }
    if (btn === ".") {
      equalsClickHandler();
      return;
    }
    numClickHandler(e);
    return;
  };

  console.log(theme);

  return (
    <CalculatorContent theme={theme}>
      <ThemeButton />
      <H1 theme={theme}>Calc</H1>
      <InputBox theme={theme}>
        <input type="number" value={defaultVal} />
      </InputBox>
      <KeyboardContent theme={theme}>
        {btnValues.map((keyItem) => (
          <NumberBox
            key={keyItem}
            active={keyItem === "DEL"}
            value={keyItem}
            onClick={(e) => onClickKey(e, keyItem)}
            theme={theme}
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
