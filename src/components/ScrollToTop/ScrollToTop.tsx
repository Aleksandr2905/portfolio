import { useState, useEffect } from "react";
import sprite from "../../assets/icons/sprite.svg";
import * as s from "./ScrollToTop.styled";

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY: number = window.scrollY;
      const footerElement: HTMLElement | null =
        document.getElementById("footer");

      if (footerElement) {
        const footerOffsetTop: number = footerElement.offsetTop;
        const distanceFromBottom: number =
          window.innerHeight + window.scrollY - footerOffsetTop;
        const newBottom: number = Math.max(40, distanceFromBottom);

        setIsVisible(scrollY > 100 || distanceFromBottom > 40);
        document.documentElement.style.setProperty(
          "--scroll-to-top-bottom",
          `${newBottom}px`
        );
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <s.ScrollToTopButton onClick={scrollToTop}>
          <svg width="24" height="24">
            <use href={`${sprite}#arrow-top`} />
          </svg>
        </s.ScrollToTopButton>
      )}
    </>
  );
};

export default ScrollToTop;
