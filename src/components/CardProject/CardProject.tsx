import { useTranslation } from "react-i18next";
import { ICardProjectProps } from "../../helpers/interface";
import Button from "../Button/Button";
import * as s from "./CardProject.styled";

const CardProject: React.FC<ICardProjectProps> = ({ project }) => {
  const { name, image, description, technologies, gitHub, livePage } = project;
  const { t } = useTranslation();

  return (
    <>
      <s.Wrapper key={name}>
        <s.Image
          src={image}
          alt="Photo project"
          width={239}
          height={132}
          loading="lazy"
        />
        <s.Description>
          <s.Name>{name}</s.Name>
          <s.Text>{t(description)}</s.Text>
          <s.Text>{technologies}</s.Text>
          <s.BtnBlock>
            <Button
              href={gitHub}
              ariaLabel={`link Git Hub ${name}`}
              text="Git Hub"
              icon="github"
            />
            <Button
              href={livePage}
              ariaLabel={`link live page ${name}`}
              text="Live page"
              icon="web"
            />
          </s.BtnBlock>
        </s.Description>
      </s.Wrapper>
    </>
  );
};

export default CardProject;
