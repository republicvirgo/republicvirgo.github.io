import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import NavBar from "./NavBar";
import Home from "./Home";
import Service from "./Service";

import LegalService from "./product/LegalService";
import Workstation from "./product/Workstation";
import EventSpace from "./product/EventSpace";
import MeetingRoom from "./product/MeetingRoom";
import PrivateOffice from "./product/PrivateOffice";
import CoworkingSpace from "./product/CoworkingSpace";
import VirtualOffice from "./product/VirtualOffice";
import ClassRoom from "./product/ClassRoom";

import Profile from "./Profile";
import Locations from "./Locations";
import Contact from "./Locations";
import FooterBar from "./FooterBar";

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

            <Route path="/services/legal-service" component={LegalService} />
            <Route path="/services/workstation" component={Workstation} />
            <Route path="/services/event-space" component={EventSpace} />
            <Route path="/services/meeting-room" component={MeetingRoom} />
            <Route path="/services/private-office" component={PrivateOffice} />
            <Route
              path="/services/coworking-space"
              component={CoworkingSpace}
            />
            <Route path="/services/virtual-office" component={VirtualOffice} />
            <Route path="/services/class-room" component={ClassRoom} />

            <Route path="/profile" component={Profile} />
            <Route path="/location" component={Locations} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>

        <FooterBar />
      </div>
    );
  }
}

export default App;
