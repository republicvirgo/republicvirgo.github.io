import React, { Component } from "react";

import { includedAmenities } from "./alldata/AllData";
class IncludedAmenities extends Component {
  render() {
    return (
      <div>
        <h3 className="ui header" align="left">
          <span style={{ fontSize: "1.5em" }}>Included Amenities</span>
          {/*
          <div className="sub header">
            You focus on growing your business, we take care of the rest.
          </div>
          */}
        </h3>

        <div className="ui segment">
          <div className="ui doubling six column grid">
            {includedAmenities.map(ia =>
              ia.feature ? (
                <div className="column p-5" key={ia.id}>
                  <i className="huge icons">
                    <i aria-hidden="true" className={ia.icon + " icon"} />
                    <i aria-hidden="true" className="add corner icon" />
                  </i>
                  <h6 className="ui header">{ia.facilities}</h6>
                </div>
              ) : (
                ""
              )
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default IncludedAmenities;
