import styled from "styled-components";

export const Button = styled.a<{ $write?: boolean }>`
  display: flex;
  align-items: center;
  width: ${(props) => (props.$write ? "202px" : "auto")};
  gap: 24px;
  flex-grow: 1;
  padding: 16px;
  justify-content: center;
  border-radius: 16px;
  background: ${(props) =>
    props.$write
      ? `linear-gradient(
    180deg,
    var(--dark-blue) -102.68%,
    var(--bright-blue) 58.93%
  )`
      : "linear-gradient(180deg, rgba(0, 4, 40, 0.20) -102.68%, rgba(46, 152, 242, 0.20) 58.93%)"};
  color: ${(props) =>
    props.$write ? `var(--dark-blue)` : `var(--main-typography)`};
  font-family: Montserrat, sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: normal;
  transition: all 0.3s;

  & svg {
    fill: var(--dark-blue);
  }

  &:hover {
    transform: scale(1.05);
    background: var(--dark-blue);
    color: var(--main-typography);
    box-shadow: 0px 0px 30px 0px rgba(233, 255, 255, 0.7);

    & svg {
      fill: var(--main-typography);
    }
  }

  @media screen and (min-width: 1440px) {
    padding: 16px 40px;
  }
`;
