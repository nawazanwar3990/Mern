
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Card, Container, Form, Row, Col, Button } from 'react-bootstrap';

import {
  createProduct
} from "../../actions/productAction"

function ProductCreate() {
  const dispatch = useDispatch();
  const history = useHistory();


  const initialProductState = {
    name: null,
    description: null,
    model: "",
    sku: "",
    upc: "",
    ean: "",
    location: "",
    price: "",
    quantity: "",
    minimum_quantity: "",
    order: "",
    weight: "",
    hieght: "",
    length: "",
    file: ""

  };
  const [product, setProduct] = useState(initialProductState);

  const handleInputChange = event => {
    const { name, value } = event.target;
    if (event.target.name == 'file') {
      let formData = new FormData();
      formData.append("file", event.target.files[0]);
      setProduct({ ...product, [name]: formData });
    } else {
      setProduct({ ...product, [name]: value });
    }

  };
  const applySubmission = event => {

    console.log(product);
    dispatch(createProduct(product));
    //  history.push('/products');
    event.preventDefault();
  }
  return (
    <Container className='my-4'>
      <Form onSubmit={applySubmission}>
        <Card>
          <Card.Header className='d-flex justify-content-between align-items-center'>
            Create new Product  <Button variant="info" onClick={() => history.push('/products')}>
              Back
            </Button>
          </Card.Header>
          <Card.Body>

            <Row>
              <Col sm={4}>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  id="name"
                  value={product.name}
                  name="name"
                  placeholder=" Name"
                  onChange={handleInputChange}
                />
              </Col>
              <Col sm={4}>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  id="description"
                  value={product.description}
                  name="description"
                  placeholder=" Description"
                  onChange={handleInputChange} />
              </Col>
              <Col sm={4}>
                <Form.Label>Model</Form.Label>
                <Form.Control
                  id="model"
                  value={product.model}
                  name="model"
                  placeholder=" Model"
                  onChange={handleInputChange} />
              </Col>
              <br></br>
              <Col sm={4}>
                <Form.Label>Sku</Form.Label>
                <Form.Control
                  id="sku"
                  value={product.sku}
                  name="sku"
                  placeholder=" Sku"
                  onChange={handleInputChange} />
              </Col>
              <Col sm={4}>
                <Form.Label>Upc</Form.Label>
                <Form.Control
                  id="upc"
                  value={product.upc}
                  name="upc"
                  placeholder=" Upc"
                  onChange={handleInputChange} />
              </Col>
              <Col sm={4}>
                <Form.Label>Ean</Form.Label>
                <Form.Control
                  id="ean"
                  value={product.ean}
                  name="ean"
                  placeholder=" Ean"
                  onChange={handleInputChange} />
              </Col>
              <br></br>
              <Col sm={4}>
                <Form.Label>Location</Form.Label>
                <Form.Control
                  id="location"
                  value={product.location}
                  name="location"
                  placeholder=" Location"
                  onChange={handleInputChange} />
              </Col>
              <Col sm={4}>
                <Form.Label>Price</Form.Label>
                <Form.Control
                  id="price"
                  value={product.price}
                  name="price"
                  placeholder=" Price"
                  onChange={handleInputChange} />
              </Col>
              <Col sm={4}>
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                  id="quantity"
                  value={product.quantity}
                  name="quantity"
                  placeholder=" Quantity"
                  onChange={handleInputChange} />
              </Col>
              <br></br>
              <Col sm={4}>
                <Form.Label>Minimum Quantity</Form.Label>
                <Form.Control
                  id="minimum_quantity"
                  value={product.minimum_quantity}
                  name="minimum_quantity"
                  placeholder=" Minimum Quantity"
                  onChange={handleInputChange} />
              </Col>

              <Col sm={4}>
                <Form.Label>Select Order</Form.Label>
                <Form.Control
                  id="order"
                  value={product.select_order}
                  name="order"
                  placeholder=" order"
                  onChange={handleInputChange} />
              </Col>

              <Col sm={4}>
                <Form.Label>Dimensions(W)</Form.Label>
                <Form.Control
                  id="weight"
                  value={product.weight}
                  name="weight"
                  placeholder=" weight"
                  onChange={handleInputChange} />
              </Col>
              <br></br>
              <Col sm={4}>
                <Form.Label>Dimensions(H)</Form.Label>
                <Form.Control
                  id="hieght"
                  value={product.hieght}
                  name="hieght"
                  placeholder=" hieght"
                  onChange={handleInputChange} />
              </Col>
              <Col sm={4}>
                <Form.Label>Dimensions(L)</Form.Label>
                <Form.Control
                  id="length"
                  value={product.lenth}
                  name="length"
                  placeholder=" Length"
                  onChange={handleInputChange} />
              </Col>

              <Col sm={4}>
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Choose Photo from Gallery</Form.Label>
                  <Form.Control
                    accept="image/*"
                    name="file"
                    onChange={handleInputChange}
                    type="file" />
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
    </Container >
  )
}

export default ProductCreate;