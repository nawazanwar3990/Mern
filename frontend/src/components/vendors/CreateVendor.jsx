
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Card, Container, Form, Row, Col, Button } from 'react-bootstrap';
import {
    createVendor
} from "../../actions/vendorAction";


function VendorCreate() {

    const dispatch = useDispatch();
    const history = useHistory();


    const initialVendorState = {
        firstname: "",
        lastname: "",
        discription: "",
        country: "",
        state: "",
        city: "",
        cell_phone_1: "",
        cell_phone_1: "",
        cell_phone_3: ""
      





    };

    const [vendor, setVendor] = useState(initialVendorState);
    const handleInputChange = event => {
        const { name, value } = event.target;
        setVendor({ ...vendor, [name]: value });
    };

    const applySubmission = event => {
      
         dispatch(createVendor(vendor))
        history.push('/vendors');
        event.preventDefault();
    }
    return (

        <Container className='my-4'>
            <Form onSubmit={applySubmission}>
                <Card>
                    <Card.Header className='d-flex justify-content-between align-items-center'>
                        Create  <Button variant="info" onClick={() => history.push('/vendors')}>
                            Back
                        </Button>
                    </Card.Header>
                    <Card.Body>


                        <Row>
                            <Col sm={4}>
                                <Form.Control
                                    id="firstname"
                                    value={vendor.firstname}
                                    name="firstname"
                                    placeholder=" firstname"
                                    onChange={handleInputChange}
                                />
                            </Col>
                            <Col sm={4}>
                                <Form.Control
                                    id="lastname"
                                    value={vendor.lastname}
                                    name="lastname"
                                    placeholder=" lastname"
                                    onChange={handleInputChange}
                                />
                            </Col>
                            <Col sm={4}>

                                <Form.Control
                                    id="discription"
                                    value={vendor.discription}
                                    name="discription"
                                    placeholder=" Discription"
                                    onChange={handleInputChange}

                                />
                            </Col>
                            <br></br>
                            <Col sm={4}>
                                <Form.Label>Country</Form.Label>
                                <Form.Control
                                    id="country"
                                    value={vendor.country}
                                    name="country"
                                    placeholder=" Country"
                                    onChange={handleInputChange}

                                />
                            </Col>
                            <Col sm={4}>
                                <Form.Label>State</Form.Label>
                                <Form.Control
                                    id="state"
                                    value={vendor.state}
                                    name="state"
                                    placeholder=" State"
                                    onChange={handleInputChange}

                                />
                            </Col>
                            <Col sm={4}>
                                <Form.Label>City</Form.Label>
                                <Form.Control
                                    id="city"
                                    value={vendor.city}
                                    name="city"
                                    placeholder=" City"
                                    onChange={handleInputChange}

                                />
                            </Col>
                            <br></br>
                            <Col sm={4}>
                                <Form.Label>Cell Phone1</Form.Label>
                                <Form.Control
                                    id="cell_phone_1"
                                    value={vendor.cell_phone_1}
                                    name="cell_phone_1"
                                    placeholder=" Cell_Phone_1"
                                    onChange={handleInputChange}

                                />
                            </Col>
                            <Col sm={4}>
                                <Form.Label>Cell Phone2</Form.Label>
                                <Form.Control
                                    id="cell_phone_2"
                                    value={vendor.cell_phone_2}
                                    name="cell_phone_2"
                                    placeholder=" cell_phone_2"
                                    onChange={handleInputChange} />
                            </Col>
                            <Col sm={4}>
                                <Form.Label>Cell Phone3</Form.Label>
                                <Form.Control
                                    id="cell_phone_3"
                                    value={vendor.cell_phone_3}
                                    name="cell_phone_3"
                                    placeholder=" Cell_Phone_3"
                                    onChange={handleInputChange}

                                />
                            </Col>
                            <br></br>
                            <Col sm={4}>

                                <Form.Group controlId="formFile" className="mb-3">
                                    <Form.Label>Choose Photo from Gallery</Form.Label>
                                    <Form.Control type="file" />
                                </Form.Group>
                            </Col>
                        </Row>


                    </Card.Body>
                    <Card.Footer className='d-flex justify-content-center align-items-center bg-transparent'>  <Button variant="primary"
                        type="submit">
                        Created
                    </Button></Card.Footer>
                </Card>
            </Form>
        </Container>
    )
}
export default VendorCreate;