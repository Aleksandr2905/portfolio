import pharmacy from "../assets/image/projects/e-pharmacy.png";
import nanny from "../assets/image/projects/nanny.jpg";
import rental from "../assets/image/projects/rental-car.jpg";
import phonebook from "../assets/image/projects/phonebook.jpg";

import healthy from "../assets/image/projects/healthy-management.jpg";
import waterTracker from "../assets/image/projects/water-tracker.png";
import budgetBoss from "../assets/image/projects/budget-boss.jpg";
import tastyTreats from "../assets/image/projects/tasty-treats.jpg";

import { ProjectsDescription } from "./interface";

export const projects = [
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
