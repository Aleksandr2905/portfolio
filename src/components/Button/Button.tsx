import sprite from "../../assets/icons/sprite.svg";
import { IButton } from "../../helpers/interface";
import * as s from "./Button.styled";

const Button: React.FC<IButton> = ({ href, ariaLabel, text, icon, write }) => {
  return (
    <s.Button
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      $write={write}
    >
      {text}
      <svg width={24} height={24}>
        <use href={`${sprite}#${icon}`} />
      </svg>
    </s.Button>
  );
};

export default Button;
