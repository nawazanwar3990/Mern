import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Table, Card, Container } from 'react-bootstrap';

import {
  allProducts,

} from "../../actions/productAction";
const ProductList = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  const products = useSelector(state => state.products);


  useEffect(() => {
    dispatch(allProducts());
  }, []);

  return (
    <Container className='my-4'>
      <Card >
        <Card.Header className='d-flex justify-content-between align-items-center'>
      List of all Products  <Button variant="info" onClick={() => history.push('/product/create')}>
            Create
          </Button></Card.Header>
        <Card.Body>
          
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Description</th>
                <th>model</th>
                <th>sku</th>
                <th>upc</th>
                <th>ean</th>
                <th>location</th>
                <th>price</th>
                <th>quanity</th>
                <th>minimum_quantity</th>
                <th>order</th>
                <th>weight</th>
                <th>hieght</th>
                <th>length</th>
                <th>createdAt</th>
                <th>updatedAt</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>

              {products && products.map((product, index) => (
                <tr key={index}>
                  <td>{product._id}</td>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>{product.model}</td>
                  <td>{product.sku}</td>
                  <td>{product.upc}</td>
                  <td>{product.ean}</td>
                  <td>{product.location}</td>
                  <td>{product.price}</td>
                  <td>{product.quantity}</td>
                  <td>{product.minimum_quantity}</td>
                  <td>{product.weight}</td>
                  <td>{product.hieght}</td>
                  <td>{product.length}</td>
                  <td>{product.updatedAt}</td>
                  <td>{product.createdAt}</td>
                  <td>{product.updatedAt}</td>
                  <td>action</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    </Container>
  )
}
export default ProductList;