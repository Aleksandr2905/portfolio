import { ITitleProps } from "../../helpers/interface";
import * as s from "./Title.styled";

const Title: React.FC<ITitleProps> = ({ title }) => {
  return <s.Title>{title}</s.Title>;
};

export default Title;
