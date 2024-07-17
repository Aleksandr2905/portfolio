import styled from "styled-components";

export const WrapperSlider = styled.div`
  position: relative;
  padding-bottom: 60px;

  @media screen and (min-width: 1440px) {
    padding-bottom: 0;
  }
`;

export const ButtonSlider = styled.button<{
  $left: boolean;
  disabled?: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  ${(props) => (props.$left ? "left: 30%;" : "right: 30%;")}
  z-index: 1;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  transition: all 0.5s;
  background-color: var(--light-blue);
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};

  & svg {
    rotate: ${(props) => (props.$left ? "270deg" : "90deg")};
    fill: var(--main-typography);
  }

  &:hover {
    background-color: ${(props) =>
      props.disabled ? "var(--light-blue)" : "var(--dark-blue)"};
    box-shadow: ${(props) =>
      props.disabled ? "none" : "0px 0px 30px 0px var(--shadow-hover)"};

    & svg {
      fill: ${(props) =>
        props.disabled ? "var(--dark-blue)" : "var(--light-blue)"};
    }
  }

  @media screen and (min-width: 1440px) {
    top: 44%;
    ${(props) => (props.$left ? "left: 0;" : "right: 0;")}
  }
`;
