import { IAbout, INavigate, ISocial, ITechSkills } from "./interface";

export const navigation: INavigate[] = [
  { href: "#about", title: "navigation.about" },
  { href: "#tech", title: "navigation.tech" },
  { href: "#education", title: "navigation.education" },
  { href: "#projects", title: "navigation.projects" },
  { href: "#contact", title: "navigation.contact" },
];

export const aboutText: IAbout[] = [
  {
    text: "aboutMe.text1",
  },
  {
    text: "aboutMe.text2",
  },
  {
    text: "aboutMe.text3",
  },
  {
    text: "aboutMe.text4",
  },
  {
    text: "aboutMe.text5",
  },
];

export const social: ISocial[] = [
  {
    link: "https://github.com/Aleksandr2905",
    icon: "github",
    ariaLabel: "Link to github",
  },
  {
    link: "https://t.me/alan_2905",
    icon: "telegram",
    ariaLabel: "Link to telegram",
  },
  {
    link: "https://linkedin.com/in/oleksandr-natalukha/",
    icon: "linkedin",
    ariaLabel: "Link to linkedin",
  },
];

export const techSkills: ITechSkills[] = [
  { icon: "html" },
  { icon: "css" },
  { icon: "javascript" },
  { icon: "typescript" },
  { icon: "react" },
  { icon: "redux" },
  { icon: "nodejs" },
  { icon: "express" },
  { icon: "mongodb" },
  { icon: "postman" },
  { icon: "firebase" },
  { icon: "git" },
  { icon: "figma" },
  { icon: "tailwind" },
  { icon: "styled-components" },
];
