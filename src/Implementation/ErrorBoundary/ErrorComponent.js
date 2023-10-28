import React, { useEffect } from "react";
import ErrorBoundry from "./ErrorBoundry";

const ErrorComp = () => {
  useEffect(() => {
    throw new Error("New errrror");
  }, []);

  return <div>This is error comp</div>;
};

export default function ErrorComponent() {
    console.log("hii")
  return (
    <ErrorBoundry>
      <ErrorComp />
    </ErrorBoundry>
  );
}
