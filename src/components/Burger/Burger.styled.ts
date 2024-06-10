import styled from "styled-components";

export const BurgerButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;

  & svg {
    stroke: var(--main-typography);
  }

  &:focus {
    outline: 1px solid var(--main-typography);
  }
`;
