import { useCallback, useEffect, useMemo, useRef } from "react";
import { createPortal } from "react-dom";
import { IMobileMenuProps } from "../../helpers/interface";
import * as s from "./MobileMenu.styled";
import sprite from "../../assets/icons/sprite.svg";
import { navigation } from "../../helpers/componentsData";

const MobileMenu: React.FC<IMobileMenuProps> = ({ onClose }) => {
  const element = useMemo(() => document.createElement("div"), []);
  const modalRootElementRef = useRef<HTMLElement | null>(
    document.getElementById("modal")
  );

  const handleKeydown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    const currentModalRootElement = modalRootElementRef.current;
    if (!currentModalRootElement) return;

    currentModalRootElement.appendChild(element);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeydown);

    return () => {
      if (!currentModalRootElement) return;
      currentModalRootElement.removeChild(element);
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [element, handleKeydown]);

  const handleBackdrop = (event: React.MouseEvent<HTMLDivElement>): void => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <s.Wrapper onClick={handleBackdrop}>
      <s.Container>
        <s.CloseBtn type="button" onClick={onClose}>
          <svg width={32} height={32}>
            <use href={`${sprite}#close`} />
          </svg>
        </s.CloseBtn>
        {navigation.map(({ href, title }) => (
          <s.Button key={href} href={href} onClick={onClose}>
            {title}
          </s.Button>
        ))}
      </s.Container>
    </s.Wrapper>,
    element
  );
};

export default MobileMenu;
