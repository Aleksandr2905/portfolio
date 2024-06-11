import styled from "styled-components";

export const Wrapper = styled.footer`
  padding: 40px 24px 0;
  background-color: var(--bg-footer);

  @media screen and (min-width: 1440px) {
    padding: 40px 0 0;
  }
`;

export const ContentBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1108px;
  gap: 30px;
  flex-wrap: wrap;
  margin: 0 auto;
  padding-bottom: 40px;
  border-bottom: 1px solid var(--main-typography);
`;

export const ContactsBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
`;

export const Contact = styled.a`
  display: flex;
  gap: 16px;
  font-family: Montserrat, sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  color: var(--main-typography);
  transition: all 0.3s;

  & svg {
    fill: var(--main-typography);
  }

  &:hover {
    transform: scale(1.05);
    color: var(--light-blue);

    & svg {
      fill: var(--light-blue);
    }
  }
`;

export const Copyright = styled.p`
  text-align: center;
  padding: 20px 0;
  font-family: Montserrat, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  color: var(--main-typography);
`;
