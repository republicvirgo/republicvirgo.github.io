import React, { Component } from "react";

import ProductBanner from "./ProductBanner";
import ProfileBanner from "./ProfileBanner";
import Testimonial from "./Testimonial";
//<div class="ui divider" />
class Home extends Component {
  state = {};
  render() {
    return (
      <div className="ui container">
        <ProfileBanner />
        <div className="ui hidden divider" />
        <div className="ui hidden divider" />
        <div className="ui hidden divider" />

        <ProductBanner />
        <div className="ui hidden divider" />
        <div className="ui hidden divider" />
        <div className="ui hidden divider" />

        <Testimonial />
      </div>
    );
  }
}

export default Home;
