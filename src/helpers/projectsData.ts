import puppyDiary from "../assets/image/projects/puppy-diary.webp";
import ecosolution from "../assets/image/projects/ecosolution.webp";
import pratsia from "../assets/image/projects/pratsia.webp";
import pharmacy from "../assets/image/projects/e-pharmacy.webp";
import nanny from "../assets/image/projects/nanny.webp";
import apeNft from '../assets/image/projects/ape-nft.webp'
import rental from "../assets/image/projects/rental-car.webp";
import phonebook from "../assets/image/projects/phonebook.webp";

import healthy from "../assets/image/projects/healthy-management.webp";
import waterTracker from "../assets/image/projects/water-tracker.webp";
import budgetBoss from "../assets/image/projects/budget-boss.webp";
import tastyTreats from "../assets/image/projects/tasty-treats.webp";

import { ProjectsDescription } from "./interface";

export const projects = [
  {
    name: "Puppy Diary",
    image: puppyDiary,
    description: ProjectsDescription.PuppyDiary,
    technologies:
      "HTML, CSS, SASS, JS, Swiper",
    gitHub: "https://github.com/Aleksandr2905/puppy-diary",
    livePage: "https://puppy-diary.vercel.app",
  },
  {
    name: "Ecosolution",
    image: ecosolution,
    description: ProjectsDescription.Ecosolution,
    technologies:
      "HTML, CSS, JS, React, React Hook Form, Yup, React Responsive, Swiper, GSAP, Notiflix, Styled Components",
    gitHub: "https://github.com/Aleksandr2905/ecosolution",
    livePage: "https://ecosolution-greenergy.vercel.app",
  },
   {
    name: "Pratsia",
    image: pratsia,
    description: ProjectsDescription.Pratsia,
    technologies:
      "HTML, CSS, JS, React, React Hook Form, Yup, i18next, EmailJS, React Responsive, GSAP, Styled Components",
    gitHub: "https://github.com/Aleksandr2905/pratsia-lending",
    livePage: "https://pratsia.de",
  },
  {
    name: "E-Pharmacy",
    image: pharmacy,
    description: ProjectsDescription.Pharmacy,
    technologies:
      "HTML,  CSS,  JS, React, Redux  Toolkit, React  Hook Form,  MUI, Node.js, Express.js, MongoDB, Styled Components",
    gitHub: "https://github.com/Aleksandr2905/e-pharmacy",
    livePage: "https://e-pharmacy-client.vercel.app/",
  },
  {
    name: "Nanny.Services",
    image: nanny,
    description: ProjectsDescription.Nanny,
    technologies:
      "HTML, CSS, JS, React, Redux Toolkit, Firebase, Styled Components",
    gitHub: "https://github.com/Aleksandr2905/Nanny-Services",
    livePage: "https://nanny-services-one.vercel.app/",
  },
  {
    name: "Ape NFT",
    image: apeNft,
    description: ProjectsDescription.ApeNft,
    technologies:
      "HTML, CSS, JS, React, React Hook Form, Yup, React Responsive, Swiper, Notiflix, Styled Components",
    gitHub: "https://github.com/Aleksandr2905/ape-nft",
    livePage: "https://ape-nft-flame.vercel.app/",
  },
  {
    name: "Tracker of water",
    image: waterTracker,
    description: ProjectsDescription.WaterTracker,
    technologies:
      "HTML, CSS, JS, React, Redux, Node.js, Express.js, MongoDB, Styled Components",
    gitHub: "https://github.com/Aleksandr2905/watertracker-app",
    livePage: "https://waterbot-app.vercel.app/",
  },
   {
    name: "Healthy Management",
    image: healthy,
    description: ProjectsDescription.Healthy,
    technologies:
      "HTML, CSS, JS, React, Redux, Node.js, Express.js, MongoDB, Styled Components",
    gitHub: "https://github.com/Aleksandr2905/healthy-management-project",
    livePage: "https://healthymanagement.com.ua/",
  },
  {
    name: "Rental Car",
    image: rental,
    description: ProjectsDescription.Rental,
    technologies: "HTML, CSS, JS, React, Redux Toolkit, Rest API",
    gitHub: "https://github.com/Aleksandr2905/rental-car",
    livePage: "https://aleksandr2905.github.io/rental-car",
  },
   {
    name: "Budget Boss",
    image: budgetBoss,
    description: ProjectsDescription.BudgetBoss,
    technologies: "HTML, CSS, JS, React, Redux, Rest API, Styled Components",
    gitHub: "https://github.com/Aleksandr2905/react-project-budget-boss",
    livePage: "https://aleksandr2905.github.io/react-project-budget-boss",
  },
  {
    name: "Tasty Treats",
    image: tastyTreats,
    description: ProjectsDescription.TastyTreats,
    technologies: "HTML, CSS, JS, REST API, Parcel",
    gitHub: "https://github.com/Aleksandr2905/js-project-team",
    livePage: "https://aleksandr2905.github.io/js-project-team/index.html",
  },
  {
    name: "Phone Book",
    image: phonebook,
    description: ProjectsDescription.Phonebook,
    technologies: "HTML, CSS, JS, React, Redux Toolkit",
    gitHub: "https://github.com/Aleksandr2905/Phonebook",
    livePage: "https://aleksandr2905.github.io/Phonebook/",
  },
];
