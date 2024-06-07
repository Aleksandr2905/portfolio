import { IAbout, INavigate } from "./interface";

export const navigation: INavigate[] = [
  { href: "#about", title: "About me" },
  { href: "#tech", title: "Tech Skills" },
  { href: "#education", title: "Education" },
  { href: "#projects", title: "Projects" },
  { href: "#contact", title: "Contact" },
];

export const aboutText: IAbout[] = [
  {
    text: "As a passionate Fullstack Developer, I specialize in creating dynamic websites using the latest technologies. My expertise lies in developing highly functional and fast applications that provide seamless experiences across all devices. With a robust understanding of both frontend and backend technologies, I am capable of managing full-cycle projects efficiently.",
  },
  {
    text: "I am dedicated to continuously improving my skills and knowledge to deliver high-quality products. Collaboration, idea exchange, and mutual support are core values I believe lead to the best results. Adherence to deadlines and taking responsibility for my work are principles I uphold in every project.",
  },
  {
    text: "I am not afraid to think outside the box and propose new ideas, always striving to create products of the highest quality. I am constantly searching for new and better ways to implement projects.",
  },
  {
    text: "Open to new ideas and feedback, I view mistakes as opportunities to learn and grow.",
  },
];
