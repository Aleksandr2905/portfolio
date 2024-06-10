import styled from "styled-components";

export const WrapperSlider = styled.div`
  position: relative;
  padding-bottom: 60px;

  @media screen and (min-width: 1440px) {
    padding-bottom: 0;
  }
`;

export const BtnNavBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 30px;
  max-width: 768px;
  margin: 0 auto 28px;

  @media screen and (min-width: 1440px) {
    max-width: 1108px;
  }
`;

export const BtnNavProjects = styled.button<{ $active: boolean }>`
  display: flex;
  align-items: center;
  gap: 24px;
  width: fit-content;
  padding: 12px 24px;
  justify-content: center;
  border: none;
  border-radius: 16px;
  background: ${(props) =>
    props.$active
      ? `var(--dark-blue)`
      : "linear-gradient(180deg, rgba(0, 4, 40, 0.20) -102.68%, rgba(46, 152, 242, 0.20) 58.93%)"};
  color: ${(props) =>
    props.$active ? `var(--main-typography)` : `var(--main-typography)`};
  font-family: Montserrat, sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: normal;
  transition: all 0.5s;

  &:hover {
    transform: scale(1.05);
    background: var(--dark-blue);
    color: var(--main-typography);
    box-shadow: 0px 0px 30px 0px rgba(233, 255, 255, 0.7);
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
    fill: var(--dark-blue);
  }

  &:hover {
    background-color: ${(props) =>
      props.disabled ? "var(--light-blue)" : "var(--dark-blue)"};
    box-shadow: ${(props) =>
      props.disabled ? "none" : "0px 0px 30px 0px rgba(233, 255, 255, 0.7)"};

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
