import styled, { css } from "styled-components";

export const Button = styled.button<{ $mobileMenu?: boolean }>`
  padding: 0;
  background-color: transparent;
  border: none;
  transition: all 0.3s;

  ${(props) =>
    props.$mobileMenu &&
    css`
      position: absolute;
      top: 40px;
      left: 40px;
      transform: scale(1.2);
    `}

  &:hover {
    transform: scale(1.2);
  }
`;
