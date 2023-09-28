import "./ToggleSwitch.css";
import { useState } from "react";

export default function ToggleSwitch() {
  const [toggle, setToggle] = useState(false);

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <input
        type="checkbox"
        className="toggle"
        onChange={(e) => setToggle(e.target.checked)}
        checked={toggle}
      />
      <div>{toggle ? "ON" : "OFF"}</div>
    </div>
  );
}
