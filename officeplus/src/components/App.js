import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import NavBar from "./NavBar";

import Home from "./Home";
import Service from "./Service";
import Profile from "./Profile";
//import OurLocation from "./Location";

//import ContactUs from "./ContactUs";

import FooterBar from "./FooterBar";

//import { Container } from "semantic-ui-react";

class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <NavBar />

        <div
          className="text-center mb-5"
          style={{ minHeight: "100vh", marginTop: 100 }}
        >
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/service" component={Service} />

            <Route path="/profile" component={Profile} />
            {/*<Route path="/our-location" component={OurLocation} />
            <Route path="/contact-us" component={ContactUs} />
            */}
          </Switch>
        </div>

        <FooterBar />
      </div>
    );
  }
}

export default App;
