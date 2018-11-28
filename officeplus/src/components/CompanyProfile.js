import React, { Component } from "react";
//import { Link } from "react-router-dom";

//import CapitalizedText from "../utilities/CapitalizedText";

import { profileBannerData } from "./AllData";

class ProductList extends Component {
  render() {
    return (
      <div>
        <div>
          <img
            src="https://react.semantic-ui.com/images/wireframe/image.png"
            class="ui fluid image"
            alt="Company Profile"
          />
        </div>
        {profileBannerData.map(pbd => (
          <div className="ui items" align="left" key={pbd.id}>
            <div className="item">
              <div className="content middle aligned">
                <div className="header">{pbd.header}</div>
                <div className="meta">{pbd.meta}</div>

                {pbd.description.map(pbdd => (
                  <div className="description" key={pbdd.key}>
                    <p>{pbdd.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ProductList;
