import React, { Component } from "react";

import ProductList from "./ProductList";
import IncludedAmenities from "./IncludedAmenities";
import Faq from "./Faq";
import Testimonial from "./Testimonial";

class Service extends Component {
  state = {};
  render() {
    return (
      <div className="ui container">
        <ProductList />
        <div className="ui hidden divider" />
        <div className="ui hidden divider" />
        <div className="ui hidden divider" />

        <IncludedAmenities />
        <div className="ui hidden divider" />
        <div className="ui hidden divider" />
        <div className="ui hidden divider" />

        <Faq />
        <div className="ui hidden divider" />
        <div className="ui hidden divider" />
        <div className="ui hidden divider" />

        <Testimonial />
      </div>
    );
  }
}

export default Service;
