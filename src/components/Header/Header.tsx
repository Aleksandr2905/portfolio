import { useMediaQuery } from "react-responsive";
import { navigation } from "../../helpers/componentsData";
import * as s from "./Header.styled";
import Burger from "../Burger/Burger";

const Header: React.FC = () => {
  const isTablet = useMediaQuery({
    query: "(max-width: 1439px)",
  });

  return (
    <s.HeaderContainer>
      <s.NavBlock>
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
