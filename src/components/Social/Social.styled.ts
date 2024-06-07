import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 40px;
`;

export const Button = styled.a`
  width: 60px;
  height: 60px;
  padding: 14px;
  border-radius: 50%;
  background-color: var(--dark-blue);
  transition: all 0.3s;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 30px 0px rgba(233, 255, 255, 0.3);
  }
`;
