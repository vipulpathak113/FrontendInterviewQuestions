import React, { createRef, useEffect } from "react";
import { useState } from "react";

export default function HighlightText() {
  const [value, setValue] = useState("");
  const highlightRef = createRef();

  const handleChange = (e) => {
    console.log(highlightRef.current.innerHTML);
    highlightRef.current.innerHTML = highlightRef.current.innerHTML.replace(
      new RegExp(e.target.value, "g"),
      (word) => {
        return `<span style="background-color:yellow">${word}</span>`;
      }
    );
    setValue(e.target.value);
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <input
        type="text"
        value={value}
        style={{
          opacity: 0,
          height: "100vh",
          width: "100vw",
          position: "absolute",
          zIndex: 10000,
        }}
        onInput={handleChange}
      />
      <div ref={highlightRef}>
        I have Some text
        <p>
          This is an anchor text <a href="#">which has link</a>
        </p>
        <p>This is a sibling ThemeContext</p>
        This is a random text
      </div>
    </div>
  );
}
