import { Container } from "../../style/GlobalStyles";
import Title from "../Title/Title";
import * as s from "./Education.styled";

const Education: React.FC = () => {
  return (
    <Container id="education">
      <Title title="Education" />
      <s.Wrapper>
        <s.School>IT School GoIT</s.School>
        <s.Specialist>Fullstack Developer | 2023 - 2024</s.Specialist>
      </s.Wrapper>
    </Container>
  );
};

export default Education;
