import { aboutText } from "../../helpers/componentsData";
import { Container } from "../../style/GlobalStyles";
import Title from "../Title/Title";
import * as s from "./About.styled";

const About: React.FC = () => {
  return (
    <Container id="about">
      <Title title="About me" />
      <s.Wrapper>
        {aboutText.map(({ text }, index) => (
          <s.Text key={index}>{text}</s.Text>
        ))}
      </s.Wrapper>
    </Container>
  );
};

export default About;
