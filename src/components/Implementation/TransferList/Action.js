import React from "react";

export default function Action({ moveRight, moveLeft }) {
  return (
    <div className="action flex">
      <button onClick={moveRight}>&gt;</button>
      <button onClick={moveLeft}>&lt;</button>
    </div>
  );
}
