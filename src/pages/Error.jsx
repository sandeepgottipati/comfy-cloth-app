import { useRouteError, Link } from "react-router-dom";
const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <main className="grid min-h-screen place-items-center px-8">
        <div className="text-center">
          <p className="text-9xl font-semibold text-primary">404</p>
          <p className="mt-4 text-6xl font-normal">Page Not found</p>
        </div>
        <div>
          <Link to="/" className="btn btn-secondary">
            Go back Home
          </Link>
        </div>
      </main>
    );
  }
  return (
    <main className="min-h-screen grid place-items-center">
      <h2 className="text-4xl font-bold text-primary">
        there was an error....{" "}
      </h2>
    </main>
  );
};
export default Error;
