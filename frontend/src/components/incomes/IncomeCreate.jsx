import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Card, Container, Form, Row, Col, Button } from 'react-bootstrap';

import {
    createIncome,
} from "../../actions/incomeAction";

function IncomeCreate() {

    const dispatch = useDispatch();
    const history = useHistory();

    const initialIncomeState = {
        name: "",
        value: "",
        file: ""
    };
    const [income, setIncome] = useState(initialIncomeState);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setIncome({ ...income, [name]: value });


    };

    const applySubmission = event => {
        dispatch(createIncome(income));
        history.push('/incomes');
        event.preventDefault();
    }
    return (
        <Container className='my-4'>
            <Form onSubmit={applySubmission}>
                <Card>
                    <Card.Header className='d-flex justify-content-between align-items-center'>
                        Create
                        <Button variant="info" onClick={() => history.push('/incomes')}>
                            Back
                        </Button>
                    </Card.Header>
                    <Card.Body>


                        <Row>
                            <Col sm={4}>
                                <Form.Control
                                    id="name"
                                    value={income.name}
                                    name="name"
                                    placeholder=" name"
                                    onChange={handleInputChange}
                                />

                            </Col>
                            <Col sm={4}>
                                <Form.Control
                                    id="value"
                                    value={income.value}
                                    name="value"
                                    placeholder=" value"
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
                    <Card.Footer className='d-flex justify-content-center align-items-center bg-transparent'> <Button variant="primary"

                        type="submit">
                        Created
                    </Button></Card.Footer>
                </Card>
            </Form>
        </Container>
    )
}

export default IncomeCreate;