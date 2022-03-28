import React from "react";
import { NumberBox } from "./style";

interface NumberProps {
  keyItem: number | string;
}

function NumberButton({ keyItem }: NumberProps) {
  const onClickKey = (e: any) => {
    console.log(e);
  };

  const isDeleting = keyItem === "DEL";
  return (
    <NumberBox active={isDeleting} onClick={(e) => onClickKey(e)}>
      {keyItem}
    </NumberBox>
  );
}

export default NumberButton;
