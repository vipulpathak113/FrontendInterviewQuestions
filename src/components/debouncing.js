import React from "react";
import { useState } from "react";

// Debounce function limits the execution of a function call and waits for a certain amount of time before running it again.

export default function Debouncing() {
  const [search, setSearch] = useState([]);

  const handleChange = (e) => {
    let value = e.target.value;

    fetch(`https://demo.dataverse.org/api/search?q=${value}`)
      .then((res) => res.json())
      .then((json) => setSearch(json.data.items));
  };

  const debounce = (func) => {
    let timer;

    return function (...args) {
      let context = this;

      if (timer) clearTimeout(timer);

        timer = setTimeout(() => {
          func.apply(context, args);
        }, 500);
    };
  };

//   Throttling is a technique in which, no matter how many times the user fires the event, 
//   the attached function will be executed only once in a given time interval.

  const throttle = (func) => {
    let throttleTime = false;

    return function (...args) {
      let context = this;

      if(!throttleTime){
          func.apply(context,args);
          throttleTime = true;
          setTimeout(()=>{
            throttleTime = false;
          },500)
      }

    };
  };

  const optimizedDebounce = debounce(handleChange);
  const optimizedThrottle = throttle(handleChange);

  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10%" }}
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
    </div>
  );
}
