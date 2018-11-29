import React, { Component } from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
  Container
} from "mdbreact";

import logo from "../assets/images/logo.png";

import "./styles/NavBar.css";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      activeNav: "home"
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  handleNavClick = navname => {
    this.setState({
      activeNav: navname
    });
  };

  render() {
    const { activeNav } = this.state;

    return (
      <Navbar
        color="white"
        light
        expand="md"
        scrolling
        fixed="top"
        style={{ fontSize: "1.3em" }}
      >
        <Container>
          <NavbarBrand>
            <img src={logo} style={{ width: "8em" }} alt="officeplus" />
          </NavbarBrand>

          <NavbarToggler onClick={this.onClick} />

          <Collapse isOpen={this.state.collapse} navbar>
            <NavbarNav className="NavbarUl" right>
              <NavItem
                active={activeNav === "home"}
                onClick={() => this.handleNavClick("home")}
              >
                <NavLink to="/">Home</NavLink>
              </NavItem>

              <NavItem
                active={activeNav === "service"}
                onClick={() => this.handleNavClick("service")}
              >
                <NavLink to="/service">Service</NavLink>
              </NavItem>

              <NavItem
                name="location"
                active={activeNav === "location"}
                onClick={() => this.handleNavClick("location")}
              >
                <NavLink to="/location">Location</NavLink>
              </NavItem>

              <NavItem
                name="profile"
                active={activeNav === "profile"}
                onClick={() => this.handleNavClick("profile")}
              >
                <NavLink to="/profile">Profile</NavLink>
              </NavItem>

              {/*}
              <NavItem
                name="contact"
                active={activeNav === "contact"}
                onClick={() => this.handleNavClick("contact")}
              >
                <NavLink to="/contact">Contact</NavLink>
              </NavItem>
              */}
            </NavbarNav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavBar;
