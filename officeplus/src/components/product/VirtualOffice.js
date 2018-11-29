import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Icon, Table, Grid } from "semantic-ui-react";

import ProductList2 from "../ProductList2";

import Faq from "../Faq";

class VirtualOffice extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="ui container">
          <h3 className="ui header" align="left">
            <span style={{ fontSize: "1.5em" }}>Virtual Office</span>
          </h3>

          <Grid stackable columns={3}>
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
                      <Icon name="arrow circle right" /> Silver: Rp. 400.000
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
                      <Icon name="arrow circle right" /> Alamat Kantor
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell style={{ fontSize: "1.1em" }}>
                      <Icon name="arrow circle right" /> Handle Surat
                      Masuk/Paket
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell style={{ fontSize: "1.1em" }}>
                      <Icon name="arrow circle right" /> Telp Masuk (di Keep)
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell style={{ fontSize: "1.1em" }}>
                      <Icon name="arrow circle right" /> Free Pengurusan SKDP
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>

              <Table celled striped>
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
                      <Icon name="arrow circle right" /> Gold: Rp. 700.000
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
                      <Icon name="arrow circle right" /> Alamat Kantor
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell style={{ fontSize: "1.1em" }}>
                      <Icon name="arrow circle right" /> Handle Surat
                      Masuk/Paket
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell style={{ fontSize: "1.1em" }}>
                      <Icon name="arrow circle right" /> Dapat 1 Dedicated Phone
                      number (021) khusus perusahaan anda dan dapat langsung
                      tersambung ke handphone anda
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell style={{ fontSize: "1.1em" }}>
                      <Icon name="arrow circle right" /> Free greeting (umum)
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell style={{ fontSize: "1.1em" }}>
                      <Icon name="arrow circle right" /> Free Pengurusan SKDP
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>

              <Table celled striped>
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
                      <Icon name="arrow circle right" /> Platinum : Rp.
                      1.000.000 /Bulan
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
                      <Icon name="arrow circle right" /> Alamat Kantor
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell style={{ fontSize: "1.1em" }}>
                      <Icon name="arrow circle right" /> Handle Surat
                      Masuk/Paket
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell style={{ fontSize: "1.1em" }}>
                      <Icon name="arrow circle right" /> Dapat 1 Dedicated Phone
                      number (021) khusus perusahaan anda dan dapat langsung
                      tersambung ke handphone anda
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell style={{ fontSize: "1.1em" }}>
                      <Icon name="arrow circle right" /> Free Pengurusan SKDP
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell style={{ fontSize: "1.1em" }}>
                      <Icon name="arrow circle right" /> Free greeting atas nama
                      perusaahaan anda
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell style={{ fontSize: "1.1em" }}>
                      <Icon name="arrow circle right" /> Dapat akses kerja
                      dicoworking space 2 days/month
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>

              <Table celled striped>
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
          </Grid>

          <div className="ui hidden divider" />
          <div className="ui divider" />
          <div className="ui hidden divider" />

          <Grid stackable columns={3}>
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
                      <Icon name="arrow circle right" /> Silver: Rp. 400.000
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
                      <Icon name="arrow circle right" /> Alamat Kantor
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell style={{ fontSize: "1.1em" }}>
                      <Icon name="arrow circle right" /> Handle Surat
                      Masuk/Paket
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell style={{ fontSize: "1.1em" }}>
                      <Icon name="arrow circle right" /> Telp Masuk (di Keep)
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell style={{ fontSize: "1.1em" }}>
                      <Icon name="arrow circle right" /> Free Pengurusan SKDP
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>

              <Table celled striped>
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
                      <Icon name="arrow circle right" /> Gold: Rp. 700.000
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
                      <Icon name="arrow circle right" /> Alamat Kantor
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell style={{ fontSize: "1.1em" }}>
                      <Icon name="arrow circle right" /> Handle Surat
                      Masuk/Paket
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell style={{ fontSize: "1.1em" }}>
                      <Icon name="arrow circle right" /> Dapat 1 Dedicated Phone
                      number (021) khusus perusahaan anda dan dapat langsung
                      tersambung ke handphone anda
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell style={{ fontSize: "1.1em" }}>
                      <Icon name="arrow circle right" /> Free greeting (umum)
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell style={{ fontSize: "1.1em" }}>
                      <Icon name="arrow circle right" /> Free Pengurusan SKDP
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>

              <Table celled striped>
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
                      <Icon name="arrow circle right" /> Platinum : Rp.
                      1.000.000 /Bulan
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
                      <Icon name="arrow circle right" /> Alamat Kantor
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell style={{ fontSize: "1.1em" }}>
                      <Icon name="arrow circle right" /> Handle Surat
                      Masuk/Paket
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell style={{ fontSize: "1.1em" }}>
                      <Icon name="arrow circle right" /> Dapat 1 Dedicated Phone
                      number (021) khusus perusahaan anda dan dapat langsung
                      tersambung ke handphone anda
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell style={{ fontSize: "1.1em" }}>
                      <Icon name="arrow circle right" /> Free Pengurusan SKDP
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell style={{ fontSize: "1.1em" }}>
                      <Icon name="arrow circle right" /> Free greeting atas nama
                      perusaahaan anda
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell style={{ fontSize: "1.1em" }}>
                      <Icon name="arrow circle right" /> Dapat akses kerja
                      dicoworking space 2 days/month di Officeplus Central park
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>

              <Table celled striped>
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

export default VirtualOffice;
