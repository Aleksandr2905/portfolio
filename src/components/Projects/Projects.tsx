import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Container } from "../../style/GlobalStyles";
import CardProject from "../CardProject/CardProject";
import Title from "../Title/Title";
import { individualProjects } from "../../helpers/projectsData";
import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import * as s from "./Projects.styled";
import sprite from "../../assets/icons/sprite.svg";

const Projects: React.FC = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  const slideCards = individualProjects.map((project) => (
    <SwiperSlide key={project.name}>
      <CardProject project={project} />
    </SwiperSlide>
  ));

  const handlePrev = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev(500);
    }
  };

  const handleNext = () => {
    if (swiperInstance) {
      swiperInstance.slideNext(500);
    }
  };

  return (
    <Container id="projects">
      <Title title="Projects" />
      <s.WrapperSlider>
        <Swiper
          onSwiper={setSwiperInstance}
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          centeredSlidesBounds={true}
        >
          {slideCards}
        </Swiper>
        <s.Button type="button" onClick={handlePrev} $left={true}>
          <svg width={24} height={24}>
            <use href={`${sprite}#arrow`} />
          </svg>
        </s.Button>
        <s.Button type="button" onClick={handleNext} $left={false}>
          <svg width={24} height={24}>
            <use href={`${sprite}#arrow`} />
          </svg>
        </s.Button>
      </s.WrapperSlider>
    </Container>
  );
};

export default Projects;
