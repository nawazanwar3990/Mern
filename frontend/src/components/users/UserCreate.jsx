
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Card, Container, Form, Row, Col, Button } from 'react-bootstrap';
import {
    createUser
} from "../../actions/userAction";
function UserCreate() {

    const dispatch = useDispatch();
    const history = useHistory();


    const initialUserState = {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        file: ""
    };

    const [user, setUser] = useState(initialUserState);
    const handleInputChange = event => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    const applySubmission = event => {
        dispatch(createUser(user))
        history.push('/users');
        event.preventDefault();
    }
    return (

        <Container className='my-4'>
             <Form onSubmit={applySubmission}>
            <Card >
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    Create new user <Button variant="info" onClick={() => history.push('/users')}>
                        Back
                    </Button>
                </Card.Header>
                <Card.Body>

                   
                        <Row>
                            <Col sm={4}>
                                <Form.Control
                                    id="firstname"
                                    value={user.firstname}
                                    name="firstname"
                                    placeholder=" firstname"
                                    onChange={handleInputChange}
                                />

                            </Col>
                            <Col sm={4}>
                                <Form.Control
                                    id="lastname"
                                    value={user.lastname}
                                    name="lastname"
                                    placeholder=" lastname"
                                    onChange={handleInputChange} />

                            </Col>
                            <Col sm={4}>
                                <Form.Control
                                    id="email"
                                    value={user.email}
                                    name="email"
                                    placeholder=" email"
                                    onChange={handleInputChange} />

                            </Col>
                            <br></br>
                            <Col sm={4}>
                                <Form.Control
                                    id="password"
                                    value={user.password}
                                    name="password"
                                    placeholder=" password"
                                    onChange={handleInputChange} />

                            </Col>
                            <Col sm={4}>
                                <Form.Group controlId="formFile" className="mb-3">
                                    <Form.Label>Choose Photo from Gallery</Form.Label>
                                    <Form.Control type="file" />
                                </Form.Group>
                            </Col>
                        </Row>
                   
                </Card.Body>
                <Card.Footer className='d-flex justify-content-center align-items-center bg-transparent'>
                    <Button variant="primary"

                        type="submit">
                        Created
                    </Button>
                </Card.Footer>
            </Card>
            </Form>
        </Container>
    )
}
export default UserCreate;