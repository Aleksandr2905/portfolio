import { useMediaQuery } from "react-responsive";
import { navigation } from "../../helpers/componentsData";
import sprite from "../../assets/icons/sprite.svg";
import * as s from "./Header.styled";
import Burger from "../Burger/Burger";

const Header: React.FC = () => {
  const isTablet = useMediaQuery({
    query: "(max-width: 1439px)",
  });

  return (
    <s.HeaderContainer>
      <s.NavBlock>
        <a href="/" aria-label="logo">
          <svg width="60" height="60">
            <use href={`${sprite}#on`} />
          </svg>
        </a>
        {isTablet ? (
          <Burger />
        ) : (
          <>
            {navigation.map(({ href, title }) => (
              <s.Button key={href} href={href}>
                {title}
              </s.Button>
            ))}
          </>
        )}
      </s.NavBlock>
    </s.HeaderContainer>
  );
};

export default Header;
