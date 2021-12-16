import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Table, Card, Container } from 'react-bootstrap';

import {
  allCategories,
} from "../../actions/categoryAction";


const CategoryList = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  const categories = useSelector(state => state.categories);
  useEffect(() => {
    dispatch(allCategories());
  }, []);
  return (
    <Container className='my-4'>
      <Card >
        <Card.Header className='d-flex justify-content-between align-items-center'>
          List of all Categories
          <Button variant="info" onClick={() => history.push('/category/create')}>
            Create
          </Button>
        </Card.Header>
        <Card.Body>

          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Description</th>
                <th>parent_id</th>
                <th>order</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {categories && categories.map((category, index) => (
                <tr key={index}>
                  <td>{category._id}</td>
                  <td>{category.name}</td>
                  <td>{category.description}</td>
                  <td>{category.parent_id}</td>
                  <td>{category.order}</td>
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
export default CategoryList;