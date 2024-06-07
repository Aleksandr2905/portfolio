import { techSkills } from "../../helpers/componentsData";
import sprite from "../../assets/icons/sprite.svg";
import { Container } from "../../style/GlobalStyles";
import Title from "../Title/Title";
import * as s from "./TechSkills.styled";

const TechSkills: React.FC = () => {
  return (
    <Container id="tech">
      <Title title="Tech Skills" />
      <s.Wrapper>
        {techSkills.map(({ icon }) => (
          <svg key={icon} width={84} height={84}>
            <use href={`${sprite}#${icon}`} />
          </svg>
        ))}
      </s.Wrapper>
    </Container>
  );
};

export default TechSkills;
