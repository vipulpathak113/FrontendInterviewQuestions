import React from "react";

function startProgress(sec) {
  let bar = document.querySelector(".bar");

  //1st approach
  //   let curr = 0;
  //  const interval = setInterval(()=>{

  //     bar.style.width=curr+'%';
  //     curr++;

  //     if(curr>100){
  //       clearInterval(interval)
  //     }

  //   },(sec*1000)/100)

  //  2andapproach
  bar.style.transition = `${sec}s linear width`;
  bar.style.width = "100%";
}

function progressBar() {
  return (
    <div>
      <div className="bar-container">
        <div className="bar"></div>
      </div>
      <button
        onClick={(e) => {
          startProgress(2);
        }}
      >
        start
      </button>
    </div>
  );
}

export default progressBar;
