
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CartWidget } from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#">Hollywood Store</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                        <NavLink className={({ isActive }) => isActive ? 'btn btn-dark' : 'btn'} to='/'>Home</NavLink>

                        <NavLink className={({ isActive }) => isActive ? 'btn btn-dark' : 'btn'} to='/category/scripts'>Scripts</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'btn btn-dark' : 'btn'} to='/category/slates'>Slates</NavLink>
                    </Nav>
                    <Nav>

                        <Link className="btn" to='/cart'>
                            <CartWidget />
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar







