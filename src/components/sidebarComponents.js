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
          className="border-yellow-600 border m-1 p-1 text-blue-600 underline"
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
}

export default SidebarComponents;
