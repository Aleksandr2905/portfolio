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
