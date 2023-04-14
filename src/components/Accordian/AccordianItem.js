import { useState } from "react";

export default function AccordianItem({ title, content }) {
  const [isActive, setIsActive] = useState(false);
  return (
      <div className="accordian-item">
        <div className="accordian-title" onClick={() => setIsActive(!isActive)}>
          <div>{title}</div>
          <div>{isActive ? "-" : "+"}</div>
        </div>
      {isActive && <div className="accordian-content">{content}</div>}
    </div>
  );
}
