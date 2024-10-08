import styled from "styled-components";
import { Report } from "notiflix/build/notiflix-report-aio";

export const Text = styled.p`
  text-align: center;
  font-family: Montserrat, sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 20px;
  color: var(--main-typography);

  & a {
    text-decoration-line: underline;

    &:hover {
      color: var(--light-blue);
    }
  }
`;

export const Forma = styled.form`
  display: flex;
  flex-direction: column;
  gap: 28px;
  padding: 24px;
  max-width: 636px;
  margin: 0 auto;
  border-radius: 24px;
  background-color: var(--bg-secondary);

  @media screen and (min-width: 1440px) {
    gap: 40px;
    padding: 40px 32px;
  }
`;

export const WrapperInput = styled.div`
  position: relative;
`;

export const Input = styled.input<{ $errors?: boolean }>`
  width: 100%;
  padding: 23px 20px;
  border-radius: 16px;
  font-family: Montserrat, sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 140%;
  border: 1px solid
    ${(props) => (props.$errors ? `var(--errors)` : `var(--bg-input)`)};
  outline: none;
  transition: all 0.3s;
  color: var(--main-typography);
  background-color: var(--bg-input);

  &:hover {
    box-shadow: 0px 0px 30px 0px rgba(233, 255, 255, 0.3);
  }

  &:focus {
    outline: 1px solid
      ${(props) => (props.$errors ? `var(--errors)` : `var(--main-typography)`)};
  }

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px var(--bg-input) inset;
    -webkit-text-fill-color: var(--main-typography);
  }

  &::placeholder {
    font-family: Montserrat, sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 140%;
    color: var(--main-typography);
  }
`;

export const Textarea = styled.textarea<{ $errors?: boolean }>`
  width: 100%;
  height: 216px;
  padding: 23px 20px;
  border-radius: 16px;
  font-family: Montserrat, sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 140%;
  resize: none;
  border: 1px solid
    ${(props) => (props.$errors ? `var(--errors)` : `var(--bg-input)`)};
  outline: none;
  transition: all 0.3s;
  background-color: var(--bg-input);
  color: var(--main-typography);

  &:hover {
    box-shadow: 0px 0px 30px 0px rgba(233, 255, 255, 0.3);
  }

  &:focus {
    outline: 1px solid
      ${(props) => (props.$errors ? `var(--errors)` : `var(--main-typography)`)};
  }

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px var(--bg-input) inset;
    -webkit-text-fill-color: var(--main-typography);
  }

  &::placeholder {
    font-family: Montserrat, sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 140%;
    color: var(--main-typography);
  }
`;

export const ErrorText = styled.p`
  position: absolute;
  font-family: Montserrat, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 140%;
  color: var(--errors);
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 24px;
  width: fit-content;
  margin: 0 auto;
  padding: 16px;
  justify-content: center;
  border: none;
  border-radius: 16px;
  background: linear-gradient(
    180deg,
    var(--dark-blue) -102.68%,
    var(--bright-blue) 58.93%
  );
  color: var(--dark-blue);
  font-family: Montserrat, sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: normal;
  transition: all 0.5s;

  & svg {
    fill: var(--dark-blue);
  }

  &:hover {
    transform: scale(1.05);
    background: var(--dark-blue);
    color: var(--main-typography);
    box-shadow: 0px 0px 30px 0px var(--shadow-hover);

    & svg {
      fill: var(--main-typography);
    }
  }

  @media screen and (min-width: 1440px) {
    padding: 16px 40px;
  }
`;

Report.init({
  width: "320px",
  backgroundColor: `var( --main-typography)`,
  borderRadius: "25px",
  rtl: false,
  zindex: 4002,
  backOverlay: true,
  backOverlayColor: "rgba(0,0,0,0.5)",
  backOverlayClickToClose: true,
  fontFamily: "Montserrat, sans-serif",
  svgSize: "110px",
  plainText: true,
  titleFontSize: "20px",
  titleMaxLength: 34,
  messageFontSize: "16px",
  messageMaxLength: 400,
  buttonFontSize: "14px",
  buttonMaxLength: 34,
  cssAnimation: true,
  cssAnimationDuration: 360,
  cssAnimationStyle: "fade",
  success: {
    svgColor: `var(--deep-blue)`,
    titleColor: `var(--dark-blue)`,
    messageColor: `var(--dark-blue)`,
    buttonBackground: `linear-gradient(
    180deg,
    var(--dark-blue) -102.68%,
    var(--bright-blue) 58.93%
  )`,
    buttonColor: `var(--main-typography)`,
    backOverlayColor: "rgba(0,0,0,0.5)",
  },
  failure: {
    svgColor: `var(--errors)`,
    titleColor: `var(--dark-blue)`,
    messageColor: `var(--dark-blue)`,
    buttonBackground: `var(--errors)`,
    buttonColor: `var(--main-typography)`,
    backOverlayColor: "rgba(0,0,0,0.5)",
  },
});
