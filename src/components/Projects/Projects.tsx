import { useState, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Container } from "../../style/GlobalStyles";
import CardProject from "../CardProject/CardProject";
import Title from "../Title/Title";
import { projects } from "../../helpers/projectsData";
import * as s from "./Projects.styled";
import sprite from "../../assets/icons/sprite.svg";
import { useTranslation } from "react-i18next";

type Direction = "prev" | "next";

const Projects: React.FC = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [navigationState, setNavigationState] = useState({
    isBeginning: true,
    isEnd: false,
  });
  const { isBeginning, isEnd } = navigationState;
  const { t } = useTranslation();

  const getSlideCards = useMemo(
    () =>
      projects.map((project) => (
        <SwiperSlide key={project.name}>
          <CardProject project={project} />
        </SwiperSlide>
      )),
    []
  );

  const handleNavigation = (direction: Direction) => {
    if (swiperInstance) {
      direction === "prev"
        ? swiperInstance.slidePrev(500)
        : swiperInstance.slideNext(500);
    }
  };

  const handleSlideChange = () => {
    if (swiperInstance) {
      setNavigationState({
        isBeginning: swiperInstance.isBeginning,
        isEnd: swiperInstance.isEnd,
      });
    }
  };

  const SvgButton: React.FC<{ direction: Direction; disabled: boolean }> = ({
    direction,
    disabled,
  }) => (
    <s.ButtonSlider
      type="button"
      onClick={() => handleNavigation(direction)}
      $left={direction === "prev"}
      aria-label={`button-${direction}`}
      disabled={disabled}
    >
      <svg width={24} height={24}>
        <use href={`${sprite}#arrow`} />
      </svg>
    </s.ButtonSlider>
  );

  return (
    <Container id="projects">
      <Title title={t("projects.title")} />
      <s.WrapperSlider>
        <Swiper
          onSwiper={setSwiperInstance}
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          centeredSlidesBounds={true}
          onSlideChange={handleSlideChange}
        >
          {getSlideCards}
        </Swiper>
        <SvgButton direction="prev" disabled={isBeginning} />
        <SvgButton direction="next" disabled={isEnd} />
      </s.WrapperSlider>
    </Container>
  );
};

export default Projects;
