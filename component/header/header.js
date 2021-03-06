import React, {Component} from 'react';
import { Navbar,NavLink,Nav,NavDropdown,FormControl,Button,Form,Container } from 'react-bootstrap';


class Header extends Component {
    render() {
        return (
            <div>
                <Navbar  bg="dark"  variant="dark" expand="lg">
                    <Container>
                    <Navbar.Brand  to={"#home"}>React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavLink   to="/home">
                                home
                            </NavLink>
                            <NavLink  to="/link">
                                Link
                            </NavLink>

                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default Header;