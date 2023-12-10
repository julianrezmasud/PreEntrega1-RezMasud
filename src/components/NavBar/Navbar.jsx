
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';

const category = [
    { id: 'jrm1984', name: 'Scripts', path: 'scripts', description: 'scripts category' },
    { id: 'jrm1985', name: 'Slates', path: 'slates', description: 'slates category' },
]


const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#">Hollywood Store</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                        <NavLink className={({ isActive }) => isActive ? 'btn btn-dark' : 'btn'} to='/'>Home</NavLink>


                        {category.map(category => <NavLink Key={category.id} className={({ isActive }) => isActive ? 'btn btn-dark' : 'btn'} to={`/category/${category.path}`}>{category.name}</NavLink>)}

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







