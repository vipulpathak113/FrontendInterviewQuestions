import React, { Component } from "react";
import "./accordian.css";
import { accordionData } from "./accordionData";
import AccordianItem from "./AccordianItem";

export default class Accordian extends Component {
  render() {
    return (
      <div>
        <h1>Accordian</h1>
        <div className="accordian">
          {accordionData.map((item) => (
            <AccordianItem title={item.title} content={item.content} />
          ))}
        </div>
      </div>
    );
  }
}
