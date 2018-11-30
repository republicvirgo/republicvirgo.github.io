import React, { Component } from "react";

import ProductBanner from "./ProductBanner";
import ProfileBanner from "./ProfileBanner";
import Testimonial from "./Testimonial";

import { componentSetting } from "./alldata/AllData";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="ui container">
        <ProfileBanner />

        <div>
          <div className="ui hidden divider mt-5" />
          <ProductBanner />
        </div>

        {componentSetting.map(cs =>
          cs.cTestimonial ? (
            <div>
              <div className="ui hidden divider mt-5" />
              <Testimonial />
            </div>
          ) : (
            ""
          )
        )}
      </div>
    );
  }
}

export default Home;
