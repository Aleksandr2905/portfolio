import { useTranslation } from "react-i18next";
import { Container } from "../../style/GlobalStyles";
import photo1x from "../../assets/image/photo@1x.jpg";
import photo2x from "../../assets/image/photo@2x.jpg";
import photo1xWebp from "../../assets/image/photo@1x.webp";
import photo2xWebp from "../../assets/image/photo@2x.webp";
import * as s from "./Hero.styled";
import Social from "../Social/Social";
import Button from "../Button/Button";

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <s.Wrapper>
        <picture>
          <source
            srcSet={`${photo1xWebp} 1x, ${photo2xWebp} 2x`}
            type="image/webp"
          />
          <source srcSet={`${photo1x} 1x, ${photo2x} 2x`} type="image/jpeg" />
          <s.Photo src={photo1x} alt="Oleksandr" width={327} height={425} />
        </picture>
        <s.Profile>
          <s.TitleWrapper>
            <s.Text>{t("hero.hello")}</s.Text>
            <s.FullName>{t("hero.name")}</s.FullName>
            <s.Text>{t("hero.specialization")}</s.Text>
          </s.TitleWrapper>
          <s.BtnWrapper>
            <Button
              href="mailto:natalukha.dev@gmail.com"
              ariaLabel="write by email"
              text={t("hero.btnWrite")}
              icon="email"
              write={true}
            />
            <Button
              href="https://drive.google.com/file/d/1GQSXpS4tm5tDfoUpbwMUDCc7A1V7ac8G/view?usp=sharing"
              ariaLabel="link to resume"
              text={t("hero.btnResume")}
              icon="download"
            />
          </s.BtnWrapper>
          <Social />
        </s.Profile>
      </s.Wrapper>
    </Container>
  );
};

export default Hero;
