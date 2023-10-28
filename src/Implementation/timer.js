import React, { useRef } from 'react'

export default function Timer() {

    const hourRef = useRef(null);
    const minRef = useRef(null);
    const secRef = useRef(null);
    let timer;

    const startTimer=()=>{
        timer =  setInterval(()=>{
            setTimer()
        },1000)
    }

    const setTimer=()=>{
        let hours = Number(hourRef.current.value)
        let min = Number(minRef.current.value)
        let sec = Number(secRef.current.value)

        if(hours===0 && min===0 && sec===0){
            resetTimer();
        }
        else if(sec && sec!==0){
            sec--;
            secRef.current.value= sec
        }
        else if(min && min!==0 && sec===0){
            secRef.current.value=59;
            min--;
            minRef.current.value= min
        }
        else if(hours && hours!==0 && min===0 && sec===0){
            minRef.current.value = 59;
            secRef.current.value = 59;
            hours--;
            hourRef.current.value = hours;
        }
    }

    const resetTimer=()=>{
       clearInterval(timer);
       minRef.current.value = 0;
       secRef.current.value = 0;
       hourRef.current.value = 0;
    }

  return (
    <div>
        <h1 style={{textAlign:"center"}}>Countdown Timer</h1>
        <div style={{display:"flex",justifyContent:"center"}}>
        <span style={{marginRight:"10px",textAlign:"center"}}>Hours
            <input ref={hourRef} type="text" defaultValue={0} style={{display:"block"}}/>
        </span>
        <span style={{marginRight:"10px",textAlign:"center"}}>Minutes
            <input ref={minRef} type="text" defaultValue={0} style={{display:"block"}}/>
        </span>
        <span style={{marginRight:"10px",textAlign:"center"}}>Seconds
            <input ref={secRef} type="text" defaultValue={0} style={{display:"block"}}/>
        </span>
        </div>

        <div style={{display:"flex",justifyContent:"center",marginTop:"10px"}}>
            <button style={{marginRight:"20px"}} onClick={startTimer}>Start</button>
            <button style={{marginRight:"20px"}} onClick={resetTimer}>Reset</button>
        </div>

    </div>
  )
}
