import React, { Component } from "react";

import ProductList from "./ProductList";
import IncludedAmenities from "./IncludedAmenities";
import Faq from "./Faq";
import Testimonial from "./Testimonial";

import { componentSetting } from "./alldata/AllData";

class Service extends Component {
  state = {};
  render() {
    return (
      <div className="ui container">
        <ProductList />

        <div>
          <div className="ui hidden divider mt-5" />
          <IncludedAmenities />
        </div>

        {componentSetting.map(cs =>
          cs.cFaq ? (
            <div>
              <div className="ui hidden divider mt-5" />
              <Faq />
            </div>
          ) : (
            ""
          )
        )}

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

export default Service;
