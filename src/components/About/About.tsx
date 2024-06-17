import { useTranslation } from "react-i18next";
import { aboutText } from "../../helpers/componentsData";
import { Container } from "../../style/GlobalStyles";
import Title from "../Title/Title";
import * as s from "./About.styled";

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container id="about">
      <Title title={t("aboutMe.title")} />
      <s.Wrapper>
        {aboutText.map(({ text }, index) => (
          <s.Text key={index}>{t(text)}</s.Text>
        ))}
      </s.Wrapper>
    </Container>
  );
};

export default About;
