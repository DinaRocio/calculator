import styled from "@emotion/styled";

type ButtonTypes = "reset" | "result";

interface ButtonProps {
  variant: ButtonTypes;
}

export const KeyboardContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
  background-color: var(--clr-screen-background);
  width: 475px;
  border-radius: 8px;
  padding: 30px;
`;

export const Button = styled.button<ButtonProps>`
  display: flex;
  background-color: ${(props) =>
    props.variant === "reset"
      ? `var(--clr-main-background)`
      : `var( --clr-red)`};
  border-radius: 8px;
  padding: 20px 0;
  box-shadow: none;
  border: none;
  width: 50%;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  color: var(--clr-white);
`;

export const ActionContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  grid-column: 1 / 5;
`;
