import React, { Component } from "react";
import { Link } from "react-router-dom";

import opCp7 from "../assets/images/officeplusCP/7.jpg";
import profilebanner from "../assets/images/officepluscp.png";
import logo from "../assets/images/logo.png";

import {
  Container,
  Divider,
  Grid,
  Header,
  Image,
  Segment
} from "semantic-ui-react";

class Profile extends Component {
  render() {
    return (
      <div className="row">
        <div
          text
          className="container-fluid dimmable"
          style={{
            backgroundSize: "cover",
            backgroundColor: "black",
            marginTop: "-53px",
            //backgroundImage: `url("${profilebanner}")`,
            padding: "8em",
            background: `linear-gradient(0deg,rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url("${profilebanner}")`,
            backgroundPosition: "50% 50%"
          }}
        >
          <Header
            as="h1"
            content="Officeplus Pte Ltd"
            inverted
            style={{
              fontSize: "2em",
              fontWeight: "normal",
              marginBottom: 0
            }}
          />
          <Header
            as="h2"
            content="Call us. (021) 2920 6264 or 0812 9072 3828"
            inverted
            style={{
              fontSize: "1.5em",
              fontWeight: "normal"
            }}
          />
        </div>

        <div
          className="ui container"
          style={{
            marginTop: "-50px"
          }}
        >
          <Segment style={{ padding: "8em 0em" }} vertical>
            <Grid container stackable verticalAlign="middle">
              <Grid.Row>
                <Grid.Column width={8}>
                  {/*<Header as="h3" style={{ fontSize: "1.5em" }}>
                    Officeplus Pte Ltd
        </Header>*/}
                  <p style={{ fontSize: "1.3em" }}>
                    At Officeplus, we offer workspaces that are inviting,
                    inspiring, and conducive to collaboration. You can choose
                    between private rooms and shared spaces – or a mix of both –
                    and get down to business right away.
                  </p>

                  <img
                    src={logo}
                    style={{ width: "15em", margin: "2em 0em" }}
                    alt="officeplus"
                  />

                  <p style={{ fontSize: "1.3em" }}>
                    Whether you’re a freelancer, an entrepreneur, or a startup,
                    we welcome you to join the community and go the distance
                    with us.
                  </p>
                  <p style={{ fontSize: "1.3em" }}>
                    Recognised as pioneer and one of the best coworking spaces
                    in Indonesia, Officeplus is thoughtfully designed to
                    increase casual collisions and heighten productivity, each
                    site is created by a hospitality designer to achieve the
                    same elevated environment with sleek, sumptuous surrounds
                    and perfect lighting. So much more than merely a place to
                    get a job done, Officeplus will enrich the way you work and
                    socialise.
                  </p>
                </Grid.Column>
                <Grid.Column floated="right" width={6}>
                  <Image bordered rounded size="large" src={opCp7} />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>

          <Segment style={{ padding: "8em 0em" }} vertical>
            <Container text>
              <Header as="h3" style={{ fontSize: "1.5em" }}>
                Our Story
              </Header>
              <p style={{ fontSize: "1.3em" }}>
                Officeplus began in 2011, grown out of frustration with serviced
                office operators who hid their pricing and provided inconsistent
                service. Officeplus was built around the vision that we wanted
                to help our customers grow their businesses and provide an
                environment that’s a great place to work.
              </p>

              <Divider
                as="h4"
                className="header"
                horizontal
                style={{ margin: "3em 0em", textTransform: "uppercase" }}
              >
                <Link to="/">What is Officeplus?</Link>
              </Divider>

              <p style={{ fontSize: "1.3em" }}>
                Officeplus is a place where people from various genres gather
                together, start-ups, web designers, social entrepreneurs,
                engineers, copywriters, photographers, interior designers,
                makeup artists, certified public accountants, mysterious people
                who do not know what they are doing In addition to sharing, I
                also hope to be a place to share ideas and business with each
                other and create new businesses and projects. It is also very
                popular for meetings with visitors. It is also a pleasant
                experience that you have used as a base for regional business
                due to good access. In luxury first class Central Park Jakarta
                area, exchanging members and exchanges across the industry,
                creatively to work day by day.
              </p>

              <Divider
                as="h4"
                className="header"
                horizontal
                style={{ margin: "3em 0em", textTransform: "uppercase" }}
              >
                <Link to="/">Who you can found here?</Link>
              </Divider>

              <p style={{ fontSize: "1.3em" }}>
                Members who jointly manage Officeplus have various businesses
                and services on the web, who are active in the latest technology
                trends, are also active as consultants of Growth hackers and
                SEO, those who are active as professionals in tax, accounting
                and entrepreneurs , We have various background people. Please
                feel free to voice when coming to the Officeplus! There is a
                group of people who bring up new business together. It is a
                place where not only sharing places but also sharing ideas and
                business with each other and creating their own projects. the
                Officeplus is a place to cultivate business as a social occasion
                for business.
              </p>
            </Container>
          </Segment>
        </div>
      </div>
    );
  }
}

export default Profile;
