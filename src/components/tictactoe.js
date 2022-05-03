import React from 'react';
import { useState } from 'react';

function Tictactoe() {

    const divStyle = {
        border:"1px solid black",
        width:"150px",
        height:"150px",
        float:"left"
    }

    var [currentPlayer,setCurrentPlayer] = useState('0');
    var [boxCount,setBoxCount] = useState(0);
    var [gameOver,setGameOver] = useState(false);

    const fillBox=(e)=>{
       
        let player = currentPlayer
        let element = document.getElementById(e.target.id);
        if(element.innerText=="" && !gameOver){
            if(currentPlayer=="X"){
                element.innerText = "0"
                player = "0"
            }
            else{
            element.innerText = "X"
            player = "X"
            }
            element.style.fontSize="100px"
            element.style.textAlign="center"
            setCurrentPlayer(player)
            setBoxCount(boxCount=>boxCount+1)

            if(decideWinner()){
                alert(player+" Won!!")
                setGameOver(true)
                setCurrentPlayer("0")
            }
            else{
                if(boxCount==8){
                setGameOver(true)
                setCurrentPlayer("0")
                alert("Math Drawn")
                reset();
                }
            }
        }
      
    }
    
    const decideWinner=()=>{
    
        if(checkEquality('div1','div2','div3')||checkEquality('div1','div4','div7')||checkEquality('div2','div5','div8')
        || checkEquality('div3','div6','div9')||checkEquality('div4','div5','div6')||checkEquality('div7','div8','div9')
        || checkEquality('div1','div4','div7')||checkEquality('div1','div5','div9')||checkEquality('div3','div5','div7')
         ){
             return true
         }
    }

    const decodeElement=(div)=>{
       return document.getElementById(div);
    }

    const reset=()=>{
        for(var i=1;i<10;i++){
            document.getElementById(`div${i}`).innerText="";
            document.getElementById(`div${i}`).style.background="white"
        }
        reset();
     
    }


    const checkEquality=(div1,div2,div3)=>{
        if(decodeElement(div1).innerText!="" && decodeElement(div1).innerText==decodeElement(div2).innerText && decodeElement(div2).innerText==decodeElement(div3).innerText){
            decodeElement(div1).style.background="gray";
            decodeElement(div2).style.background="gray";
            decodeElement(div3).style.background="gray";
            return true
        }
    }

    return (
        <div>
            <div style={{marginLeft:"360px",marginTop:"20px"}}>
            <h2>Tic Tac Toe Game</h2>
            <div style={{fontWeight:"bold"}}>Player {currentPlayer=="X"?"O":"X"} turn</div>
            </div>
            <div style={{display:"flex",justifyContent:"center"}}> <button onClick={reset}>Reset</button></div>
         <div onClick={fillBox} style={{marginLeft:"200px",marginTop:"50px"}}>
          <div id="div1" style={divStyle}></div>
          <div id="div2" style={divStyle}></div>
          <div id="div3"style={divStyle}></div>
          <div id="div4"style={divStyle}></div>
          <div id="div5"style={divStyle}></div>
          <div id="div6"style={divStyle}></div>
          <div id="div7"style={divStyle}></div>
          <div id="div8"style={divStyle}></div>
          <div id="div9"style={divStyle}></div>
          </div>
        </div>
    );
}

export default Tictactoe;