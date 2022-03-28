import styled from "@emotion/styled";

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
