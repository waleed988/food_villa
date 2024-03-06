import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  return (
    <div className="h-screen flex items-center justify-center">
      <div>
        <p className="font-bold text-8xl">Oops!!!</p>
        <p className="text-2xl my-3">Something went wrong!!</p>
        <p className="text-6xl">
          {err.status}: {err.statusText}
        </p>
      </div>
    </div>
  );
};

export default Error;
