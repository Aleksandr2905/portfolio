import { Container } from "../../style/GlobalStyles";
import Title from "../Title/Title";
import * as s from "./Education.styled";
import goit1x from "../../assets/image/goit@1x.png";
import goit2x from "../../assets/image/goit@2x.png";

const Education: React.FC = () => {
  return (
    <Container id="education">
      <Title title="Education" />
      <s.Wrapper>
        <s.Image
          srcSet={`${goit1x} 1x, ${goit2x} 2x`}
          src={goit1x}
          alt="logo goit"
          width={180}
          height={60}
        />
        <div>
          <s.School>IT School GoIT</s.School>
          <s.Specialist>Fullstack Developer | 2023 - 2024</s.Specialist>
        </div>
      </s.Wrapper>
    </Container>
  );
};

export default Education;
