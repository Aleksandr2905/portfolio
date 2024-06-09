import sprite from "../../assets/icons/sprite.svg";
import Social from "../Social/Social";
import * as s from "./Footer.styled";

const Footer: React.FC = () => {
  return (
    <s.Wrapper id="footer">
      <s.ContentBlock>
        <s.ContactsBlock>
          <s.Contact href="tel:+380660578505">
            <svg width={24} height={24}>
              <use href={`${sprite}#call`} />
            </svg>
            +380 660 578 505
          </s.Contact>
          <s.Contact href="mailto:natalukha.a.a@gmail.com">
            <svg width={24} height={24}>
              <use href={`${sprite}#email`} />
            </svg>
            natalukha.a.a@gmail.com
          </s.Contact>
        </s.ContactsBlock>
        <Social />
      </s.ContentBlock>
      <s.Copyright>
        © 2024 Oleksandr Natalukha. All rights reserved.
      </s.Copyright>
    </s.Wrapper>
  );
};

export default Footer;
