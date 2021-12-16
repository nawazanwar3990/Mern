import { Nav, Navbar, Container, Form, Button, NavDropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
    const { isLoggedIn } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                {isLoggedIn ? (
                    <Nav className="ms-auto">
                       

                       <Nav.Link href="/categories">Categories</Nav.Link>
                        <Nav.Link href="/products">Products</Nav.Link>
                        <Nav.Link href="/incomes">Incomes</Nav.Link>
                        <Nav.Link href="/expenses">Expenses</Nav.Link>
                        <Nav.Link href="/users">Users</Nav.Link>
                        <Nav.Link href="/roles">Roles</Nav.Link>
                        <Nav.Link href="/permissions">Permissions</Nav.Link>
                        <Nav.Link href="/vendors">Vendors</Nav.Link>
                      
                       
                        <Nav.Link href="home">Logout</Nav.Link>
                    </Nav>
                ) : (
                    <Nav className="ms-auto">
                        <Nav.Link href="login">Login</Nav.Link>
                        <Nav.Link href="register">Register</Nav.Link>
                    </Nav>
                )}
            </Container>
        </Navbar>
    )
};

export default Header;