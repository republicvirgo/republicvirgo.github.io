import React, { Component } from "react";
//import { Link } from "react-router-dom";

//import opCp7 from "../assets/images/officeplusCP/7.jpg";
//import profilebanner from "../assets/images/officepluscp.png";

import cpMap from "../assets/images/cpmap.jpg";
import ecMap from "../assets/images/ecmap.jpg";

import {
  Container,
  Divider,
  Embed,
  //Grid,
  Header,
  //Image,
  Segment
} from "semantic-ui-react";

class Location extends Component {
  render() {
    return (
      <div>
        <Segment vertical>
          <Container text>
            <Header as="h3" style={{ fontSize: "1.5em" }}>
              Our Location
            </Header>

            <Divider
              as="h4"
              className="header"
              horizontal
              style={{
                color: "#5A96D0",
                margin: "3em 0em",
                textTransform: "uppercase"
              }}
            >
              Jakarta Barat
            </Divider>

            {/*<div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.6561364349645!2d106.78776011536759!3d-6.1767659955282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f65f684e6acb%3A0x692675d558c9fb66!2sCV.+OFFICEPLUS!5e0!3m2!1sen!2sid!4v1543460883003"
                  height="450"
                  frameborder="0"
                  style={{ border: 0, width: "100%" }}
                  allowfullscreen
                />
              </div>
              */}

            <Embed
              placeholder={cpMap}
              icon="map marker alternate"
              color="red"
              iframe={{
                allowFullScreen: true,
                style: {
                  border: 0,
                  width: "100%"
                }
              }}
              title="dsadasdsa"
              url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.6561364349645!2d106.78776011536759!3d-6.1767659955282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f65f684e6acb%3A0x692675d558c9fb66!2sCV.+OFFICEPLUS!5e0!3m2!1sen!2sid!4v1543460883003"
            />

            <p style={{ fontSize: "1.3em", marginTop: "1em" }}>
              Podomoro City Ruko GSA B / 8DH (Central Park)
              <br />
              Jl Letjen S.Parman - Jakarta Barat
            </p>

            <Divider
              as="h4"
              className="header"
              horizontal
              style={{
                color: "#5A96D0",
                margin: "3em 0em",
                textTransform: "uppercase"
              }}
            >
              Jakarta Selatan
            </Divider>

            <Embed
              placeholder={ecMap}
              icon="map marker alternate"
              iframe={{
                allowFullScreen: true,
                style: {
                  border: 0,
                  width: "100%"
                }
              }}
              url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.1724400044889!2d106.83401895817087!3d-6.218170098874665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3f60cb44b45%3A0x6917388205480f0c!2sEpiwalk!5e0!3m2!1sen!2sid!4v1543462196539"
            />

            <p style={{ fontSize: "1.3em", marginTop: "1em" }}>
              Epicentrum Walk 5th Floor A540 (Epiwalk)
              <br />
              Jl Rasuna Said - Jakarta Selatan (12960)
            </p>

            <Divider
              as="h4"
              className="header"
              horizontal
              style={{
                color: "#5A96D0",
                margin: "3em 0em",
                textTransform: "uppercase"
              }}
            >
              Contact Us
            </Divider>

            <p style={{ fontSize: "1.3em", marginTop: "1em" }}>
              Officeplus - Central Park
              <br />
              <i aria-hidden="true" class="phone volume icon" />{" "}
              <a href="tel:+622129206264">021 - 2920 6264</a>
              <br />
              <i aria-hidden="true" class="whatsapp icon" />{" "}
              <a
                href="https://api.whatsapp.com/send?phone=6281290723828"
                target="_blank"
                rel="noopener noreferrer"
              >
                0812 9072 3828
              </a>
              <br />
              <i aria-hidden="true" class="at icon" />{" "}
              <a href="mailto:sales@officepluscenter.com">
                sales@officepluscenter.com
              </a>
              <br />
              <br />
              Officeplus - Epicentrum Walk (Epiwalk)
              <br />
              <i aria-hidden="true" class="phone volume icon" />{" "}
              <a href="tel:+622129912050">021 - 2991 2050</a>
            </p>
          </Container>
        </Segment>
      </div>
    );
  }
}

export default Location;
