import React, { createRef } from "react";

export default function HighlightText() {
  const highlightRef = createRef();

  const handleChange = (e) => {
    highlightRef.current.innerHTML = highlightRef.current.textContent.replace(
      new RegExp(e.target.value, "g"),
      (word) => {
        return `<span style="background-color:yellow">${word}</span>`;
      }
    );
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
        style={{
          opacity: 0,
          height: "100vh",
          width: "100vw",
          position: "absolute",
          zIndex: 10000,
        }}
        onKeyUp={handleChange}
      />
      <div ref={highlightRef} id="test">
        I have Some text This is an anchor text.
        <a href="#">which has link. </a>
        This is a sibling ThemeContext. This is a random text.
      </div>
    </div>
  );
}
