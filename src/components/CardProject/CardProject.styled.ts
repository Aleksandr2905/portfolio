import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 768px;
  height: auto;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 32px;
  gap: 35px;
  border-radius: 24px;
  background: var(--bg-secondary);

  @media screen and (min-width: 1440px) {
    max-width: 1108px;
    height: 395px;
    height: auto;
  }
`;

export const Image = styled.img`
  margin: auto 0;
  border-radius: 16px;

  @media screen and (min-width: 1440px) {
    width: 535px;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Name = styled.h3`
  font-family: Montserrat, sans-serif;
  font-size: 28px;
  font-weight: 500;
  line-height: normal;
  color: var(--main-typography);
`;

export const Text = styled.p`
  font-family: Montserrat, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  color: var(--main-typography);
`;

export const BtnBlock = styled.div`
  display: flex;
  gap: 30px;
  justify-content: space-between;
  margin-top: auto;
  flex-wrap: wrap;
`;
