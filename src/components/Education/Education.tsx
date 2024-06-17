import { useTranslation } from "react-i18next";
import { Container } from "../../style/GlobalStyles";
import Title from "../Title/Title";
import * as s from "./Education.styled";

const Education: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container id="education">
      <Title title={t("education.title")} />
      <s.Wrapper>
        <s.School>{t("education.school")}</s.School>
        <s.Specialist>{t("education.specialist")}</s.Specialist>
      </s.Wrapper>
    </Container>
  );
};

export default Education;
