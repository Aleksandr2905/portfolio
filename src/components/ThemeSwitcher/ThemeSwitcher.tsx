import { useContext } from "react";
import { ThemeContext } from "../../providers/ThemeProvider";
import { ThemeContextType, ThemeSwitcherProps } from "../../helpers/interface";
import sprite from "../../assets/icons/sprite.svg";
import * as s from "./ThemeSwitcher.styled";

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ $mobileMenu }) => {
  const context = useContext<ThemeContextType | undefined>(ThemeContext);

  if (!context) {
    throw new Error("ButtonTheme must be used within a ThemeProvider");
  }

  const { theme, setTheme } = context;

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <s.Button
      type="button"
      onClick={changeTheme}
      aria-label="icon theme"
      $mobileMenu={$mobileMenu}
    >
      <svg width={24} height={24}>
        <use href={`${sprite}#${theme === "light" ? "moon" : "sun"}`} />
      </svg>
    </s.Button>
  );
};

export default ThemeSwitcher;
