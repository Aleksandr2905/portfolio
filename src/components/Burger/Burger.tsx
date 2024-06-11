import { useState } from "react";
import MobileMenu from "../MobileMenu/MobileMenu";
import sprite from "../../assets/icons/sprite.svg";
import * as s from "./Burger.styled";

const Burger: React.FC = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div>
      <s.BurgerButton
        type="button"
        onClick={toggleMobileMenu}
        aria-label="burger button"
      >
        <svg width="48" height="48">
          <use href={`${sprite}#burger`} />
        </svg>
      </s.BurgerButton>
      {showMobileMenu ? <MobileMenu onClose={toggleMobileMenu} /> : null}
    </div>
  );
};

export default Burger;
