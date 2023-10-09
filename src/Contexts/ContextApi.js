import React, { useContext, useState } from "react";

const UserContext = React.createContext();

const TestComponent = () => {
  const userContext = useContext(UserContext);
  return (
    <div>
      <h2>{userContext.color}</h2>
      <button
        onClick={() => {
          userContext.setColor("blue");
        }}
      >
        Change Color
      </button>
    </div>
  );
};

export default function UserContextProvider() {
  const [color, setColor] = useState("white");

  return (
    <UserContext.Provider value={{ color, setColor }}>
      <TestComponent />
    </UserContext.Provider>
  );
}
