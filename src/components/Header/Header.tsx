import { navigation } from "../../helpers/componentsData";
import * as s from "./Header.styled";

const Header: React.FC = () => {
  return (
    <s.HeaderContainer>
      <s.NavBlock>
        {navigation.map((item) => (
          <s.Button key={item.href} href={item.href}>
            {item.title}
          </s.Button>
        ))}
      </s.NavBlock>
    </s.HeaderContainer>
  );
};

export default Header;
