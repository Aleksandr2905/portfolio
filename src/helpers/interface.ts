export interface INavigate {
  href: string;
  title: string;
}

export interface ITitleProps {
  title: string;
}

export interface IAbout {
  text: string;
}

export interface ISocial {
  link: string;
  icon: string;
  ariaLabel: string;
}

export interface IButton {
  href: string;
  ariaLabel: string;
  text: string;
  icon: string;
  write?: boolean;
}

export interface ITechSkills {
  icon: string;
}

export interface IProjects {
  name: string;
  image: string;
  description: string;
  technologies: string;
  gitHub: string;
  livePage: string;
}

export interface ICardProjectProps {
  project: IProjects;
}
