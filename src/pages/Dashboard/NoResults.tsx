import React from "react";

import Button from "@components/Button/Button";

const NoResults = () => {
  return (
    <div className="noresults">
      <div className="noresults__txt">
        Your search did not match any results.
      </div>
      <Button background="green">Reset</Button>
    </div>
  );
};

export default NoResults;
