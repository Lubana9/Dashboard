import React, { Children } from "react";

export type BtnProps = {
  children: React.ReactNode;
  background: string;
};
const Button: React.FC<BtnProps> = ({ children, background }) => {
  return <button className={`btn btn__${background}`}>{children}</button>;
};

export default Button;
