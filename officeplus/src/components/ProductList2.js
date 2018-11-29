import React, { Component } from "react";
import { Link } from "react-router-dom";

import CapitalizedText from "../utilities/CapitalizedText";

import { productListData } from "./alldata/AllData";

class ProductList2 extends Component {
  render() {
    return (
      <div>
        <h3 className="ui header" align="left" style={{ fontSize: "1.5em" }}>
          Plans (Package)
        </h3>

        <div className="ui hidden divider" />

        <div className="ui centered raised four stackable cards">
          {productListData.map(pld => (
            <div className="ui card" align="center" key={pld.id}>
              <img src={pld.photo} className="ui image" alt="product" />
              <div className="content">
                <div className="header">
                  <CapitalizedText text={pld.productCategory} />
                </div>
                {/*<div className="description">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: pld.productCategoryDescription
                    }}
                  />
                </div>*/}
              </div>
              <div className="extra content">
                <Link
                  to={pld.link.to}
                  className="ui left floated button linkedin button fluid"
                >
                  View Package
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ProductList2;
