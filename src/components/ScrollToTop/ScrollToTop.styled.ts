import styled from "styled-components";

export const ScrollToTopButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: var(--scroll-to-top-bottom);
  right: calc(100% / 2 - 1324px / 2);
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  transition: background-color 0.5s, box-shadow 0.5s;
  background-color: var(--light-blue);
  z-index: 999;

  & svg {
    fill: var(--dark-blue);
  }

  &:hover {
    background-color: var(--dark-blue);
    box-shadow: 0px 0px 30px 0px rgba(233, 255, 255, 0.7);

    & svg {
      fill: var(--light-blue);
    }
  }

  /* @media screen and (min-width: 768px) {
    right: calc(100% / 2 - 704px / 2);
  }

  @media screen and (min-width: 1440px) {
    width: 52px;
    height: 52px;
    right: calc(100% / 2 - 1234px / 2);
  } */
`;
