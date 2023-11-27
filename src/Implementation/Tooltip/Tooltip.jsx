import React from "react";
import "./Tooltip.css";

export default function Tooltip() {
  return (
    <div className="container">
      <div className="tooltip" data-tooltip="This is a tooltip content">
        ?
      </div>
    </div>
  );
}
