import React from "react";
import {MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle, MDBRow, MDBNavbar, MDBInput, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink} from "mdbreact";
import {BrowserRouter as Router} from 'react-router-dom';
import Clock from "../clock/Clock";

export default class Header extends React.Component {
    state = {
        isOpen: false,
        clockVisible: false
    };

    toggleCollapse = () => {
        this.setState({isOpen: !this.state.isOpen});
    }

    onChangeSearch(e) {
        console.log(e.target.value)
    }

    render() {
        const {menus} = this.props;

        let clockClasses = ["clock"]

        if (this.state.clockVisible) {
            clockClasses.push("active");
        }
        return (
            <Router>
                <MDBNavbar color="default-color" dark expand="md" className="rtl">
                    <MDBNavbarBrand>
                        <strong className="white-text">{this.props.title}</strong>
                    </MDBNavbarBrand>
                    <MDBNavbarNav right>
                        {menus.map((menu) => (
                            <MDBNavItem>
                                <MDBNavLink to="#">{menu.title}</MDBNavLink>
                            </MDBNavItem>
                        ))}

                        <MDBNavItem>
                            <MDBDropdown>
                                <MDBDropdownToggle nav caret>
                                    <div className="d-none d-md-inline">Dropdown</div>
                                </MDBDropdownToggle>
                                <MDBDropdownMenu className="dropdown-default">
                                    <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                                    <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                                    <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                                    <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavItem>
                    </MDBNavbarNav>
                    <MDBNavbarNav left>

                        {/*<MDBNavItem>
                            <MDBNavLink to="#!">
                                <Clock/>
                            </MDBNavLink>
                        </MDBNavItem>*/}
                    </MDBNavbarNav>
                </MDBNavbar>
            </Router>
        );
    }
}


