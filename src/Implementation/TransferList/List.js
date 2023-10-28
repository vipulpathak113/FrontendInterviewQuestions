import React from "react";
import Item from "./Item";

export default function List({ items,handleCheckedItems }) {
  return (
    <div className="list flex">
      {items.map((item) => (
        <Item key={item} item={item} handleCheckedItems={handleCheckedItems}/>
      ))}
    </div>
  );
}
