import React from 'react';
import {Nav, NavItem, Navbar, Badge} from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';

// import { Dashboard, Header, Sidebar } from 'react-adminlte-dash';
class SideBar extends React.Component {
    componentDidMount() {

    }

    render() {
        return(
            <Navbar inverse fixedTop>
                <Navbar.Header>
                    <LinkContainer to="/">
                        <Navbar.Brand>
                            Music Shop
                        </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <IndexLinkContainer to="/" activeClassName="active">
                            <NavItem eventKey={1}>Home</NavItem>
                        </IndexLinkContainer>
                        <IndexLinkContainer to="/artists" activeClassName="active">
                            <NavItem  eventKey={2}>
                                Artists
                            </NavItem>
                        </IndexLinkContainer>
                        <IndexLinkContainer to="/tracks" activeClassName="active">
                            <NavItem  eventKey={3}>
                                Tracks
                            </NavItem>
                        </IndexLinkContainer>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    };
}

export default SideBar;