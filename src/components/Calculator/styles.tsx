import styled from "@emotion/styled";

type ButtonTypes = "reset" | "result";

interface ButtonProps {
  variant: ButtonTypes;
}

interface NumberBoxProps {
  active: boolean;
}

export const InputBox = styled.div`
  display: flex;
  background-color: var(--clr-screen-background);
  width: 475px;
  height: 125px;
  border-radius: 8px;

  input[type="number"] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    background-color: transparent;
    color: var(--clr-white);
    font-size: 2.9rem;
    font-family: var(--ff-spartan);
    &:focus {
      outline: none;
    }
  }
`;

export const NumberBox = styled.button<NumberBoxProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ active }) =>
    active ? "var(--clr-key-background)" : "var(--clr-light-grayish-orange)"};
  border-radius: 8px;
  box-shadow: 0px 3px 0px 0px var(--clr-key-shadow);
  color: ${({ active }) =>
    active ? "var(--clr-white)" : " var(--clr-very-dark-grayish-blue)"};
  padding: 10px;
  font-size: 1.5rem;
  border: none;
  cursor: pointer;
`;

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
  cursor: pointer;
`;

export const ActionContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  grid-column: 1 / 5;
`;
