import { useTranslation } from "react-i18next";
import { techSkills } from "../../helpers/componentsData";
import sprite from "../../assets/icons/sprite.svg";
import { Container } from "../../style/GlobalStyles";
import Title from "../Title/Title";
import * as s from "./TechSkills.styled";

const TechSkills: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container id="tech">
      <Title title={t("tech.title")} />
      <s.Wrapper>
        {techSkills.map(({ icon }) => (
          <svg key={icon} width={60} height={60}>
            <use href={`${sprite}#${icon}`} />
          </svg>
        ))}
      </s.Wrapper>
    </Container>
  );
};

export default TechSkills;
