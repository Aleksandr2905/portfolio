import { navigation } from "../../helpers/componentsData";
import * as s from "./Header.styled";

const Header: React.FC = () => {
  return (
    <s.HeaderContainer>
      <s.NavBlock>
        {navigation.map(({ href, title }) => (
          <s.Button key={href} href={href}>
            {title}
          </s.Button>
        ))}
      </s.NavBlock>
    </s.HeaderContainer>
  );
};

export default Header;
