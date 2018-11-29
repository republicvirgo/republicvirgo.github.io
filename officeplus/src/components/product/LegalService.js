import React, { Component } from "react";

import { Icon, Table } from "semantic-ui-react";

import ProductList2 from "../ProductList2";

import Faq from "../Faq";

class LegalService extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="ui container">
          <h3 className="ui header" align="left">
            <span style={{ fontSize: "1.5em" }}>Legal Service</span>
          </h3>

          <Table celled striped>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell colSpan="3" style={{ fontSize: "1.3em" }}>
                  Pricing
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell style={{ fontSize: "1.1em" }}>
                  <Icon name="arrow circle right" /> SKDP
                </Table.Cell>
                <Table.Cell style={{ fontSize: "1.1em" }}>
                  Rp. 500.000
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell style={{ fontSize: "1.1em" }}>
                  <Icon name="arrow circle right" /> PEMBUATAN PT (AKTA DAN SK)
                </Table.Cell>
                <Table.Cell style={{ fontSize: "1.1em" }}>
                  Rp. 6.000.000
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell style={{ fontSize: "1.1em" }}>
                  <Icon name="arrow circle right" /> PEMBUATAN CV (AKTA DAN SK )
                </Table.Cell>
                <Table.Cell style={{ fontSize: "1.1em" }}>
                  Rp. 3.000.000
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell style={{ fontSize: "1.1em" }}>
                  <Icon name="arrow circle right" /> PERUBAHAN AKTA PT
                </Table.Cell>
                <Table.Cell style={{ fontSize: "1.1em" }}>
                  Rp. 5.000.000
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell style={{ fontSize: "1.1em" }}>
                  <Icon name="arrow circle right" /> PERUBAHAN AKTA CV
                </Table.Cell>
                <Table.Cell style={{ fontSize: "1.1em" }}>
                  Rp. 2.000.000
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell style={{ fontSize: "1.1em" }}>
                  <Icon name="arrow circle right" /> NIB
                </Table.Cell>
                <Table.Cell style={{ fontSize: "1.1em" }}>
                  Rp. 3.000.000
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell style={{ fontSize: "1.1em" }}>
                  <Icon name="arrow circle right" /> SIUP
                </Table.Cell>
                <Table.Cell style={{ fontSize: "1.1em" }}>
                  Rp. 1.500.000
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell style={{ fontSize: "1.1em" }}>
                  <Icon name="arrow circle right" /> TDP
                </Table.Cell>
                <Table.Cell style={{ fontSize: "1.1em" }}>
                  Rp. 1.500.000
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell style={{ fontSize: "1.1em" }}>
                  <Icon name="arrow circle right" /> PAKET SIUP DAN TDP
                </Table.Cell>
                <Table.Cell style={{ fontSize: "1.1em" }}>
                  Rp. 3.000.000
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell style={{ fontSize: "1.1em" }}>
                  <Icon name="arrow circle right" /> PAKET SKDP, SIUP DAN TDP
                </Table.Cell>
                <Table.Cell style={{ fontSize: "1.1em" }}>
                  Rp. 3.500.000
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell style={{ fontSize: "1.1em" }}>
                  <Icon name="arrow circle right" /> PAKET NPWP, SKDP, SIUP, TDP
                </Table.Cell>
                <Table.Cell style={{ fontSize: "1.1em" }}>
                  Rp. 3.900.000
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell style={{ fontSize: "1.1em" }}>
                  <Icon name="arrow circle right" /> PEMBUATAN PT LENGKAP (
                  LOKAL)
                </Table.Cell>
                <Table.Cell style={{ fontSize: "1.1em" }}>
                  Rp. 12.000.000
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell style={{ fontSize: "1.1em" }}>
                  <Icon name="arrow circle right" /> PEMBUATAN PT LENGKAP ( PMA
                  )
                </Table.Cell>
                <Table.Cell style={{ fontSize: "1.1em" }}>
                  Rp. 18.000.000
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell style={{ fontSize: "1.1em" }}>
                  <Icon name="arrow circle right" /> PEMBUATAN PT BIDANG KHUSUS
                </Table.Cell>
                <Table.Cell style={{ fontSize: "1.1em" }}>
                  Rp. 18.000.000
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell style={{ fontSize: "1.1em" }}>
                  <Icon name="arrow circle right" /> PEMBUATAN CV LENGKAP
                </Table.Cell>
                <Table.Cell style={{ fontSize: "1.1em" }}>
                  Rp. 6.500.000
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

export default LegalService;
