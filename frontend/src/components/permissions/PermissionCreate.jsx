import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Card, Container, Form, Row, Col, Button } from 'react-bootstrap';

import {
    permissionCreate
} from "../../actions/permissionAction";


function PermissionCreate() {

    const dispatch = useDispatch();
    const history = useHistory();

    const initialPermissionState = {
        name: "",
        description: "",
        file: ""

    };


    const [permission, setPermission] = useState(initialPermissionState);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setPermission({ ...permission, [name]: value });
    };

    const applySubmission = event => {
       
         dispatch(permissionCreate(permission));
        history.push('/permissions');
        event.preventDefault();
    }


    return (
        <Container className='my-4'>
            <Form onSubmit={applySubmission}>

                <Card >
                    <Card.Header className='d-flex justify-content-between align-items-center'>
                        Create new permission<Button variant="info" onClick={() => history.push('/permissions')}>
                            Back
                        </Button>

                    </Card.Header>
                    <Card.Body>

                        <Row>
                            <Col>
                                <Form.Control
                                    id="name"
                                    value={permission.name}
                                    name="name"
                                    placeholder=" name"
                                    onChange={handleInputChange}
                                />

                            </Col>
                            <Col>
                                <Form.Control
                                    id="description"
                                    value={permission.description}
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

export default PermissionCreate;