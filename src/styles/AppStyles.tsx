import styled from "@emotion/styled";

interface Props {
  theme: string;
}

export const CalculatorContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: auto;
  width: 470px;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const H1 = styled.h1<Props>`
  font-size: 2rem;
  color: ${({ theme }) =>
    theme === "default"
      ? "var(--clr-white)"
      : theme === "light"
      ? "var(--clr-toggle-backgroun)"
      : "var(--clr-light-yellow)"};
`;
