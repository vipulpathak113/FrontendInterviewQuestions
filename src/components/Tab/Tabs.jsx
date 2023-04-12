/* eslint-disable react-hooks/rules-of-hooks */
import React, { createContext, useContext } from "react";

const TabContext = createContext();

export default function Tabs({ currentTab, onChange, children }) {
  return (
    <div>
      <h1 style={{
        display: "flex",
        gap: 2,
        justifyContent: "center",
      }}>Tab Component using Compound Pattern</h1>
      <TabContext.Provider value={{ currentTab, onChange }}>
        {children}
      </TabContext.Provider>
    </div>
  );
}

Tabs.HeaderContainer = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 2,
        justifyContent: "center",
      }}
    >
      {children}
    </div>
  );
};

Tabs.Item = ({ label, index }) => {
  let { currentTab, onChange } = useContext(TabContext);
  console.log("index1",index,currentTab)

  return (
    <div
      style={{
        border: "1px solid black",
        marginTop: "50px",
        width: "100px",
        textAlign: "center",
        backgroundColor: index === currentTab ? "springgreen" : "white",
        cursor: "pointer",
      }}
      onClick={() => {
        onChange(index);
      }}
    >
      {label}
    </div>
  );
};

Tabs.ContentContainer = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 2,
        justifyContent: "center",
        margin:"20px"
      }}
    >
      {children}
    </div>
  );
};

Tabs.ContentItem = ({ index, children }) => {
  let { currentTab } = useContext(TabContext);
  return currentTab === index ? <div>{children}</div> : null;
};
