import React, { useEffect } from "react";

export default function DetectOutside() {
  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (
        e.target.closest("#inner") ||
        e.target.closest("#navbar") ||
        e.target.closest(".code")
      )
        return;
      alert("Clicked outside the div");
    });
  }, []);

  const copyContent = async (e) => {
    e.stopPropagation();
    const text = document.getElementById("inner");
    try {
      await navigator.clipboard.writeText(text.innerHTML);
      console.log("Content copied to clipboard");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div
          id="inner"
          style={{
            width: "100px",
            height: "100px",
            border: "1px solid blue",
            padding: "10px",
          }}
        >
          This content will be uneffected on clicking outside the div.
        </div>

        <pre className="code">
          {`
          export default function DetectOutside() {
            useEffect(() => {
              document.addEventListener("click", (e) => {
                if (e.target.closest("#inner") || e.target.closest("#navbar")) return;
                alert("Clicked outside the div");
              });
            }, []);

            return (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100vh",
                }}
              >
                <div
                  id="inner"
                  style={{
                    width: "100px",
                    height: "100px",
                    border: "1px solid blue",
                    padding: "10px",
                  }}
                >
                  This content will be uneffected on clicking outside the div.
      </div>`}
        </pre>
        <button
          onClick={copyContent}
          style={{
            position: "absolute",
            top: "110px",
            right: "170px",
            backgroundColor: "lightgray",
            cursor: "pointer",
          }}
        >
          Copy
        </button>
      </div>
    </>
  );
}
