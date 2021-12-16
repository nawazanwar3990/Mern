import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Container } from 'react-bootstrap';
import { login } from "../../actions/auth";
import { Redirect } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { isLoggedIn } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    if (isLoggedIn) {
        return <Redirect to="/home" />;
    }
    function handleLogin(e) {
        e.preventDefault();
        const data = {
            'email': email,
            'password': password
        }
        dispatch(login(data))
            .then(() => {
                window.location.reload();
            });
    }
    return (
        <Container>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        value={email}
                        placeholder="Enter email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </Container>
    )

}
export default Login;

