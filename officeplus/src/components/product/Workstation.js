import React, { Component } from "react";

import Faq from "../Faq";

class Workstation extends Component {
  state = {};
  render() {
    return (
      <div className="ui container">
        <div>Workstation</div>

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

export default Workstation;
