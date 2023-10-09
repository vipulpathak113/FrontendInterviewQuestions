import React from "react";
import { useState } from "react";
import { customDebounce } from "../Pollyfills/debouncePollyfill";
import { customThrottle } from "../Pollyfills/throtllingPollyfill";

export default function Debouncing() {
  const [search, setSearch] = useState([]);

  const handleChange = (e) => {
    let value = e.target.value;

    fetch(`https://demo.dataverse.org/api/search?q=${value}`)
      .then((res) => res.json())
      .then((json) => setSearch(json.data.items));
  };

  const optimizedDebounce = customDebounce(handleChange);
  const optimizedThrottle = customThrottle(handleChange);

  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <input
          style={{ border: "1px solid black" }}
          onChange={optimizedDebounce}
          type="text"
          placeholder="Enter debounce text here"
        />

        <input
          style={{ border: "1px solid black" }}
          onChange={optimizedThrottle}
          type="text"
          placeholder="Enter throttle text here"
        />
      </div>
      {search && search.length > 0 ? (
        <div style={{ width: "100%", borderRadius: "5px" }}>
          {search.map((item, index) => {
            return (
              <div
                key={index}
                style={{
                  padding: "10px 5px",
                  borderBottom: "1px solid black",
                  color: "blue",
                }}
              >
                <span>{item.name}</span>
              </div>
            );
          })}
        </div>
      ) : null}
    </>
  );
}
