import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 12px;
`;

export const Button = styled.button`
  padding: 0;
  background-color: transparent;
  border: none;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.2);
  }

  &:disabled {
    opacity: 0.5;
    transform: scale(1);
  }
`;
