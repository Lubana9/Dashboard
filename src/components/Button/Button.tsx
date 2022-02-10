import React from "react";

export type BtnProps = {
  children: React.ReactNode;
  background: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
const Button: React.FC<BtnProps> = ({ children, background, onClick }) => {
  return (
    <button onClick={onClick} className={`btn btn__${background}`}>
      {children}
    </button>
  );
};

export default Button;
