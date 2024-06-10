import pharmacy from "../assets/image/projects/e-pharmacy.png";
import nanny from "../assets/image/projects/nanny.jpg";
import rental from "../assets/image/projects/rental-car.jpg";
import phonebook from "../assets/image/projects/phonebook.jpg";

import waterTracker from "../assets/image/projects/water-tracker.png";
import budgetBoss from "../assets/image/projects/budget-boss.jpg";

import { IProjects } from "./interface";

export const individualProjects: IProjects[] = [
  {
    name: "E-Pharmacy",
    image: pharmacy,
    description:
      "A web application for online pharmacies allows users to order medications over the internet. The application includes 7 pages and offers features such as product filtering, user registration and authentication, adding products to the shopping cart, and order submission with email confirmation. Backend: Node.js and Express. Database: MongoDB.",
    technologies:
      "HTML,  CSS,  JS, React, Redux  Toolkit, React  Hook Form,  MUI, Node.js, Express.js, MongoDB, Styled Components",
    gitHub: "https://github.com/Aleksandr2905/e-pharmacy",
    livePage: "https://e-pharmacy-client.vercel.app/",
  },
  {
    name: "Nanny.Services",
    image: nanny,
    description:
      "A web application for finding nannies with filtering options by alphabetical order, price, and popularity. Users can schedule appointments with nannies and add them to favorites, which requires registration or login. The backend is built on Firebase, ensuring reliable authentication and data storage.",
    technologies:
      "HTML, CSS, JS, React, Redux Toolkit, Firebase, Styled Components",
    gitHub: "https://github.com/Aleksandr2905/Nanny-Services",
    livePage: "https://nanny-services-one.vercel.app/",
  },
  {
    name: "Rental Car",
    image: rental,
    description:
      "The website is a car rental in Ukraine. Convenient navigation allows users to navigate through the features of Rental Car easily. The catalog page offers a variety of cars with meticulous filtering by brand, hourly rental price, and mileage",
    technologies: "HTML, CSS, JS, React, Redux Toolkit, Rest API",
    gitHub: "https://github.com/Aleksandr2905/rental-car",
    livePage: "https://aleksandr2905.github.io/rental-car",
  },
  {
    name: "Phone Book",
    image: phonebook,
    description:
      "Phone  Book  is  a  web  application  that  allows  users  to  easily  manage  their  contacts.  From registration and authentication to contact management and search and filtering.",
    technologies: "HTML, CSS, JS, React, Redux Toolkit",
    gitHub: "https://github.com/Aleksandr2905/Phonebook",
    livePage: "https://aleksandr2905.github.io/Phonebook/",
  },
];

export const teamProjects: IProjects[] = [
  {
    name: "Tracker of water",
    image: waterTracker,
    description:
      "The  application  is  designed  to  track  user's  water  consumption.  Registration,  user  login,  and responsive layout are implemented. Team project. Role: Developer.",
    technologies:
      "HTML, CSS, JS, React, Redux, Node.js, Express.js, MongoDB, Styled Components",
    gitHub: "https://github.com/Aleksandr2905/watertracker-app",
    livePage: "https://waterbot-app.vercel.app/",
  },
  {
    name: "Budget Boss",
    image: budgetBoss,
    description:
      "The web application is designed for financial and budget management. It provides users with tools to create, track, and analyze their finances, helping them effectively plan expenses, monitor incomes, and enhance financial literacy. The website implements Google authentication, registration, login functionality and responsive layout.",
    technologies: "HTML, CSS, JS, React, Redux, Rest API, Styled Components",
    gitHub: "https://github.com/Aleksandr2905/react-project-budget-boss",
    livePage: "https://aleksandr2905.github.io/react-project-budget-boss",
  },
];
