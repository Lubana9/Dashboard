import Button from "@components/Button/Button";
export type NoResultsProps = {
  onReset: React.MouseEventHandler<HTMLButtonElement>;
};
const NoResults: React.FC<NoResultsProps> = ({ onReset }) => {
  return (
    <div className="noresults">
      <div className="noresults__txt">
        Your search did not match any results.
      </div>
      <Button onClick={onReset} background="green">
        Reset
      </Button>
    </div>
  );
};

export default NoResults;
