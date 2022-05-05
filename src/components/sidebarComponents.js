import React from 'react';
import { Link } from "react-router-dom";

function SidebarComponents(props) {
    return (
        <div style={{marginTop:"-7px",display:"flex",flexDirection:"column"}}>
        <Link to={"/progressbar"} style={{border:"1px solid black",margin:"10px",padding:"2px"}}> Progress Bar</Link>
        <Link to={"/debouncing"} style={{border:"1px solid black",margin:"10px",padding:"2px"}}> Debouncing and throtlling</Link>
        <Link to={"/infiniteScroll"} style={{border:"1px solid black",margin:"10px",padding:"2px"}}> Infinite Scroll</Link>
        <Link to={"/tictactoe"} style={{border:"1px solid black",margin:"10px",padding:"2px"}}> Tic Tac Toe </Link>
        <Link to={"/sodukuSolver"} style={{border:"1px solid black",margin:"10px",padding:"2px"}}> Soduku Solver </Link>
        </div>
    );
}

export default SidebarComponents;