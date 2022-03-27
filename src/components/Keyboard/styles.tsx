import styled from "@emotion/styled";

interface ButtonProps {
  type: "reset" | "result";
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
    props.type === "reset"
      ? `var(--clr-light-grayish-orange)`
      : `var(--clr-key-background)`};
`;

export const ActionContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
`;
