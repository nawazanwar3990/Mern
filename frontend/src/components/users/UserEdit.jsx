import React from "react";
import { Button, Form, Col, Row, Card, Container } from 'react-bootstrap';

function UserEdit() {
    return (

        <Container className='my-4'>
            <Card >
                <Card.Header>Edit</Card.Header>
                <Card.Body>

                    <Form >
                        <Row>
                            <Col>
                                <Form.Control

                                />

                            </Col>
                            <Col>
                                <Form.Control
                                />

                            </Col>
                            <Col>
                                <Form.Control
                                />

                            </Col>
                            <Col>
                                <Form.Control
                                />

                            </Col>
                        </Row>

                    </Form>
                </Card.Body>
                <Card.Footer className="text-muted"> <Button variant="primary"

                    type="submit">
                    ok
                </Button></Card.Footer>
            </Card>
        </Container>
    )
}

export default UserEdit;