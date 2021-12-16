import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Row, Col, Container, Button } from 'react-bootstrap';
import { register } from "../../actions/auth";


const Register = () => {

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")


  const dispatch = useDispatch();


  function handleRegister(e) {
    e.preventDefault()
    const data = {
      'firstname': firstname,
      'lastname': lastname,
      'email': email,
      'password': password
    }
    dispatch(register(data));
  }

  return (
    <Container>
      <Form onSubmit={handleRegister}>
        <Row>
          <Col>
            <Form.Control placeholder="First name" onChange={(e) => setFirstname(e.target.value)} />
          </Col>
          <Col>
            <Form.Control placeholder="Last name" onChange={(e) => setLastname(e.target.value)} />
          </Col>
        </Row>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>

    </Container>
  )

}

export default Register;

