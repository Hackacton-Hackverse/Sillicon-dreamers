import React from "react";
import { useRouteError } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        height: "100vh",
        fontSize:"4rem",
        color:"red"
      }}
    >
      An error occured {error.status} {error.statusText}
    </div>
  );
};

export default ErrorPage;
