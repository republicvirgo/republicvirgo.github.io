import React, { Component } from "react";
import { Link } from "react-router-dom";

import CapitalizedText from "../utilities/CapitalizedText";

import { productListData } from "./alldata/AllData";

class ProductList extends Component {
  render() {
    return (
      <div>
        <h3 className="ui header" align="left" style={{ fontSize: "1.5em" }}>
          Membership Packages
        </h3>

        {/*
        <p align="left" style={{ fontSize: "1.3em" }}>
          We offer a range of membership options with something from the menu
          that’s sure to suit your requirements. Whether you’re a fast-growing
          company in need of private office suite, or a dynamic entrepreneur on
          the lookout for the perfect hot-desking environment, our plans cater
          to your unique specifications – and they’re flexible enough to
          guarantee you find the membership that suits you best.
        </p>
        */}

        <p align="left" style={{ fontSize: "1.3em" }}>
          Kami menawarkan berbagai opsi Membership Packages yang pasti sesuai
          dengan kebutuhan Anda. Baik Anda adalah perusahaan yang sedang
          berkembang pesat yang membutuhkan paket Private Office, atau
          wirausahawan yang dinamis dalam mencari lingkungan yang sempurna,
          rencana kami memenuhi spesifikasi unik Anda - dan fleksibel untuk
          menjamin Anda menemukan Membership Packages yang paling sesuai untuk
          Anda.
        </p>

        <div className="ui hidden divider" />

        <div className="ui centered raised four stackable cards">
          {productListData.map(pld => (
            <div className="ui card" align="center" key={pld.id}>
              <Link to={pld.link.to}>
                <img src={pld.photo} className="ui image" alt="product" />
              </Link>

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
              {/*
              <div className="extra content">
                <Link
                  to={pld.link.to}
                  className="ui left floated button linkedin button fluid"
                >
                  Lihat Paket
                </Link>
              </div>
              */}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ProductList;
