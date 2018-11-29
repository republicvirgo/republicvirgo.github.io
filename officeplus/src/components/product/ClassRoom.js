import React, { Component } from "react";

import Faq from "../Faq";

class ClassRoom extends Component {
  state = {};
  render() {
    return (
      <div className="ui container">
        <div>
          <h3 className="ui header" align="left">
            <span style={{ fontSize: "1.5em" }}>Class Room</span>
            <div className="sub header">
              Our team's always here to talk it out, just reach out by phone or
              email.
            </div>
          </h3>
        </div>

        <div className="ui hidden divider" />
        <div className="ui hidden divider" />
        <div className="ui hidden divider" />

        <Faq />
        <div className="ui hidden divider" />
        <div className="ui hidden divider" />
        <div className="ui hidden divider" />
      </div>
    );
  }
}

export default ClassRoom;
