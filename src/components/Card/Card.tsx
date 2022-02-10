import { Children } from "react";

import Button from "@components/Button/Button";
import { SiteData, TestData } from "src/data/types";
export type CardProps = {
  dataTest: TestData;
  children: React.ReactNode;
  status: string;
  border: string;
};
const Card: React.FC<CardProps> = ({ dataTest, children, status, border }) => {
  return (
    <div className={`card card__${border}`}>
      <div className="card__name">{dataTest.name}</div>
      <div className="card__type">{dataTest.type}</div>
      <div className={`card__${status}`}>{dataTest.status}</div>
      {children}
    </div>
  );
};

export default Card;
