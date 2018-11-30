import React, { Component } from "react";

import { testimonialData } from "./alldata/AllData";

class Testimonial extends Component {
  render() {
    return (
      <div>
        <h3 className="ui header" align="center" style={{ fontSize: "1.5em" }}>
          Enterprise Members
          {/*<div className="sub header">Our Members Tell It Like It Is</div>*/}
        </h3>

        <div className="ui centered raised four stackable cards">
          {testimonialData.map(td => (
            <div className="ui card" align="left" key={td.id}>
              <img src={td.img} className="ui image" alt="testimonial" />
              <div className="content">
                <div className="header" align="center">
                  {td.name}
                </div>
                <div className="meta">{td.title}</div>
                <div className="description">{td.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Testimonial;
