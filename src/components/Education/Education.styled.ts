import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
`;

export const Image = styled.img`
  width: 180px;
  height: 60px;
  padding: 8px;
  border-radius: 8px;
  background-color: #fff;
`;

export const School = styled.h3`
  font-family: Montserrat, sans-serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 140%;
  color: var(--main-typography);
`;

export const Specialist = styled.p`
  font-family: Montserrat, sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 140%;
  color: var(--main-typography);
`;
