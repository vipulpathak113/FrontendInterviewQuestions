import { useState } from "react";

export default function SodukuSolver() {

    var [sodukuBoard,setSodukuBoard] = useState([
        [ 8, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 3, 6, 0, 0, 0, 0, 0 ],
        [ 0, 7, 0, 0, 9, 0, 2, 0, 0 ],
        [ 0, 5, 0, 0, 0, 7, 0, 0, 0 ],
        [ 0, 0, 0, 0, 4, 5, 7, 0, 0 ],
        [ 0, 0, 0, 1, 0, 0, 0, 3, 0 ],
        [ 0, 0, 1, 0, 0, 0, 0, 6, 8 ],
        [ 0, 0, 8, 5, 0, 0, 0, 1, 0 ],
        [ 0, 9, 0, 0, 0, 0, 4, 0, 0 ] 
    ])

    const handleValue=(e,xindex,yindex)=>{

        if(e.target.value>0 && e.target.value<=9 ){
        let failed = false;

          for(var i=0;i<=8;i++){
              if(sodukuBoard[xindex][i]==e.target.value){
                failed = true;
                console.log(e.target.id)
                document.getElementById(e.target.id).style.background="red"
                break;
              }
              else{
                document.getElementById(e.target.id).style.background="white"
              }
          }

          if(!failed){
          for(var i=0;i<=8;i++){
            if(sodukuBoard[i][yindex]==e.target.value){
              failed = true;
              console.log(e.target.id)
              document.getElementById(e.target.id).style.background="red"
              break;
            }
            else{
                document.getElementById(e.target.id).style.background="white"
            }
        }
       }

       if(!failed){
        let cornerX = Math.floor(xindex/3)*3;
        let cornerY = Math.floor(yindex/3)*3;

        for(var k=0;k<3;k++){
            if(failed) break;

            for(var l=0;l<3;l++){
                if(sodukuBoard[cornerX+k][cornerY+l]==e.target.value){
                    failed = true;
                    document.getElementById(e.target.id).style.background="red"
                    break;
                  }
                  else{
                      document.getElementById(e.target.id).style.background="white"
                  }
            }
        }
       }
    }
    else{
        e.target.value = 0 
        document.getElementById(e.target.id).style.background="white"
    }
    }

    const handleReset=()=>{
        setSodukuBoard([
            [ 8, 0, 0, 0, 0, 0, 0, 0, 0 ],
            [ 0, 0, 3, 6, 0, 0, 0, 0, 0 ],
            [ 0, 7, 0, 0, 9, 0, 2, 0, 0 ],
            [ 0, 5, 0, 0, 0, 7, 0, 0, 0 ],
            [ 0, 0, 0, 0, 4, 5, 7, 0, 0 ],
            [ 0, 0, 0, 1, 0, 0, 0, 3, 0 ],
            [ 0, 0, 1, 0, 0, 0, 0, 6, 8 ],
            [ 0, 0, 8, 5, 0, 0, 0, 1, 0 ],
            [ 0, 9, 0, 0, 0, 0, 4, 0, 0 ] 
        ])

    }

    return (
        <div>
            <h2 style={{display:"flex",justifyContent:"center"}}>Soduku Solver</h2>
        <table border="1" width="100%">
         {sodukuBoard.map((xaxis,xindex)=>{
             return(
                 <tr key={xindex+new Date().getTime()}>
                {sodukuBoard.map((yaxis,yindex)=>{
                    return (<td id={"sudo"+xindex+yindex} key={yindex+new Date().getTime()}>
                    <input onChange={(e)=>{handleValue(e,xindex,yindex)}} id={"sudo"+xindex+yindex}  type={"text"} disabled={sodukuBoard[xindex][yindex]!==0} defaultValue={sodukuBoard[xindex][yindex]}/>
                    </td>)
                })}
                 </tr>
             )
             })  
         }
        </table>
        <div style={{display:"flex",justifyContent:"center"}} >
        <button onClick={handleReset}>Reset</button>
        </div>
        
        </div>
    )
}
