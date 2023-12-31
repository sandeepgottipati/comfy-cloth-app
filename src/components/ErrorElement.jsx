import { useRouteError } from "react-router-dom";

const ErrorElement = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1 className="text-4xl font-bold">There was an error.....</h1>
    </div>
  );
};
export default ErrorElement;
