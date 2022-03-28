import styled from "@emotion/styled";

interface NumberBoxProps {
  active: boolean;
}

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
