import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 40px;
`;

export const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 54px;
  height: 54px;
  padding: 8px;
  border-radius: 50%;
  background-color: var(--dark-blue);
  transition: all 0.3s;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 30px 0px var(--shadow-social);
  }

  & svg {
    fill: var(--main-typography);
  }
`;
