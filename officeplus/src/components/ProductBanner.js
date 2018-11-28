import React, { Component } from "react";
import { Link } from "react-router-dom";

import CapitalizedText from "../utilities/CapitalizedText";

import { productListData } from "./AllData";

class ProductBanner extends Component {
  render() {
    return (
      <div>
        {productListData.length > 0
          ? productListData.map(pld =>
              pld.active ? (
                <div className="ui items" align="left" key={pld.id}>
                  <div className="item">
                    <div
                      className={
                        pld.left
                          ? "ui large fluid order-0 image"
                          : "ui large fluid order-1 image"
                      }
                    >
                      <img
                        alt="officeplus"
                        src={pld.photo}
                        className="right floated"
                      />
                    </div>

                    <div className="content middle aligned left floated">
                      <div className="header">
                        <CapitalizedText text={pld.productCategory} />
                      </div>
                      <div className="description">
                        <div
                          style={{ fontSize: "1.33em" }}
                          dangerouslySetInnerHTML={{
                            __html: pld.productCategoryDescription
                          }}
                        />
                      </div>

                      <div className="extra">
                        <Link
                          to={pld.link.to}
                          className="ui left floated button primary small"
                        >
                          {pld.link.label}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )
            )
          : ""}
      </div>
    );
  }
}

export default ProductBanner;
