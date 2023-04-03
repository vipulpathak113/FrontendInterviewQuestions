import React from "react";

function WrappedHOC(Component) {
  return function WrappedComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return <p>Hold on, fetching data might take some time.</p>;
  };
}

export default WrappedHOC;
