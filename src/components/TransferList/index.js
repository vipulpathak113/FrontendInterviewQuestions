import React, { useState } from "react";
import List from "./List";
import Action from "./Action";
import "./transfer.css";
import { data } from "./data";
import { intersection, not } from "./utils";

export default function TransferList() {
  const [leftItems, setLeftItems] = useState(data);
  const [rightItems, setRightItems] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);
  const leftcheckedItems = intersection(leftItems, checkedItems);
  const rightcheckedItems = intersection(rightItems, checkedItems);

  const handleCheckedItems = (item) => {
    const newchecked = [...checkedItems];
    const index = newchecked.indexOf(item);
    if (index === -1) {
      newchecked.push(item);
    } else {
      newchecked.splice(index, 1);
    }
    setCheckedItems(newchecked);
  };

  const moveRight = () => {
    setRightItems([...rightItems, ...leftcheckedItems]);
    setLeftItems(not(leftItems, leftcheckedItems));
    setCheckedItems(not(checkedItems, leftcheckedItems));
  };
  const moveLeft = () => {
    setLeftItems([...leftItems, ...rightcheckedItems]);
    setRightItems(not(rightItems, rightcheckedItems));
    setCheckedItems(not(checkedItems, rightcheckedItems));
  };

  return (
    <div className="container flex">
      <List items={leftItems} handleCheckedItems={handleCheckedItems} />
      <Action moveRight={moveRight} moveLeft={moveLeft} />
      <List items={rightItems} handleCheckedItems={handleCheckedItems} />
    </div>
  );
}
