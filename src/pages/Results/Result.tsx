import { Link } from "react-router-dom";

const Result = () => {
  return (
    <div className="page">
      <div className="page__txt">
        <div className="page__txt--heading">Results</div>
        <div className="page__txt--subheading">Order basket redesing</div>
      </div>
      <Link to={"/Dashboard"}>
        <div className="page__back--btn">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z" />
            </svg>
          </div>
          <div>Back</div>
        </div>{" "}
      </Link>
    </div>
  );
};

export default Result;
