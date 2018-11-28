import React, { Component } from "react";
import { Link } from "react-router-dom";

import { profileBannerData } from "./AllData";

class ProfileBanner extends Component {
  render() {
    return (
      <div>
        {profileBannerData.map(pbd => (
          <div className="ui items" align="left" key={pbd.id}>
            <div className="item">
              <div className="ui large middle aligned fluid image">
                <img alt="officeplus" src={pbd.image} />
              </div>

              <div className="content middle aligned">
                <div className="header" style={{ fontSize: "1.5em" }}>
                  {pbd.header}
                </div>
                <div className="meta">{pbd.meta}</div>

                {pbd.description.map(pbdd => (
                  <div className="description" key={pbdd.key}>
                    <p style={{ fontSize: "1.3em" }}>{pbdd.text}</p>
                  </div>
                ))}

                <div className="extra">
                  <Link
                    to="/profile"
                    className="ui left floated button primary small"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ProfileBanner;
