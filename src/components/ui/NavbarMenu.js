import { Link } from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
export const NavbarMenu = () => {
    return (
        <Navbar inverse collapseOnSelect fixedTop>
                <Navbar.Header>
                        <Navbar.Brand>
                                <Link to="/">Explore Canada</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                        <Nav pullRight>
                            <LinkContainer to="findplaces">
                                <NavItem eventKey={1} >Search Location</NavItem>
                            </LinkContainer>
                                <NavDropdown eventKey={2} title="Popular Destinations" id="basic-nav-dropdown">
                                    <LinkContainer to="alberta">
                                        <MenuItem eventKey={2.1}>Alberta</MenuItem>
                                    </LinkContainer>
                                    <LinkContainer to="manitoba">
                                        <MenuItem eventKey={2.2}>Manitoba</MenuItem>
                                    </LinkContainer>
                                    <LinkContainer to="ontario">
                                        <MenuItem eventKey={2.3}>Ontario</MenuItem>
                                    </LinkContainer>
                                    <LinkContainer to="britishcolumbia">
                                        <MenuItem eventKey={2.3}>British Columbia</MenuItem>
                                    </LinkContainer>
                                    <LinkContainer to="quebec">
                                        <MenuItem eventKey={2.4}>Quebec</MenuItem>
                                    </LinkContainer>
                                </NavDropdown>
                            <LinkContainer to="search-videos">
                                <NavItem eventKey={4}>Search Videos</NavItem>
                            </LinkContainer>
                        </Nav>
                </Navbar.Collapse>
        </Navbar>
    )
}