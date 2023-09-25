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
        <Link to={"/hoc"} style={{border:"1px solid black",margin:"10px",padding:"2px"}}> Higher Order Components </Link>
        <Link to={"/playground"} style={{border:"1px solid black",margin:"10px",padding:"2px"}}> Playground </Link>
        <Link to={"/timer"} style={{border:"1px solid black",margin:"10px",padding:"2px"}}> Timer </Link>
        <Link to={"/errorBoundary"} style={{border:"1px solid black",margin:"10px",padding:"2px"}}> Error Boundary </Link>
        <Link to={"/contextApi"} style={{border:"1px solid black",margin:"10px",padding:"2px"}}> ContextApi </Link>
        <Link to={"/customHookUse"} style={{border:"1px solid black",margin:"10px",padding:"2px"}}> Custom Hook Usage </Link>
        <Link to={"/pagination"} style={{border:"1px solid black",margin:"10px",padding:"2px"}}> Pagination </Link>
        <Link to={"/fileStructure"} style={{border:"1px solid black",margin:"10px",padding:"2px"}}> File Structure </Link>
        <Link to={"/tabs"} style={{border:"1px solid black",margin:"10px",padding:"2px"}}> Tabs </Link>
        <Link to={"/accordian"} style={{border:"1px solid black",margin:"10px",padding:"2px"}}> Accordian </Link>
        <Link to={"/slider"} style={{border:"1px solid black",margin:"10px",padding:"2px"}}> Slider </Link>
        <Link to={"/modal"} style={{border:"1px solid black",margin:"10px",padding:"2px"}}> Modal </Link>
        <Link to={"/solid"} style={{border:"1px solid black",margin:"10px",padding:"2px"}}> Solid Principles </Link>
        <Link to={"/star"} style={{border:"1px solid black",margin:"10px",padding:"2px"}}> Star Widget </Link>
        </div>
    );
}

export default SidebarComponents;