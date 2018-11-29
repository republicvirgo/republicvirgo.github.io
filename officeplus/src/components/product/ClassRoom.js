import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Icon, Table } from "semantic-ui-react";

import ProductList2 from "../ProductList2";

import Faq from "../Faq";

class ClassRoom extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="ui container">
          <h3 className="ui header" align="left">
            <span style={{ fontSize: "1.5em" }}>Class Room</span>
          </h3>

          <Table celled striped>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell colSpan="3" style={{ fontSize: "1.3em" }}>
                  Seminar & Workshop
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell style={{ fontSize: "1.1em" }}>
                  <Icon name="arrow circle right" /> Rp. 2.000.000 /Hari
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell style={{ fontSize: "1.1em" }}>
                  <Icon name="arrow circle right" /> Kuota 50 Orang
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell style={{ fontSize: "1.1em" }}>
                  <Icon name="arrow circle right" />{" "}
                  <Link
                    to="/location"
                    style={{
                      color: "#5A96D0"
                    }}
                  >
                    Tanjung Duren - Jakarta Barat
                  </Link>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>

          <div className="ui hidden divider" />
          <div className="ui hidden divider" />
          <div className="ui hidden divider" />

          <ProductList2 />

          <div className="ui hidden divider" />
          <div className="ui hidden divider" />
          <div className="ui hidden divider" />

          <Faq />
        </div>
      </div>
    );
  }
}

export default ClassRoom;
