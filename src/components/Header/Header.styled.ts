import styled from "styled-components";

export const HeaderContainer = styled.header`
  margin: 0 20px;
  padding: 20px 0;

  @media screen and (min-width: 1440px) {
    margin: 0 40px;
  }
`;

export const NavBlock = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 58px;
  padding: 16px 40px;
  margin: 0 auto;
  width: 100%;
  border-radius: 24px;
  box-shadow: 4px 4px 10px 0px #02062e;
  background: linear-gradient(
    0deg,
    var(--deep-blue) -51.18%,
    var(--dark-blue) 91.18%
  );

  @media screen and (min-width: 1440px) {
    padding: 16px 72px;
    width: 1360px;
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

export const SwitchersBlock = styled.div`
  display: flex;
  gap: 20px;
`;
