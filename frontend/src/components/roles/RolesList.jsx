import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Table, Card, Container } from 'react-bootstrap';

import {

  allRole,

} from "../../actions/roleAction";

function RolesLIst() {

  const dispatch = useDispatch();
  const history = useHistory();
  const roles = useSelector(state => state.roles);
  

  useEffect(() => {
    dispatch(allRole());
  }, []);
  return (
    <Container className='my-4'>
      <Card >
        <Card.Header className='d-flex justify-content-between align-items-center'>List of all Role
          <Button variant="info" onClick={() => history.push('/role/create')}>
            Create
          </Button></Card.Header>
        <Card.Body>

          <Table striped bordered hover >
            <thead>
              <tr>
                <th>#</th>
                <th>name</th>
                <th>description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {roles && roles.map((role, index) => (
                <tr key={index}>
                  <td>{role._id}</td>
                  <td>{role.name}</td>
                  <td>{role.description}</td>
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
export default RolesLIst;