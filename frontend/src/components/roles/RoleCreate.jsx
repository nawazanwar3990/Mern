import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Card, Container, Form, Row, Col, Button } from 'react-bootstrap';

import {
    createRole
} from "../../actions/roleAction";


function RoleCreate() {

    const dispatch = useDispatch();
    const history = useHistory();

    const initialRoleState = {
        name: "",
        description: "",
        file: ""

    };


    const [role, setRole] = useState(initialRoleState);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setRole({ ...role, [name]: value });
    };

    const applySubmission = event => {
        dispatch(createRole(role));
        history.push('/roles');
        event.preventDefault();
    }


    return (
        <Container className='my-4'>
            <Form onSubmit={applySubmission}>

                <Card >
                    <Card.Header className='d-flex justify-content-between align-items-center'>
                        Create new Roles<Button variant="info" onClick={() => history.push('/roles')}>
                            Back
                        </Button>

                    </Card.Header>
                    <Card.Body>

                        <Row>
                            <Col>
                                <Form.Control
                                    id="name"
                                    value={role.name}
                                    name="name"
                                    placeholder=" name"
                                    onChange={handleInputChange}
                                />

                            </Col>
                            <Col>
                                <Form.Control
                                    id="description"
                                    value={role.description}
                                    name="description"
                                    placeholder=" description"
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
                        </Button></Card.Footer>
                </Card>
            </Form>
        </Container>
    )
}

export default RoleCreate;