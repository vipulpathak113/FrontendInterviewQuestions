import React from "react";

export default function Item({ item, handleCheckedItems }) {
  return (
    <label className="item">
      {" "}
      <input type="checkbox" onChange={() => handleCheckedItems(item)} />
      {item}
    </label>
  );
}
