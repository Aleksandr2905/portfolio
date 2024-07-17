export enum NavigationTitle {
  About = "navigation.about",
  Tech = "navigation.tech",
  Education = "navigation.education",
  Projects = "navigation.projects",
  Contact = "navigation.contact",
}

export interface INavigate {
  href: string;
  title: NavigationTitle;
}

export interface ITitleProps {
  title: string;
}

export enum AboutTitle {
  Text1 = "aboutMe.text1",
  Text2 = "aboutMe.text2",
  Text3 = "aboutMe.text3",
  Text4 = "aboutMe.text4",
  Text5 = "aboutMe.text5",
}

export interface IAbout {
  text: AboutTitle;
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

export enum ProjectsDescription {
  Pharmacy = "projectsAll.pharmacy",
  Nanny = "projectsAll.nanny",
  Rental = "projectsAll.rental",
  Phonebook = "projectsAll.phonebook",
  Healthy = "projectsAll.healthy",
  WaterTracker = "projectsAll.waterTracker",
  BudgetBoss = "projectsAll.budgetBoss",
  TastyTreats = "projectsAll.tastyTreats",
}

export interface IMobileMenuProps {
  onClose: () => void;
}

export type Theme = "light" | "dark";

export interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export interface ThemeSwitcherProps {
  $mobileMenu?: boolean;
}
