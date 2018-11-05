import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false
    }
  }

  toggleNav() {
    this.setState({ isNavOpen: !this.state.isNavOpen });
  }

  render() {
    // Collapse to collapse enclosed tags for small screen
    return(
      // React Fragment using <>
      <div>
        <Navbar dark expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className = "mr-auto" href="/">

            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem className = 'list-item'>
                  <NavLink className = "nav-link" to = "/home" >
                    <span className="fa fa-home fa-lg"></span>
                    Home
                  </NavLink>
                </NavItem>
                <NavItem className = 'list-item'>
                  <NavLink className = "nav-link" to = "/aboutus" >
                    <span className="fa fa-info fa-lg"></span>
                    About Us
                  </NavLink>
                </NavItem>
                <NavItem className = 'list-item'>
                  <NavLink className = "nav-link" to = "/menu" >
                    <span className="fa fa-list fa-lg"></span>
                    Menu
                  </NavLink>
                </NavItem>
                <NavItem className = 'list-item'>
                  <NavLink className = "nav-link" to = "/contactus" >
                    <span className="fa fa-address-card fa-lg"></span>
                    Contact Us
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        <Jumbotron>
          <div className='container'>
            <div className='row row-header'>
              <div className='col-12 col-sm-6'>
                <h1> Restaurant Le Gracia</h1>
                <p>We deal with continental, indian and mexican cuisine. Devour It!</p>
              </div>
            </div>
          </div>
        </Jumbotron>
      </div>
    );
  }
}

export default Header;