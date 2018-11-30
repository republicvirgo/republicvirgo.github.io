import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Icon, Table, Grid } from "semantic-ui-react";

import ProductList2 from "../ProductList2";

import Faq from "../Faq";

import { componentSetting } from "../alldata/AllData";

class PrivateOffice extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="ui container">
          <h3 className="ui header" align="left">
            <span style={{ fontSize: "1.5em" }}>Private Office</span>
          </h3>

          <Grid stackable columns={2}>
            <Grid.Column>
              <Table celled striped>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell colSpan="3" style={{ fontSize: "1.3em" }}>
                      Pricing:
                    </Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  <Table.Row>
                    <Table.Cell style={{ fontSize: "1.1em" }}>
                      <Icon name="arrow circle right" /> Room 1: Rp. 10.800.000
                      /Bulan
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell style={{ fontSize: "1.1em" }}>
                      <Icon name="arrow circle right" /> Room 2: Rp. 5.800.000
                      /Bulan
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell style={{ fontSize: "1.1em" }}>
                      <Icon name="arrow circle right" /> Room 3: Rp. 8.800.000
                      /Bulan
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>

              <Table celled striped>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell colSpan="3" style={{ fontSize: "1.3em" }}>
                      Included Amenities:
                    </Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  <Table.Row>
                    <Table.Cell style={{ fontSize: "1.1em" }}>
                      <Icon name="arrow circle right" /> Dedicated
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell style={{ fontSize: "1.1em" }}>
                      <Icon name="arrow circle right" /> Dapat Fasiltas Akses
                      Lantai 2
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell style={{ fontSize: "1.1em" }}>
                      <Icon name="arrow circle right" /> Full Furnish
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell style={{ fontSize: "1.1em" }}>
                      <Icon name="arrow circle right" /> Free Mineral Water
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell style={{ fontSize: "1.1em" }}>
                      <Icon name="arrow circle right" /> Free Wifi
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell style={{ fontSize: "1.1em" }}>
                      <Icon name="arrow circle right" /> Free Listrik
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell style={{ fontSize: "1.1em" }}>
                      <Icon name="arrow circle right" /> Office Boy Standby
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>

              <Table celled striped>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell colSpan="3" style={{ fontSize: "1.3em" }}>
                      Office Hours:
                    </Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  <Table.Row>
                    <Table.Cell style={{ fontSize: "1.1em" }}>
                      <Icon name="arrow circle right" /> Moday ~ Sunday (08.00 ~
                      22.00)
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>

                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell colSpan="3" style={{ fontSize: "1.3em" }}>
                      Location:
                    </Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  <Table.Row>
                    <Table.Cell style={{ fontSize: "1.1em" }}>
                      <Icon name="arrow circle right" />{" "}
                      <Link
                        to="/location"
                        style={{
                          color: "#5A96D0"
                        }}
                      >
                        Central Park - Jakarta Barat
                      </Link>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Grid.Column>

            <Grid.Column>
              <Table celled striped>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell colSpan="3" style={{ fontSize: "1.3em" }}>
                      Pricing:
                    </Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  <Table.Row>
                    <Table.Cell style={{ fontSize: "1.1em" }}>
                      <Icon name="arrow circle right" /> Rp. 10.000.000 /Bulan
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>

              <Table celled striped>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell colSpan="3" style={{ fontSize: "1.3em" }}>
                      Included Amenities:
                    </Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  <Table.Row>
                    <Table.Cell style={{ fontSize: "1.1em" }}>
                      <Icon name="arrow circle right" /> Dedicated
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell style={{ fontSize: "1.1em" }}>
                      <Icon name="arrow circle right" /> Full Furnish
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell style={{ fontSize: "1.1em" }}>
                      <Icon name="arrow circle right" /> Free Mineral Water
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell style={{ fontSize: "1.1em" }}>
                      <Icon name="arrow circle right" /> Free Wifi
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell style={{ fontSize: "1.1em" }}>
                      <Icon name="arrow circle right" /> Free Listrik
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell style={{ fontSize: "1.1em" }}>
                      <Icon name="arrow circle right" /> Office Boy Standby
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>

              <Table celled striped>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell colSpan="3" style={{ fontSize: "1.3em" }}>
                      Office Hours:
                    </Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  <Table.Row>
                    <Table.Cell style={{ fontSize: "1.1em" }}>
                      <Icon name="arrow circle right" /> Moday ~ Friday (08.00 ~
                      17.00)
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>

                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell colSpan="3" style={{ fontSize: "1.3em" }}>
                      Location:
                    </Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  <Table.Row>
                    <Table.Cell style={{ fontSize: "1.1em" }}>
                      <Icon name="arrow circle right" />{" "}
                      <Link
                        to="/location"
                        style={{
                          color: "#5A96D0"
                        }}
                      >
                        Epicentrum Walk (Epiwalk) - Jakarta Selatan
                      </Link>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Grid.Column>
          </Grid>
        </div>

        <div className="ui container">
          {componentSetting.map(cs =>
            cs.cProductList2 ? (
              <div>
                <div className="ui hidden divider mt-5" />
                <ProductList2 />
              </div>
            ) : (
              ""
            )
          )}

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
        </div>
      </div>
    );
  }
}

export default PrivateOffice;
