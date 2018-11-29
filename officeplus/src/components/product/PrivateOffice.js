import React, { Component } from "react";

import Faq from "../Faq";

class PrivateOffice extends Component {
  state = {};
  render() {
    return (
      <div className="ui container">
        <div>PrivateOffice</div>

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

export default PrivateOffice;
