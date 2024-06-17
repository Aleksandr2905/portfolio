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
import { useTranslation } from "react-i18next";

type Direction = "prev" | "next";
type ProjectType = "individual" | "team";

const Projects: React.FC = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [projectType, setProjectType] = useState<ProjectType>("individual");
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const { t } = useTranslation();

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
    if (swiperInstance) {
      swiperInstance.slideTo(0, 0);
      setIsBeginning(true);
      setIsEnd(false);
    }
  };

  const handleSlideChange = () => {
    if (swiperInstance) {
      setIsBeginning(swiperInstance.isBeginning);
      setIsEnd(swiperInstance.isEnd);
    }
  };

  return (
    <Container id="projects">
      <Title title={t("projects.title")} />
      <s.BtnNavBlock>
        <s.BtnNavProjects
          type="button"
          onClick={() => handleToggle("individual")}
          $active={projectType === "individual"}
        >
          {t("projects.btnIndividual")}
        </s.BtnNavProjects>
        <s.BtnNavProjects
          type="button"
          onClick={() => handleToggle("team")}
          $active={projectType === "team"}
        >
          {t("projects.btnTeam")}
        </s.BtnNavProjects>
      </s.BtnNavBlock>
      <s.WrapperSlider>
        <Swiper
          onSwiper={setSwiperInstance}
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          centeredSlidesBounds={true}
          onSlideChange={handleSlideChange}
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
          disabled={isBeginning}
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
          disabled={isEnd}
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
