import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  max-width: 1108px;
  margin: 0 auto;
  padding: 32px 35px;
  gap: 35px;
  border-radius: 24px;
  background: var(--bg-secondary);
`;

export const Image = styled.img`
  max-width: 535px;
  border-radius: 16px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Name = styled.h3`
  font-family: Montserrat, sans-serif;
  font-size: 32px;
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
  justify-content: space-between;
`;
