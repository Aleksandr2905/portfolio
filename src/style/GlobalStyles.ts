import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

html {
  scroll-behavior: smooth;
}

html,
body,
p,
ol,
ul,
li,
dl,
dt,
dd,
blockquote,
figure,
fieldset,
legend,
textarea,
pre,
iframe,
hr,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
  font-weight: normal;
}

ul {
  list-style: none;
}

button,
input,
select {
  margin: 0;
}

button {
  cursor: pointer;
}

html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

img,
video {
  display: block;
  height: auto;
  width: 100%;
}

iframe {
  border: 0;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

td,
th {
  padding: 0;
}

a {
  text-decoration: none;
  color: inherit;
}
`;

export const Container = styled.section`
  max-width: 1440px;
  margin: 0 auto;
  padding: 40px 58px;

  /* @media screen and (min-width: 768px) {
    padding: 60px 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 60px 96px;
  } */
`;
