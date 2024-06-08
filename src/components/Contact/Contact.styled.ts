import styled from "styled-components";

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
  gap: 40px;
  padding: 40px 32px;
  max-width: 636px;
  margin: 0 auto;
  border-radius: 24px;
  background-color: var(--bg-secondary);
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
  color: var(--main-typography);
  border: 1px solid
    ${(props) => (props.$errors ? `var(--errors)` : `var(--bg-input)`)};
  outline: none;
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
  padding: 16px 40px;
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
    box-shadow: 0px 0px 30px 0px rgba(233, 255, 255, 0.7);

    & svg {
      fill: var(--main-typography);
    }
  }
`;
