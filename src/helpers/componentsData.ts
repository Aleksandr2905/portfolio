import {
  AboutTitle,
  IAbout,
  INavigate,
  ISocial,
  ITechSkills,
  NavigationTitle,
} from "./interface";

export const navigation: INavigate[] = [
  { href: "#about", title: NavigationTitle.About },
  { href: "#tech", title: NavigationTitle.Tech },
  { href: "#education", title: NavigationTitle.Education },
  { href: "#projects", title: NavigationTitle.Projects },
  { href: "#contact", title: NavigationTitle.Contact },
];

export const aboutText: IAbout[] = [
  {
    text: AboutTitle.Text1,
  },
  {
    text: AboutTitle.Text2,
  },
  {
    text: AboutTitle.Text3,
  },
  {
    text: AboutTitle.Text4,
  },
  {
    text: AboutTitle.Text5,
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
  { icon: "nextjs" },
  { icon: "nodejs" },
  { icon: "express" },
  { icon: "mongodb" },
  { icon: "firebase" },
  { icon: "postman" },
  { icon: "git" },
  { icon: "sass" },
  { icon: "tailwind" },
  { icon: "styled-components" },
  { icon: "vs-code" },
  { icon: "figma" },    
];
