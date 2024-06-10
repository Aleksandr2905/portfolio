import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  gap: 16px;
  width: 100vw;
  height: 100vh;
  top: 0;
  right: 0;
  margin: 0 auto;
  overflow: hidden;
  z-index: 100;
  backdrop-filter: blur(3px);
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 320px;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  background: linear-gradient(0deg, var(--deep-blue) 0%, var(--dark-blue) 100%);
`;
export const CloseBtn = styled.button`
  position: absolute;
  top: 40px;
  right: 40px;
  border: none;
  padding: 0;
  background-color: transparent;

  & svg {
    stroke: var(--main-typography);
    transition: all 0.3s;

    &:hover {
      transform: rotate(90deg);
    }
  }
`;

export const Button = styled.a`
  padding: 16px 24px;
  font-family: Montserrat, sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  color: var(--main-typography);

  &:hover {
    border-radius: 16px;
    background: linear-gradient(
      0deg,
      #3a88cb -10.38%,
      var(--deep-blue) 14.43%,
      var(--dark-blue) 100%
    );
    box-shadow: -4px -4px 8px 0px rgba(0, 0, 0, 0.25);
  }
`;
