import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Container } from "../../style/GlobalStyles";
import CardProject from "../CardProject/CardProject";
import Title from "../Title/Title";
import { individualProjects, teamProjects } from "../../helpers/projectsData";
import * as s from "./Projects.styled";
import sprite from "../../assets/icons/sprite.svg";
import { IProjects } from "../../helpers/interface";

type Direction = "prev" | "next";
type ProjectType = "individual" | "team";

const Projects: React.FC = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [projectType, setProjectType] = useState<ProjectType>("individual");

  const getSlideCards = (projects: IProjects[]) =>
    projects.map((project) => (
      <SwiperSlide key={project.name}>
        <CardProject project={project} />
      </SwiperSlide>
    ));

  const handleNavigation = (direction: Direction) => {
    if (swiperInstance) {
      direction === "prev"
        ? swiperInstance.slidePrev(500)
        : swiperInstance.slideNext(500);
    }
  };

  const handleToggle = (type: ProjectType) => {
    setProjectType(type);
  };

  return (
    <Container id="projects">
      <Title title="Projects" />
      <s.BtnNavBlock>
        <s.BtnNavProjects
          type="button"
          onClick={() => handleToggle("individual")}
          $active={projectType === "individual"}
        >
          Individual
        </s.BtnNavProjects>
        <s.BtnNavProjects
          type="button"
          onClick={() => handleToggle("team")}
          $active={projectType === "team"}
        >
          Team
        </s.BtnNavProjects>
      </s.BtnNavBlock>
      <s.WrapperSlider>
        <Swiper
          onSwiper={setSwiperInstance}
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          centeredSlidesBounds={true}
        >
          {projectType === "individual"
            ? getSlideCards(individualProjects)
            : getSlideCards(teamProjects)}
        </Swiper>
        <s.ButtonSlider
          type="button"
          onClick={() => handleNavigation("prev")}
          $left={true}
          aria-label="button-prev"
        >
          <svg width={24} height={24}>
            <use href={`${sprite}#arrow`} />
          </svg>
        </s.ButtonSlider>
        <s.ButtonSlider
          type="button"
          onClick={() => handleNavigation("next")}
          $left={false}
          aria-label="button-next"
        >
          <svg width={24} height={24}>
            <use href={`${sprite}#arrow`} />
          </svg>
        </s.ButtonSlider>
      </s.WrapperSlider>
    </Container>
  );
};

export default Projects;
