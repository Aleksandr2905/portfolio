import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 40px;
  max-width: 1108px;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 0 auto;
  flex-wrap: wrap;

  @media screen and (min-width: 1440px) {
    justify-content: space-between;
  }
`;

export const PhotoContainer = styled.div`
  width: 430px;
  height: 559px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  overflow: hidden;
`;

export const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 24px;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 96px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const FullName = styled.h1`
  text-align: center;
  font-family: Montserrat, sans-serif;
  font-size: 40px;
  font-weight: 600;
  line-height: normal;
  color: var(--main-typography);
`;

export const Text = styled.h2`
  text-align: center;
  font-family: Montserrat, sans-serif;
  font-size: 32px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 1.6px;
  text-transform: uppercase;
  color: var(--main-typography);
`;

export const BtnWrapper = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: center;
`;
