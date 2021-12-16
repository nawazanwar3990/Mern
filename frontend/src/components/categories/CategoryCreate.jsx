import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Card, Container, Form, Row, Col, Button } from 'react-bootstrap';

import {
  createCategory
} from "../../actions/categoryAction";

function CategoryCreate() {

  const dispatch = useDispatch();
  const history = useHistory();


  const initialCategoryState = {
    name: "",
    description: "",
    parent_id: "",
    order: ""



  };

  const [category, setCategory] = useState(initialCategoryState);
  const handleInputChange = event => {
    const { name, value } = event.target;
    setCategory({ ...category, [name]: value });
  };

  const applySubmission = event => {

    dispatch(createCategory(category));


    history.push('/categories');
    event.preventDefault();
  }
  return (

    <Container className='my-4'>
      <Form onSubmit={applySubmission}>
        <Card >
          <Card.Header className='d-flex justify-content-between align-items-center'>
            Create
            <Button variant="info" onClick={() => history.push('/categories')}>
              Back
            </Button>
          </Card.Header>
          <Card.Body>

            <Row>
              <Col sm={4}>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  id="name"
                  value={category.name}
                  name="name"
                  placeholder=" name"
                  onChange={handleInputChange}
                />
              </Col>
              <Col sm={4}>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  id="description"
                  value={category.description}
                  name="description"
                  placeholder=" description"
                  onChange={handleInputChange} />
              </Col>
              <br></br>
              <Col sm={4}>
                <Form.Label>Parent</Form.Label>
                <Form.Control
                  id="parent_id"
                  value={category.parent_id}
                  name="parent_id"
                  placeholder=" parent_id"
                  onChange={handleInputChange} />
              </Col>

              <Col sm={4}>
                <Form.Label> Order</Form.Label>
                <Form.Control
                  id="order"
                  value={category.order}
                  name="order"
                  placeholder="Order"
                  onChange={handleInputChange} />
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
          <Card.Footer className='d-flex justify-content-center align-items-center bg-transparent'>
            <Button variant="primary" type="submit">
              Save
            </Button>
          </Card.Footer>
        </Card>
      </Form>
    </Container>
  )
}
export default CategoryCreate;