import React from "react";
export type SortBtnProps = {
  onSortName: React.MouseEventHandler<HTMLButtonElement>;
  onSortType: React.MouseEventHandler<HTMLButtonElement>;
  onSortStatus: React.MouseEventHandler<HTMLButtonElement>;
  onSortSite: React.MouseEventHandler<HTMLButtonElement>;
};

const SortBtn: React.FC<SortBtnProps> = ({
  onSortName,
  onSortType,
  onSortStatus,
  onSortSite,
}) => {
  return (
    <div className="sort">
      <button className="sort__btn" onClick={onSortName}>
        NAME
      </button>
      <button className="sort__btn" onClick={onSortType}>
        TYPE <span>˄</span>
      </button>
      <button className="sort__btn" onClick={onSortStatus}>
        STATUS
      </button>
      <button className="sort__btn" onClick={onSortSite}>
        SITE
      </button>
    </div>
  );
};

export default SortBtn;
