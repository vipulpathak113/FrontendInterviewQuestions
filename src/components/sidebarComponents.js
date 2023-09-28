import React from "react";
import { SidebarPaths } from "./sidebarRoute";
import { Link } from "react-router-dom";

function SidebarComponents() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {SidebarPaths.map((item, id) => (
        <Link
          key={id}
          to={item.path}
          style={{ border: "1px solid black", margin: "10px", padding: "2px" }}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
}

export default SidebarComponents;
