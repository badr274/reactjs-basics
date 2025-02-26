import { HTMLAttributes } from "react";

interface IProps extends HTMLAttributes<HTMLSpanElement> {
  color?: string;
  className?: string;
}
const RoundedColor = ({ color, className, ...rest }: IProps) => {
  return (
    <span
      className={`${className} block w-5 h-5 rounded-full cursor-pointer`}
      style={{ backgroundColor: color }}
      {...rest}
    ></span>
  );
};

export default RoundedColor;
