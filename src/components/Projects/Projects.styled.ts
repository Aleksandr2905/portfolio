import styled from "styled-components";

export const WrapperSlider = styled.div`
  position: relative;
`;

export const BtnNavBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 30px;
  max-width: 1108px;
  margin: 0 auto 28px;
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
      : `linear-gradient(
      180deg,
      var(--dark-blue) -102.68%,
      var(--bright-blue) 58.93%
    )`};
  color: ${(props) =>
    props.$active ? `var(--main-typography)` : `var(--dark-blue)`};
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

export const ButtonSlider = styled.button<{ $left: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 44%;
  ${(props) => (props.$left ? "left: 0;" : "right: 0;")}
  z-index: 1;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  transition: all 0.5s;
  background-color: var(--light-blue);

  & svg {
    rotate: ${(props) => (props.$left ? "270deg" : "90deg")};
    fill: var(--dark-blue);
  }

  &:hover {
    background-color: var(--dark-blue);
    box-shadow: 0px 0px 30px 0px rgba(233, 255, 255, 0.7);

    & svg {
      fill: var(--light-blue);
    }
  }
`;
