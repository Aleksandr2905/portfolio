import { useTranslation } from "react-i18next";
import sprite from "../../assets/icons/sprite.svg";
import * as s from "./LanguageSwitcher.styled";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <s.Wrapper>
      <s.Button
        type="button"
        onClick={() => changeLanguage("ua")}
        aria-label="flag Ukraine"
      >
        <svg width={28} height={28}>
          <use href={`${sprite}#ua`} />
        </svg>
      </s.Button>
      <s.Button
        type="button"
        onClick={() => changeLanguage("en")}
        aria-label="flag Great Britain"
      >
        <svg width={28} height={28}>
          <use href={`${sprite}#en`} />
        </svg>
      </s.Button>
    </s.Wrapper>
  );
};

export default LanguageSwitcher;
