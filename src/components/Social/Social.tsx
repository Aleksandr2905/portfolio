import { social } from "../../helpers/componentsData";
import sprite from "../../assets/icons/sprite.svg";
import * as s from "./Social.styled";

const Social: React.FC = () => {
  return (
    <s.Wrapper>
      {social.map(({ icon, link, ariaLabel }) => (
        <s.Button
          key={icon}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
        >
          <svg width={28} height={28}>
            <use href={`${sprite}#${icon}`} />
          </svg>
        </s.Button>
      ))}
    </s.Wrapper>
  );
};

export default Social;
